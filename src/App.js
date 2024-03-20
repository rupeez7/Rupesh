import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './features/home/Home'
import About from './features/home/About'
import Content from './features/home/Content'
import NotFound from './ui/NotFound'
import RootLayOut from './ui/RootLayout'
import Detail from './features/home/Detail'

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayOut />,
      children: [
        { index: true, element: <Home /> },
        { path: 'product/detail/:id', element: <Detail /> },
        { path: 'about', element: <About /> },
        { path: 'content', element: <Content /> },
        { path: '*', element: <NotFound /> },

      ]

    },


  ])
  return <RouterProvider router={router} />
}

export default App
