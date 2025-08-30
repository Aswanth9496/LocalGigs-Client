
import { createBrowserRouter } from "react-router-dom"

import LandingPage from "../pages/LandingPage/LandingPage";

import AuthLayouts from "../layouts/AuthLayouts";
import LoginForm from "../components/public/auth/LoinForm";
import SignUpPage from "../pages/AuthPages/SignUpPage";
import ForgotPasswordForm from "../components/public/auth/ForgotPasswordForm";

import UserLayout from "../layouts/UserLayout";
import UserProfilePage from "../pages/UserPages/UserProfilePage";


const router = createBrowserRouter([
  {
    path:'/',
    element:<LandingPage/>
  },
  {
    path: "/auth",
    element: <AuthLayouts />,
    children: [
      { path: "login", element: <LoginForm /> },
      { path: "signup", element: <SignUpPage /> },
      { path: "forgotPassword", element: <ForgotPasswordForm /> },
    ]
  },
  {
    path:'/user',
    element:<UserLayout/>,
    children: [
      { path: "profile", element: <UserProfilePage /> },
    ]
  }
  
  
]);


export default router