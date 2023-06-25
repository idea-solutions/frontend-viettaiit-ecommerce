import {
  faTableColumns,
  faCaretRight,
  faBookmark,
  faCartPlus,
  faSignal,
  faStarHalfStroke,
  faUserTie,
} from "./icons";
import defaultRoutes  from "./defaultRoutes";

const menuSideBar = [
  {
    title: "Dashboard",
    iconLeft: faTableColumns,
    to: defaultRoutes.dashboard,
  },
  {
    title: "Products",
    iconRight: faCaretRight,
    iconLeft: faBookmark,
    subMenu: [
      { title: "Top Products", to: defaultRoutes.topProducts },
      { title: "Product Grip", to: defaultRoutes.productGrid },
      { title: "Product Management", to: defaultRoutes.productManagement },
      { title: "Product Categories", to: defaultRoutes.productCategories },
      { title: "Add New Product", to: defaultRoutes.addNewProduct },
    ],
  },

  {
    title: "Orders",
    iconLeft: faCartPlus,
    to: defaultRoutes.orders,
  },
  {
    title: "Statistics",
    iconLeft: faSignal,
    to: defaultRoutes.statistics,
  },
  {
    title: "Reviews",
    iconLeft: faStarHalfStroke,
    to: defaultRoutes.reviews,
  },
  {
    title: "Customers",
    iconLeft: faUserTie,
    to: defaultRoutes.customers,
  },
  {
    title: "Transactions",
    iconLeft: faTableColumns,
    to: defaultRoutes.transactions,
  },
];

export default menuSideBar;
