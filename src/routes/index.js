import Management from "../pages/products/management";
import DashBoard from "../pages/products/dashboard";
import defaultRoutes from "../assets/defaultRoutes";
// routes admin
const privateRoutes = [
  { com: <Management />, path: defaultRoutes.productManagement },
  { com: <DashBoard />, path: defaultRoutes.dashboard },
];

export { privateRoutes };
