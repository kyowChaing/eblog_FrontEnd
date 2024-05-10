import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Root from './Components/Root.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from './Components/HomePage/HomePage.jsx'
import LogIn from './Components/User/LogIn.jsx'
const router = createBrowserRouter([
  {
    path:'/',
    element:<Root></Root>,
    errorElement:<Error></Error>,
    children:[
      {
        path:'/',
        element:<HomePage></HomePage>
      },
      {
        path:'/login',
        element:<LogIn></LogIn>
      },
    ]
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
