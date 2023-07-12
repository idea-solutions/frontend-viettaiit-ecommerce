import { publicRoutes } from "./routes";
import Home from "../pages/home";
import Login from "../pages/login";
import Register from "../pages/register";
import NotFound from "../pages/notFound";
// routes client

const clientPages = [
  { com: <Home />, path: publicRoutes.home },
  { com: <Login />, path: publicRoutes.login },
  { com: <Register />, path: publicRoutes.register },
  { com: <NotFound />, path: "*" },
];

export { publicRoutes, clientPages };
