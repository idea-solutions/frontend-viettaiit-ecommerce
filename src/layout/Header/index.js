// FRAMEWORKS
import { AnimatePresence, easeInOut, motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
// COMPONENTS
import AnimationPage from "../../components/AnimationPage";
import Logo from "../../components/Logo";
import FrameHover from "../../components/FrameHover";
import ButtonQuantity from "../../components/ButtonQuantity";
import Button from "../../components/Button";
import Search from "../../components/Search";
import NavbarDownDeskTop from "../../components/NavBarDownDeskTop";

// STYLES
import "./header.scss";
// REDUX
import { useDispatch, useSelector } from "react-redux";
import { toggleNavBar } from "../../features/navBarSlice";
import {
  faAngleDown,
  faAngleLeft,
  faAngleRight,
  faArrowRightToBracket,
  faBars,
  faCartPlus,
  faClose,
  faHeart,
  faPhoneVolume,
  faPlus,
  faRotate,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { menuBottom } from "../../assets/menuBottomHeader";
import { publicRoutes } from "../../routes";

function Header() {
  const [isHoveredAccount, setIsHoveredAccount] = useState(false);
  const [isHoveredCart, setIsHoveredCart] = useState(false);
  const { isOpen } = useSelector((store) => store.navBar);
  const dispatch = useDispatch();
  return (
    <AnimationPage>
      <div className="header">
        <div className="header-top container-xxl">
          <div className="left">
            <FontAwesomeIcon
              icon={faBars}
              onClick={() => dispatch(toggleNavBar())}
              className="elastic-fai-sm d-lg-none me-3"
            />
            <Logo />
          </div>
          <Search className="max-lg-none" />
          <div className="right">
            <div className="item max-lg-none">
              <FontAwesomeIcon
                icon={faPhoneVolume}
                className="elastic-fai-2xs"
              />
              <span>
                <small className="title">Gọi mua hàng</small>
                <small>1900 6750</small>
              </span>
            </div>
            <motion.div
              onMouseEnter={() => setIsHoveredAccount(true)}
              onMouseLeave={() => setIsHoveredAccount(false)}
              className="item"
            >
              <FontAwesomeIcon icon={faUser} className="elastic-fai-2xs" />
              <FontAwesomeIcon
                icon={faAngleDown}
                className="d-none max-lg-display"
              />
              <span>
                <small className="title">Thông tin</small>
                <small className=" max-lg-none">
                  Tài khoản <FontAwesomeIcon icon={faAngleDown} size="xs" />
                </small>
              </span>
              <FrameHover isHovered={isHoveredAccount}>
                <motion.div
                  variants={account}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="frame-hover"
                >
                  <div className="account">
                    <Link to={publicRoutes.login} className="account__item">
                      <FontAwesomeIcon icon={faArrowRightToBracket} size="lg" />
                      <small>Đăng nhập</small>
                    </Link>
                    <Link to={publicRoutes.register} className="account__item">
                      <FontAwesomeIcon icon={faPlus} size="lg" />
                      <small>Đăng ký</small>
                    </Link>
                    <span className="account__item">
                      <FontAwesomeIcon icon={faHeart} size="lg" />
                      <small>Danh sách yêu thích (0)</small>
                    </span>
                    <span className="account__item">
                      <FontAwesomeIcon icon={faRotate} size="lg" />
                      <small>So sánh sản phẩm (0)</small>
                    </span>
                  </div>
                </motion.div>
              </FrameHover>
            </motion.div>
            <motion.div
              onMouseEnter={() => setIsHoveredCart(true)}
              onMouseLeave={() => setIsHoveredCart(false)}
              className="item"
            >
              <FontAwesomeIcon
                className="icon-cart elastic-fai-2xs"
                icon={faCartPlus}
              />
              <span>
                <small>Giỏ hàng</small>
              </span>
              <div className="circle">2</div>
              <FrameHover isHovered={isHoveredCart}>
                <motion.div
                  variants={account}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  style={{ width: "300px" }}
                  className="frame-hover"
                >
                  <div className="cart">
                    {/* <div className="cart__none">
                      <FontAwesomeIcon icon={faFaceSmile} beat size="4x" />
                      <span className="text-center">
                        Không có sản phẩm nào trong giỏ hàng của bạn
                      </span>
                    </div> */}
                    <h6>GIỎ HÀNG</h6>
                    <div className="cart__display">
                      <div className="cart__item">
                        <div className="left">
                          <Image
                            src="https://i.imgur.com/UYe7g8v.jpg"
                            rounded
                          />
                        </div>
                        <div className="right">
                          <div>
                            <span className="name">
                              iPhone 14 Plus 128GB - Chính hãng VN/A
                            </span>
                            <motion.span
                              initial={{ rotate: 0 }}
                              whileHover={{ rotate: -360, size: 10 }}
                              transition={{ duration: 0.2 }}
                              className=" align-items-start icon-close"
                            >
                              <FontAwesomeIcon icon={faClose} size="xl" />
                            </motion.span>
                          </div>
                          <div>
                            <span>
                              <ButtonQuantity />
                            </span>
                            <small className="price">2.255.255 đ</small>
                          </div>
                        </div>
                      </div>
                      <div className="cart__item">
                        <div className="left">
                          <Image
                            src="https://i.imgur.com/UYe7g8v.jpg"
                            rounded
                          />
                        </div>
                        <div className="right">
                          <div>
                            <span className="name">
                              iPhone 14 Plus 128GB - Chính hãng VN/A
                            </span>
                            <motion.span
                              initial={{ rotate: 0 }}
                              whileHover={{ rotate: -360, size: 10 }}
                              transition={{ duration: 0.2 }}
                              className=" align-items-start icon-close"
                            >
                              <FontAwesomeIcon icon={faClose} size="xl" />
                            </motion.span>
                          </div>
                          <div>
                            <span>
                              <ButtonQuantity />
                            </span>
                            <small className="price">2.255.255 đ</small>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="total">
                      <div className="left">
                        <small>Tổng tiền</small>
                        <small>4.411.000 đ</small>
                      </div>
                      <Button type="primary">THANH TOÁN</Button>
                    </div>
                  </div>
                </motion.div>
              </FrameHover>
            </motion.div>
          </div>
        </div>
        <div className="container-xl header-bottom">
          <ul className="items">
            <AnimatePresence>
              {menuBottom.map((item, idx) => (
                <HeaderBottomItem key={idx} item={item} />
              ))}
            </AnimatePresence>
          </ul>
          <div className="text-white d-flex gap-1 justify-content-center align-items-center ms-5">
            <div className="px-1 py-1">
              <FontAwesomeIcon icon={faAngleLeft} />
            </div>
            <div className="px-1 py-1">
              <FontAwesomeIcon icon={faAngleRight} />
            </div>
          </div>
        </div>
        <Search className="d-lg-none max-lg-display mx-3" />
      </div>
      <AnimatePresence>{isOpen && <NavbarDownDeskTop />}</AnimatePresence>
    </AnimationPage>
  );
}

export default Header;

const account = {
  initial: { scale: 0.3, originX: 1, originY: 0, opacity: 0.5 },
  animate: { scale: 1, originX: 0, originY: 1, opacity: 1 },
  exit: { scale: 0.5, originX: 0, originY: 1, opacity: 0.5 },
  transition: { duration: 1, ease: easeInOut(2) },
};

const firstMenuItem1 = {
  initial: { y: 100, opacity: 0, display: "none" },
  hover: { y: 0, opacity: 1, display: "block" },
  exit: { y: 100, opacity: 0 },
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
  return (
    <motion.li whileHover="hover" initial="initial" className="item">
      <Link to={item.to} className="link">
        {item.title}
      </Link>
      {item.iconDown && <FontAwesomeIcon icon={item.iconDown} />}
      {item.subMenu &&
        (item.title === "Iphone" ? (
          <motion.ul variants={firstMenuItem2} className="iphone-submenu">
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
          <motion.ul variants={firstMenuItem1} className="submenu-first">
            {item.subMenu.map((subItem, idx2) => (
              <motion.span
                whileHover="hover"
                initial="initial"
                className="sub-item d-flex justify-content-between"
                key={idx2 + 10}
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
            ))}
          </motion.ul>
        ))}
    </motion.li>
  );
};
