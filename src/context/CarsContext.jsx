import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { jwtDecode } from 'jwt-decode';

export let carsContext = createContext();

export default function CarsContextProvider({ children }) {
    const [save, setSave] = useState(null);
    const [savedCarIds, setSavedCarIds] = useState(new Set());

    function getUserIdFromToken() {
        try {
            const token = localStorage.getItem('userToken');
            if (!token) return null;

            const decoded = jwtDecode(token);
            if (decoded.exp && decoded.exp * 1000 < Date.now()) {
                localStorage.removeItem('userToken');
                return null;
            }

            return decoded?.userId || decoded?.nameid || decoded?.sub;
        } catch (error) {
            console.error("Token decoding failed:", error);
            return null;
        }
    }

    async function getCarToSave(carId) {
        const userId = getUserIdFromToken();

        if (!userId) {
            toast.error('Please login to save cars');
            return false;
        }

        try {
            await axios.post(
                `https://azmycarsapi.runasp.net/api/Favourites/${carId}/${userId}`
            );
            
            setSavedCarIds(prev => {
                const newSet = new Set(prev);
                newSet.add(carId);
                return newSet;
            });
            
            toast.success('Car saved to favorites!');
            return true;
        } catch (error) {
            console.error('Error saving car:', error);
            
            if (error.response?.status === 401) {
                toast.error('Session expired - please login again');
                localStorage.removeItem('userToken');
            } else if (error.response?.status === 400) {
                toast.error('Car already saved');
            } else {
                toast.error('Failed to save car. Please try again.');
            }
            
            return false;
        }
    }

    async function removeCarFromFavorites(carId) {
        const userId = getUserIdFromToken();
        if (!userId) return false;

        try {
            await axios.delete(
                `https://azmycarsapi.runasp.net/api/Favourites/${carId}/${userId}`
            );
            
            setSavedCarIds(prev => {
                const newSet = new Set(prev);
                newSet.delete(carId);
                return newSet;
            });
            
            toast.success('Car removed from favorites!');
            return true;
        } catch (error) {
            console.error('Error removing car:', error);
            toast.error('Failed to remove car. Please try again.');
            return false;
        }
    }

    async function getCarsSave() {
        const userId = getUserIdFromToken();
        if (!userId) return;

        try {
            let { data } = await axios.get(
                `https://azmycarsapi.runasp.net/api/Favourites/${userId}`
            );
            setSave(data);
            setSavedCarIds(new Set(data.map(car => car.id)));
        } catch (error) {
            console.error('Error loading saved cars:', error);
            if (error.response?.status === 401) {
                localStorage.removeItem('userToken');
            }
        }
    }

    useEffect(() => {
        getCarsSave();  
    }, []);

    return (
        <carsContext.Provider value={{ 
            getCarToSave, 
            removeCarFromFavorites,
            save, 
            savedCarIds,
            refreshFavorites: getCarsSave
        }}>
            {children}
        </carsContext.Provider>
    );
}