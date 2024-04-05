import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/header'
import Sidebar from './components/sidebar'
import Inbox from './routers/inbox'
import Compose from './routers/compose'

import './App.css'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Inbox/>
    },
    {
      path: "/compose",
      element: <Compose/>
    }

  ])

  return (
    <>
      <Header />
      <div className="flex flex-row">
        <Sidebar />
        
        <RouterProvider router={router}/>
      </div>
      
    </>
  )
}

export default App
