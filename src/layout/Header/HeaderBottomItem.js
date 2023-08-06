import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { easeInOut, motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

const firstMenuItem1 = {
  initial: { y: 100, opacity: 0, display: "none" },
  hover: { y: 0, opacity: 1, display: "block" },
  exit: { y: 100, opacity: 0, display: "none" },
  transition: { duration: 1, ease: easeInOut(2) },
};
const firstMenuItem2 = {
  initial: { y: 100, opacity: 0, display: "none" },
  hover: { y: 0, opacity: 1, display: "flex" },
  exit: { y: 100, opacity: 0 },
  transition: { duration: 1, ease: easeInOut(2) },
};
const subMenuIconRight = {
  initial: { height: 0, opacity: 0 },
  hover: { height: "auto", opacity: 1 },
  exit: { height: 0, opacity: 0 },
  transition: { duration: 1, ease: easeInOut(4) },
};
const HeaderBottomItem = ({ item }) => {
  const [isHoverItem1, setIsHoverItem1] = useState(false);
  return (
    <motion.div
      onMouseEnter={() => setIsHoverItem1(true)}
      onMouseLeave={() => setIsHoverItem1(false)}
      className="item"
    >
      <Link to={item.to} className="link">
        {item.title}
      </Link>
      {item.iconDown && <FontAwesomeIcon icon={item.iconDown} />}
      {item.subMenu &&
        (item.title === "Iphone" ? (
          <motion.ul
            variants={firstMenuItem2}
            initial="initial"
            animate={`${isHoverItem1 ? "hover" : "exit"}`}
            className="iphone-submenu"
          >
            {item.subMenu.map((subItem, idx2) => (
              <li className="iphone-sub-item" key={idx2 + 10}>
                <Link className="iphone-sub-link">{subItem.title}</Link>
                <div className="iphone-sub-item-2">
                  {subItem.items.map((ipItem, ipIdx) => (
                    <Link key={ipIdx}>{ipItem}</Link>
                  ))}
                </div>
              </li>
            ))}
          </motion.ul>
        ) : (
          <motion.ul
            variants={firstMenuItem1}
            initial="initial"
            animate={`${isHoverItem1 ? "hover" : "exit"}`}
            className="submenu-first"
          >
            {item.subMenu.map((subItem, idx2) => (
              <SubItem2 subItem={subItem} key={idx2 + 10} />
            ))}
          </motion.ul>
        ))}
    </motion.div>
  );
};

export default HeaderBottomItem;

const SubItem2 = ({ subItem }) => {
  const [isHoverItem2, setIsHoverItem2] = useState(false);
  return (
    <motion.span
      onMouseEnter={() => setIsHoverItem2(true)}
      onMouseLeave={() => setIsHoverItem2(false)}
      className="sub-item d-flex justify-content-between"
    >
      <Link className="sub-link">{subItem.title}</Link>
      {subItem.iconRight && (
        <span className="icon">
          <FontAwesomeIcon icon={subItem.iconRight} />
        </span>
      )}
      {subItem.iconRight && (
        <motion.div
          variants={subMenuIconRight}
          initial="initial"
          animate={`${isHoverItem2 ? "hover" : "exit"}`}
          className="sub-menu-2 d-flex flex-column gap-2"
        >
          {subItem.items.map((item3, idx3) => (
            <Link className="link-2" key={idx3}>
              {item3}
            </Link>
          ))}
        </motion.div>
      )}
    </motion.span>
  );
};
