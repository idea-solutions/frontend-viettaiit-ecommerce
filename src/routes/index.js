import Cart from "../pages/cart";
import ProductSearch from "../pages/product/productSearch";
import { clientRoutes } from "./routes";
import { lazy } from "react";

const ResetPassword = lazy(() => import("../pages/auth/resetPassword"));
const VerifyEmail = lazy(() => import("../pages/auth/verifyEmail"));
const Home = lazy(() => import("../pages/home"));
const Login = lazy(() => import("../pages/auth/login"));
const Register = lazy(() => import("../pages/auth/register"));
const NotFound = lazy(() => import("../pages/notFound"));
const ProductDetail = lazy(() => import("../pages/product/productDetail"));
const LoginSuccess = lazy(() => import("../pages/auth/login/loginSuccess"));
const ProductLove = lazy(() => import("../pages/product/productLove"));
const ProductQuery = lazy(() =>
  import("../pages/product/productQuery/productQuery")
);
// import Home from "../pages/home";
// import Login from "../pages/login";
// import Register from "../pages/register";
// import NotFound from "../pages/notFound";
// routes client

const clientPages = [
  { com: <Home />, path: clientRoutes.home },
  { com: <VerifyEmail />, path: clientRoutes.account.verifyEmail },
  { com: <ResetPassword />, path: clientRoutes.account.resetPassword },
  { com: <Login />, path: clientRoutes.account.login },
  { com: <LoginSuccess />, path: "/login/success" },
  { com: <Register />, path: clientRoutes.account.register },

  /// PRODUCT
  { com: <ProductDetail />, path: clientRoutes.product.detail + "/:slug" },
  {
    com: <ProductLove />,
    path: clientRoutes.product.love,
  },
  {
    com: <ProductSearch />,
    path: clientRoutes.product.search,
  },
  { com: <ProductQuery />, path: clientRoutes.product.main + "/:name" },

  /// cart

  { com: <Cart />, path: clientRoutes.cart },
  // page not found
  { com: <NotFound />, path: "*" },
];

export { clientRoutes, clientPages };
