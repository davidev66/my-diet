import { createBrowserRouter, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import MainLayout from './layout/MainLayout';
import Calculator from './pages/Calculator';
import Planner from './pages/Planner';
import Login from './pages/Login';

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: '/', element: <Navigate to="/home" /> },
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/calculator',
        element: <Calculator />,
      },
      {
        path: '/planner',
        element: <Planner />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/login',
        element: <Login />,
      },
    ],
  },
]);
