import {
  faTableColumns,
  faCaretRight,
  faBookmark,
  faCartPlus,
  faSignal,
  faStarHalfStroke,
  faUserTie,
} from "../../icons";
import { privateRoutes } from "../../../routes";

const menuSideBar = [
  {
    title: "Dashboard",
    iconLeft: faTableColumns,
    to: privateRoutes.dashboard,
  },
  {
    title: "Products",
    iconRight: faCaretRight,
    iconLeft: faBookmark,
    subMenu: [
      { title: "Top Products", to: privateRoutes.topProducts },
      { title: "Product Grip", to: privateRoutes.productGrid },
      { title: "Product Management", to: privateRoutes.productManagement },
      { title: "Product Categories", to: privateRoutes.productCategories },
      { title: "Add New Product", to: privateRoutes.addNewProduct },
    ],
  },

  {
    title: "Orders",
    iconLeft: faCartPlus,
    to: privateRoutes.orders,
  },
  {
    title: "Statistics",
    iconLeft: faSignal,
    to: privateRoutes.statistics,
  },
  {
    title: "Reviews",
    iconLeft: faStarHalfStroke,
    to: privateRoutes.reviews,
  },
  {
    title: "Customers",
    iconLeft: faUserTie,
    to: privateRoutes.customers,
  },
  {
    title: "Transactions",
    iconLeft: faTableColumns,
    to: privateRoutes.transactions,
  },
];

export default menuSideBar;
