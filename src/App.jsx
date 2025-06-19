import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Lauout from './component/layout/Lauout'
import Home from './component/Home/Home'
import Login from './component/Login/Login'
import Register from './component/Register/Register'
import Error from './component/Error/Error'
import Favcards from './component/Favcards/Favcards'
import Contact from './component/Contact/Contact'
import Brands from './component/Brands/Brands'
import About from './component/About/About'
import Listings from './component/Listings/Listings'
import UseContextProvider from './context/UserContext'
import { Toaster } from 'react-hot-toast'
import ProdectRoute from './component/ProductedRoute/ProdectRoute'
import ProductDetails from './component/ProductDetails/ProductDetails'
import CarsContextProvider from './context/CarsContext'

function App() {
  const routers = createBrowserRouter([{
    path: '',
    element: <Lauout />,
    children: [
      { index: true, element: <ProdectRoute><Home/></ProdectRoute> },
      { path: 'login', element: <Login/> },
      { path: 'register', element: <Register/> },
      { path: '*', element: <Error /> },
      { path: 'favcards', element: <ProdectRoute><Favcards/></ProdectRoute> },
      { path: 'contact', element: <ProdectRoute><Contact/></ProdectRoute> },
      { path: 'brands', element: <ProdectRoute><Brands /></ProdectRoute> },
      { path: 'about', element: <ProdectRoute><About /></ProdectRoute> },
      { path: 'listing', element: <ProdectRoute><Listings /></ProdectRoute> },
      { path: '/productdetails/:id', element: <ProdectRoute><ProductDetails/></ProdectRoute> },
    ]
  }])

  return (
    <CarsContextProvider>
      <UseContextProvider>
        <RouterProvider router={routers}></RouterProvider>
        <Toaster 
          position="top-right"
          toastOptions={{
            duration: 3000,
            style: {
              background: '#363636',
              color: '#fff',
            },
          }}
        />
      </UseContextProvider>
    </CarsContextProvider>
  )
}

export default App