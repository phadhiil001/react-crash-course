import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import NewPost, { action as newPostAction } from './routes/NewPost'
import RootLayout from './routes/RootLayout'
import Posts, { loader as postLoader } from './routes/Posts'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import PostDetails, { loader as postDetailsLoader} from './routes/PostDetails'

const router = createBrowserRouter ([
  { path: '/', 
    element: <RootLayout />, 
    children: [
      { path: '/', 
        element: <Posts />, 
        loader: postLoader,
        children: [
          { path: '/create-post', element: <NewPost />, action: newPostAction },
          { path: '/:postId', element: <PostDetails />, loader: postDetailsLoader}
      ]},
  ]},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />  
  </React.StrictMode>
)
