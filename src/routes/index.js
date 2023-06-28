import Management from "../pages/products/management";
import DashBoard from "../pages/products/dashboard";
import defaultRoutes from "../assets/defaultRoutes";
import Order from "../pages/order";
import Notfound from "../pages/notFound";
// routes admin
const privateRoutes = [
  { com: <Management />, path: defaultRoutes.productManagement },
  { com: <DashBoard />, path: defaultRoutes.dashboard },
  { com: <Order />, path: defaultRoutes.orders },
  { com: <Notfound />, path: "*" },
];

export { privateRoutes };
