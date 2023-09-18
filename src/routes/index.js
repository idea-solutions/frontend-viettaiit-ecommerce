import { clientRoutes } from "./routes";
import { lazy } from "react";

const ResetPassword = lazy(() => import("../pages/auth/resetPassword"));
const Category = lazy(() => import("../pages/category"));
const VerifyEmail = lazy(() => import("../pages/auth/verifyEmail"));
const Home = lazy(() => import("../pages/home"));
const Login = lazy(() => import("../pages/auth/login"));
const Register = lazy(() => import("../pages/auth/register"));
const NotFound = lazy(() => import("../pages/notFound"));
const ProductDetail = lazy(() => import("../pages/product/productDetail"));
const LoginSuccess = lazy(() => import("../pages/auth/login/loginSuccess"));
const ProductLove = lazy(() => import("../pages/product/productLove"));
const ProductQuery = lazy(() => import("../pages/product/productQuery/productQuery"));
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

  /// PRODUCT
  { com: <Category />, path: clientRoutes.products + "/loai/:name" },
  { com: <ProductDetail />, path: clientRoutes.products + "/chi-tiet/:slug" },
  { com: <ProductQuery />, path: clientRoutes.products + "/:name" },
  { com: <ProductLove />, path: clientRoutes.products + "/tat-ca/san-pham-yeu-thich" },
  // page not found
  { com: <NotFound />, path: "*" },
];

export { clientRoutes, clientPages };
