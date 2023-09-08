import LoginSuccess from "../pages/login/loginSuccess";
import { clientRoutes } from "./routes";
import { lazy } from "react";

const ResetPassword = lazy(() => import("../pages/resetPassword"));
const Category = lazy(() => import("../pages/category"));
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
  { com: <LoginSuccess />, path: "/login/success" },
  { com: <Register />, path: clientRoutes.register },
  { com: <Category />, path: clientRoutes.homeCategory + "/:name" },
  { com: <NotFound />, path: "*" },
];

export { clientRoutes, clientPages };
