import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Homepage from './pages/Homepage.jsx';
import RestListPage from './components/RestListPage';
import RestViewDetail from './components/RestViewDetail.jsx'
import Error from './components/Error.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
    {
      path:"/",
      element:<Homepage/>,
    },
    {
      path:"restaurants",
      element:<RestListPage/>,
    },
    {
      path:"/:resID",
      element:<RestViewDetail/>
    }
  ],
  errorElement:<Error/>
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
