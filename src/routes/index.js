import { privateRoutes, publicRoutes } from "./routes";
import Order from "../pages/admin/order";
import DashBoard from "../pages/admin/products/dashboard";
import Management from "../pages/admin/products/management";
import Home from "../pages/client/home";
import Login from "../pages/client/login";
import Register from "../pages/client/register";
import NotFound from "../pages/notFound";
// routes admin
const adminPages = [
  { com: <Management />, path: privateRoutes.productManagement },
  { com: <DashBoard />, path: privateRoutes.dashboard },
  { com: <Order />, path: privateRoutes.orders },
  { com: <NotFound />, path: "*" },
];

const clientPages = [
  { com: <Home />, path: publicRoutes.home },
  { com: <Login />, path: publicRoutes.login },
  { com: <Register />, path: publicRoutes.register },
  { com: <NotFound />, path: "*" },
];

export { adminPages, privateRoutes, publicRoutes, clientPages };
