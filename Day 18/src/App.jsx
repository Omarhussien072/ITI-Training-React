import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout.'
import Products from './components/Products/Products'

function App() {
  const routes = createBrowserRouter([
    {
      path: '/', element: <Layout />, children: [
        {path: '/products', element: <Products />}
      ]
    }
  ])
  return (
    <>
      <RouterProvider router={routes}/>
    </>
  )
}

export default App
