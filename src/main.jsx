import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import './index.css'
import App from './App.jsx'
import Root from './Layout/Root.jsx';
import Login from './components/login.jsx';
import Navbar from './components/Navbar.jsx';
import Signup from './components/signup.jsx';
import Notes from './components/notes.jsx';
import Home from './components/Home.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    children:[
      {
        index:true,
        Component:Home
      },
      {
        path:'signup',
        Component:Signup
      },
      {
        path:'login',
        Component:Login
      },
      {
        path:'notes',
        Component:Notes
      },
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
