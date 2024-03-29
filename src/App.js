import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import About from './features/home/About'
import Contact from './features/home/Contact'
import NotFound from './ui/NotFound'
import RootLayOut from './ui/RootLayout'
import Main from './features/home/dashboard/Main'



const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayOut />,
      children: [
        { index: true, element: <Main /> },
        // { path: 'product/detail/:id', element: <Detail /> },
        { path: 'about', element: <About /> },
        { path: 'content', element: <Contact /> },
        { path: '*', element: <NotFound /> },

      ]

    },


  ])
  return <RouterProvider router={router} />
}

export default App