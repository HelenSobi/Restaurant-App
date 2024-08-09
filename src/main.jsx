import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import App from './App';
import Homepage from './pages/Homepage';
import RestListPage from './components/RestListPage';
import RestViewDetail from './components/RestViewDetail';
import Error from './components/Error';
import './index.css';
import ClassComp from './components/ClassComp';

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
  // errorElement:<Error/>
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
