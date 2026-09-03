import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout.'
import Home from './components/Home/Home'
import NotFound from './components/NotFound/NotFound'
import Pizza from './components/Pizza/Pizza'
import Register from './components/Register/Register'
import AppProvider from './context/AppContext'
import Products from './components/Products/Products'

function App() {
  const routes = createBrowserRouter([
    {
      index: '/', element: <Layout />, children: [
        { path: '/home', element: <Home /> },
        { path: '/pizza', element: <Pizza /> },
        { path: '/register', element: <Register /> },
        { path: '/products', element: <Products /> },
        { path: '/*', element: <NotFound /> },

      ]
    }
  ])
  return (
    <>
    <AppProvider>
      <RouterProvider router={routes} />
    </AppProvider>
    </>
  )
}

export default App
