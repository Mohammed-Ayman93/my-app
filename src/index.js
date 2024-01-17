import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import Feature from './pages/Feature';
import Serveic from './pages/Serveic';
import Portfolio from './pages/Portfolio';
import ErrorPage from './pages/ErrorPage';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Feature",
    element: <Feature />,
  },
  {
  path: "/Serveic",
  element: <Serveic />,
},
{
  path: "/Portfolio",
  element: <Portfolio />,
},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


