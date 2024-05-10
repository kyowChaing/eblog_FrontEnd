import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Root from './Components/Root.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from './Components/HomePage/HomePage.jsx'
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
    ]
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
