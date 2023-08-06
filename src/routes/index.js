import { clientRoutes } from "./routes";
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
  { com: <Home />, path: clientRoutes.home },
  { com: <VerifyEmail />, path: clientRoutes.verifyEmail },
  { com: <ResetPassword />, path: clientRoutes.resetPassword },
  { com: <Login />, path: clientRoutes.login },
  { com: <Register />, path: clientRoutes.register },
  { com: <NotFound />, path: "*" },
];

export { clientRoutes, clientPages };
