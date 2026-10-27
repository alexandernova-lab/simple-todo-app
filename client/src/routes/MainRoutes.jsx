import React, { useContext } from "react";
import { createBrowserRouter, Navigate } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainLayout from "../layout/MainLayout.jsx";
import HomePage from "../pages/HomePage.jsx";
import LoginPage from "../pages/LoginPage.jsx";
import RegisterPage from "../pages/RegisterPage.jsx";
import AuthContext from "../contexts/AuthContext.jsx";

const MainRoutes = () => {
  // Auth Context
  const { user } = useContext(AuthContext);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: user ? <HomePage /> : <Navigate to="/register" />,
        },
        {
          path: "/login",
          element: !user ? <LoginPage /> : <Navigate to="/" />,
        },
        {
          path: "/register",
          element: !user ? <RegisterPage /> : <Navigate to="/" />,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default MainRoutes;
