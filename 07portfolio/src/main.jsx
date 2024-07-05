import React from 'react'
import ReactDOM from 'react-dom/client'
import Route, { createBrowserRouter, createRoutersFromElements, RouterProvider } from 'react-router-dom'
import './index.css'
import Layout from './layout.jsx'


const router = createBrowserRouter(
  createRoutersFromElements(
    <Route path= '/' element ={<Layout />}>
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider  router={router}/>
  </React.StrictMode>,
)
