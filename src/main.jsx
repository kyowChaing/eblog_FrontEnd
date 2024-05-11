import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Root from './Components/Root.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from './Components/HomePage/HomePage.jsx'
import LogIn from './Components/User/LogIn.jsx'
import WishList from './Components/WishList/WishList.jsx'
import FeaturedBlogs from './Components/FeaturedBlogs/FeaturedBlogs.jsx'
import Error from './Components/Error.jsx'
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
        path:'/featuredblogs',
        element:<FeaturedBlogs></FeaturedBlogs>
      },
      {
        path:'/wishlist',
        element:<WishList></WishList>
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
