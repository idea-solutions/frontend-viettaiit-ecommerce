import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { publicRoutes } from "../../../routes";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "./navbar-down-desktop.scss";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleNavBar } from "../../../redux/client/features/navBarSlice";
import { faAngleDown, faAngleRight, faClose } from "../../../assets/icons";
const menuBottom = [
  { title: "Trang chủ", to: publicRoutes.home },
  { title: "Giới thiệu", to: publicRoutes.home },
  {
    title: "Iphone",
    to: publicRoutes.home,
    iconDown: faAngleDown,
    subMenu: [
      {
        title: "IPHONE 14 Series",
        items: [
          "Iphone 14",
          "Iphone 14 Plus",
          "Iphone 14 Pro",
          "Iphone 14 Pro Max",
        ],
      },
      {
        title: "IPHONE 13 Series",
        items: [
          "Iphone 13",
          "Iphone 13 Mini",
          "Iphone 13 Pro",
          "Iphone 13 Pro Max",
        ],
      },
      {
        title: "IPHONE 12 Series",
        items: [
          "Iphone 12",
          "Iphone 12 Mini",
          "Iphone 12 Pro",
          "Iphone 12 Pro Max",
        ],
      },
      {
        title: "IPHONE 11 Series",
        items: ["Iphone 11", "Iphone 11 Pro", "Iphone 11 Pro Max"],
      },
    ],
  },
  {
    title: "Ipad",
    to: publicRoutes.home,
    iconDown: faAngleDown,
    subMenu: [
      {
        title: "Ipad Pro",
        iconRight: faAngleRight,
        items: [
          "Ipad Pro M2 2022",
          "Ipad Pro 2021",
          "Ipad Pro 12.9",
          "Ipad Pro 11",
        ],
      },
      {
        title: "Ipad Air",
        iconRight: faAngleRight,
        items: ["Ipad Air 4", "Ipad Air 5"],
      },
      { title: "Ipad 10.9" },
      { title: "Ipad 10.2" },
      { title: "Ipad Mini" },
    ],
  },
  {
    title: "Macbook",
    to: publicRoutes.home,
    iconDown: faAngleDown,
    subMenu: [{ title: "Macbook Pro" }, { title: "Macbook Air" }],
  },
  {
    title: "Apple Watch",
    to: publicRoutes.home,
    iconDown: faAngleDown,
    subMenu: [
      { title: "Apple Watch Ultra" },
      { title: "Apple Watch S7" },
      { title: "Apple Watch S6" },
      { title: "Apple Watch SE" },
      { title: "Apple Watch S8" },
      { title: "Apple Watch S3" },
    ],
  },
  { title: "Airpods", to: publicRoutes.home },
  {
    title: "Phụ kiện",
    to: publicRoutes.home,
    iconDown: faAngleDown,
    subMenu: [
      { title: "Phụ kiện Apple" },
      { title: "Cốc - Cáp sạc" },
      { title: "Bao da - Ốp lưng" },
      { title: "Dán cường lực" },
      { title: "Sạc dự phòng" },
    ],
  },
  { title: "Chính sách", to: publicRoutes.home },
  { title: "Tin tức", to: publicRoutes.home },
  { title: "Liên hệ", to: publicRoutes.home },
];
const variants = {
  initial: { x: -200, opacity: 0.5 },
  open: { x: 0, opacity: 1 },
  exit: { x: -300, opacity: 0.5 },
  transition: { duration: 12, ease: "linear" },
};
function NavBarDownDeskTop() {
  const [numberShow, setNumberShow] = useState(100);
  const { isOpen } = useSelector((store) => store.navBar);
  const dispatch = useDispatch();
  const wrapperRef = useRef();

  return (
    <div
      className="wrapper-bar d-lg-none"
      onClick={(e) => {
        if (e.target === wrapperRef.current) {
          dispatch(toggleNavBar());
        }
      }}
      ref={wrapperRef}
    >
      <motion.div
        variants={variants}
        initial="initial"
        exit="exit"
        transition="transition"
        animate={isOpen ? "open" : "exit"}
        className="nav-bar"
      >
        <div className="nav-bar__header">
          <span>DANH MỤC</span>
          <FontAwesomeIcon
            onClick={() => dispatch(toggleNavBar())}
            className="elastic-fai-sm"
            icon={faClose}
          />
        </div>
        <div className="nav-bar__menu">
          {menuBottom.map((item, idx) => (
            <motion.li
              key={idx}
              animate={numberShow === idx ? "open" : "closed"}
              whileTap={{ scale: 0.97 }}
              className="nav-bar__menu__parent-item"
            >
              <Link>
                {item.title}
                {item.iconDown && (
                  <motion.span
                    onClick={() => {
                      if (idx === numberShow) {
                        setNumberShow(100);
                        return;
                      }
                      setNumberShow(idx);
                    }}
                    variants={rotateIcon}
                  >
                    <FontAwesomeIcon icon={item.iconDown} />
                  </motion.span>
                )}
              </Link>
              <AnimatePresence>
                {item.iconDown && numberShow === idx && (
                  <motion.ul
                    variants={subMenu}
                    initial="initial"
                    exit="exit"
                    data-show={numberShow === idx}
                  >
                    {item.subMenu.map((subItem, idx) => (
                      <NavbarSecondMenu subItem={subItem} key={idx} />
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </motion.li>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

const subMenu = {
  initial: { opacity: 0, height: 0 },
  open: { opacity: 1, height: "auto" },
  closed: { opacity: 0, height: 0 },
  exit: { opacity: 0, height: 0 },
  transition: { duration: 1, easeInOut: 1 },
};

const rotateIcon = {
  initial: { rotate: -90 },
  open: { rotate: 0 },
  closed: { rotate: -90 },
  exit: { rotate: -90 },
  transition: { duration: 1, easeInOut: 1 },
};

export default NavBarDownDeskTop;

// const NavBarItem = ({ item, idx }) => {
//   return (
//     <motion.li
//       animate={numberShow === idx ? "open" : "closed"}
//       whileTap={{ scale: 0.97 }}
//       className="nav-bar__menu__parent-item"
//     >
//       <Link>
//         {item.title}
//         {item.iconDown && (
//           <motion.span
//             onClick={() => {
//               if (idx === numberShow) {
//                 setNumberShow(100);
//                 return;
//               }
//               setNumberShow(idx);
//             }}
//             variants={rotateIcon}
//           >
//             <FontAwesomeIcon icon={item.iconDown} />
//           </motion.span>
//         )}
//       </Link>
//       {item.iconDown && numberShow === idx && (
//         <motion.ul variants={subMenu} data-show={numberShow === idx}>
//           {item.subMenu.map((subItem, idx) => (
//             <NavbarSecondMenu subItem={subItem} key={idx} />
//           ))}
//         </motion.ul>
//       )}
//     </motion.li>
//   );
// };

const NavbarSecondMenu = ({ subItem }) => {
  return (
    <motion.li className="nav-bar__menu__parent-item__submenu__item">
      <Link>{subItem.title}</Link>
      <motion.ul className="">
        {subItem.items &&
          subItem.items.map((sItem, idx2) => (
            <li key={idx2}>
              <Link>{sItem}</Link>
            </li>
          ))}
      </motion.ul>
    </motion.li>
  );
};
