import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { easeInOut, motion } from "framer-motion";
import { useState } from "react";
import {  useNavigate} from "react-router-dom";
import { clientRoutes } from "../../routes";
import { slugify } from "../../utils/slug";
import { setQueryProduct } from "../../features/product/productSlice";
import { useDispatch } from "react-redux";

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
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const navigateTo = (e) => {
    const title = e.target.getAttribute("title");
    const name = slugify(title);
    navigate(clientRoutes.homeCategory + "/" + name);
  };
  return (
    <motion.div
      onMouseEnter={() => setIsHoverItem1(true)}
      onMouseLeave={() => setIsHoverItem1(false)}
      className="item"
    >
      <div
        o
        onClick={() => {
          dispatch(setQueryProduct({ name: "discount", value: "false" }));
          navigate(clientRoutes.products + "/tat-ca");
        }}
        className="link"
      >
        {item.title}
      </div>
      {item.iconDown && <FontAwesomeIcon icon={item.iconDown} />}
      {item.subMenu &&
        (item.title === "IPhone" ? (
          <motion.ul
            variants={firstMenuItem2}
            initial="initial"
            animate={`${isHoverItem1 ? "hover" : "exit"}`}
            className="iphone-submenu"
          >
            {item.subMenu.map((subItem, idx2) => (
              <li className="iphone-sub-item" key={idx2 + 10}>
                <span
                  title={subItem.title}
                  onClick={navigateTo}
                  className="iphone-sub-link"
                >
                  {subItem.title}
                </span>
                <div className="iphone-sub-item-2">
                  {subItem.items.map((name, ipIdx) => (
                    <span onClick={navigateTo} title={name} key={ipIdx}>
                      {name}
                    </span>
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
              <SubItem2
                navigateTo={navigateTo}
                subItem={subItem}
                key={idx2 + 10}
              />
            ))}
          </motion.ul>
        ))}
    </motion.div>
  );
};

export default HeaderBottomItem;

const SubItem2 = ({ subItem, navigateTo }) => {
  const [isHoverItem2, setIsHoverItem2] = useState(false);
  return (
    <motion.span
      onMouseEnter={() => setIsHoverItem2(true)}
      onMouseLeave={() => setIsHoverItem2(false)}
      className="sub-item d-flex justify-content-between"
    >
      <span
        className="sub-link text-black"
        title={subItem.title}
        onClick={navigateTo}
      >
        {subItem.title}
      </span>
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
            <span
              title={item3}
              onClick={navigateTo}
              className="link-2"
              key={idx3}
            >
              {item3}
            </span>
          ))}
        </motion.div>
      )}
    </motion.span>
  );
};
