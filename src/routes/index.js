import { publicRoutes } from "./routes";
import { lazy } from "react";

const ResetPassword = lazy(() => import("../pages/resetPassword"));
const VerifyEmail = lazy(() => import("../pages/verifyEmail"));
const Home = lazy(() => import("../pages/home"));
const Login = lazy(() => import("../pages/login"));
const Register = lazy(() => import("../pages/register"));
const NotFound = lazy(() => import("../pages/notFound"));
// import Home from "../pages/home";
// import Login from "../pages/login";
// import Register from "../pages/register";
// import NotFound from "../pages/notFound";
// routes client

const clientPages = [
  { com: <Home />, path: publicRoutes.home },
  { com: <VerifyEmail />, path: publicRoutes.verifyEmail },
  { com: <ResetPassword />, path: publicRoutes.resetPassword },
  { com: <Login />, path: publicRoutes.login },
  { com: <Register />, path: publicRoutes.register },
  { com: <NotFound />, path: "*" },
];

export { publicRoutes, clientPages };
