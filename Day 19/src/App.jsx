import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout.'
import Home from './components/Home/Home'
import About from './components/About/About'
import NotFound from './components/NotFound/NotFound'

function App() {
  const routes = createBrowserRouter([
    {
      index: '/', element: <Layout />, children: [
        { path: '/home', element: <Home /> },
        { path: '/about', element: <About /> },
        { path: '/*', element: <NotFound /> },
      ]
    }
  ])
  return (
    <>
      <RouterProvider router={routes} />
    </>
  )
}

export default App
