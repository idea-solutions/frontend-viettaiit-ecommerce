import { privateRoutes } from "./routes";
import Order from "../pages/admin/order";
import DashBoard from "../pages/admin/products/dashboard";
import Management from "../pages/admin/products/management";
import Notfound from "../pages/notFound";
// routes admin
const adminRoutes = [
  { com: <Management />, path: privateRoutes.productManagement },
  { com: <DashBoard />, path: privateRoutes.dashboard },
  { com: <Order />, path: privateRoutes.orders },
  { com: <Notfound />, path: "*" },
];

export { adminRoutes, privateRoutes };
