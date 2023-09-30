import { Outlet } from "react-router-dom";
import { clientRoutes } from "./routes";
import { lazy } from "react";

const Account = lazy(() => import("../pages/auth/account"));
const Orders = lazy(() => import("../pages/auth/account/orders"));
const Cart = lazy(() => import("../pages/cart"));
const ProductSearch = lazy(() => import("../pages/product/productSearch"));
const ChangePassword = lazy(() =>
  import("../pages/auth/account/changePassword")
);
const AuthRequired = lazy(() => import("../pages/AuthRequired"));
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

const clientPages = [
  { com: <Home />, path: clientRoutes.home },
  {
    com: <Outlet />,
    path: clientRoutes.account.main,
    children: [
      { com: <Account />, path: "", protected: true },
      { com: <Orders />, path: "don-hang", protected: true },
      { com: <VerifyEmail />, path: "xac-minh-tai-khoan", protected: true },
      { com: <ResetPassword />, path: "dat-lai-mat-khau", protected: true },
      { com: <Login />, path: "dang-nhap" },
      { com: <Register />, path: "dang-ky" },
      { com: <ChangePassword />, path: "thay-doi-mat-khau", protected: true },
      { com: <AuthRequired />, path: "yeu-cau-dang-nhap" },
    ],
  },
  {
    com: <Outlet />,
    path: clientRoutes.product.main,
    children: [
      { com: <ProductQuery />, path: "" },
      {
        com: <ProductDetail />,
        path: "chi-tiet/:slug",
      },
      {
        com: <ProductLove />,
        path: "yeu-thich",
      },
      {
        com: <ProductSearch />,
        path: "search",
      },
    ],
  },

  { com: <Cart />, path: clientRoutes.cart },
  { com: <LoginSuccess />, path: "/login/success" },
  { com: <NotFound />, path: "*" },
];

export { clientRoutes, clientPages };
