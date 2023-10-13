import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Components/Layout/Layout';
import Home from './Home/Home';
import Applied from './Components/Layout/Applied/Applied';
import ViewDetails from './Components/Layout/ViewDetails/ViewDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children:[
      {
        path: '/',
        loader: () => fetch('../jobs.json'),
        element: <Home></Home>
      },
      {
        path: `/featuredJobs/:id`,
        loader: () => fetch('../jobs.json'),
        element: <ViewDetails></ViewDetails>
      },
      {
        path: '/applied',
        element: <Applied></Applied>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
