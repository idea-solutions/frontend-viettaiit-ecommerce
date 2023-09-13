import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import {
  faCartShopping,
  faEye,
  faGear,
  faHeart,
  faRotate,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

// MY IMPORTS
import { IconFire } from "../../assets/icons";
import LazyImage from "../LazyImage";
import { formatCurrency } from "../../utils/format";
import { clientRoutes } from "../../routes";
import { toastDanger } from "../../utils/toast";
import { setProductsLove } from "../../features/productFutureLocal";
function ProductItem({ product, hiddenSold, isLoading, hiddenDesc, cart }) {
  const [hovered, setHovered] = useState(false);
  const [soLuongDaBan, setSoLuongDaBan] = useState(0);
  const [traGop, setTraGop] = useState(0);
  const [baoHanh, setBaoHanh] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    setSoLuongDaBan(Math.floor(Math.random() * 300) + 1);
    setTraGop(Math.floor(Math.random() * 5) + 1);
    setBaoHanh(Math.floor(Math.random() * 24) + 1);
  }, []);
  const { productsLove } = useSelector((store) => store.productFutureLocal);

  // Tổng số sản phẩm
  const tongSoSanPham = 1000;

  // Width của element ban đầu (px)
  const widthBanDau = 282;

  // Tính tỷ lệ phần trăm đã bán
  const tyLeDaBan = soLuongDaBan / tongSoSanPham;

  // Tính width của countdown element còn lại
  const widthCountdownConLai = widthBanDau * (1 - tyLeDaBan);
  const actionButtionsRef = useRef();

  // handle navigate
  const navigate = useNavigate();
  const handleNavigate = (e) => {
    if (actionButtionsRef.current.contains(e.target)) return;
    navigate(clientRoutes.products + "/" + product.slug);
  };

  return (
    <div onClick={handleNavigate}>
      <motion.div
        className="product-item"
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
      >
        <>
          <div className="product-item__image">
            <LazyImage
              src={
                process.env.REACT_APP_BACKEND_URL +
                "/static/uploads/" +
                product.image
              }
              alt=""
            />
          </div>
          <span className="discount">Giảm {product.discount}%</span>
          <span className="pay">Trả góp {traGop}%</span>
          <span className="warranty">BH {baoHanh} tháng</span>
          <span className="product-item__title my-2">{product.name}</span>
          <div className="d-flex justify-content-between align-items-center my-2">
            <div className="product-item__price">
              <span className="product-item__price-old">
                {formatCurrency(product.price || 0)}
              </span>
              <span className="product-item__price-new">
                {formatCurrency(
                  product.price - (product.price * product.discount) / 100
                )}
              </span>
            </div>
            <OverlayTrigger
              placement="left"
              delay={{ show: 250, hide: 400 }}
              overlay={
                <Tooltip>{cart ? "Thêm vào giỏ hàng" : "Tùy chọn"}</Tooltip>
              }
            >
              <div className="product-item__icon-setting">
                <FontAwesomeIcon icon={cart ? faCartShopping : faGear} />
              </div>
            </OverlayTrigger>
          </div>
          {!hiddenDesc && (
            <p className="product-item__desc">{product.description}</p>
          )}
          <div className={`product-item__count ${hiddenSold ? "d-none" : ""}`}>
            <IconFire />
            <motion.div
              className="countdown"
              animate={{ width: widthCountdownConLai }}
            ></motion.div>
            <div className="sold">
              đã bán <strong>{soLuongDaBan}</strong>
            </div>
          </div>

          <motion.span
            className="product-item__action-button"
            ref={actionButtionsRef}
            variants={actionButton}
            initial="initial"
            animate={hovered ? "show" : "hidden"}
          >
            <motion.a variants={actionButton} title="Xem nhanh" href="" alt="">
              <FontAwesomeIcon icon={faEye} />
            </motion.a>
            <motion.a
              variants={actionButton}
              title="Thêm vào yêu thích"
              href=""
              alt=""
              onClick={(e) => {
                e.preventDefault();
                dispatch(setProductsLove(product));
              }}
            >
              <FontAwesomeIcon
                style={{
                  color: productsLove.find(
                    (productLove) => productLove.id === product.id
                  )
                    ? "red"
                    : "",
                }}
                icon={faHeart}
              />
            </motion.a>
            <motion.a
              variants={actionButton}
              title="Thêm vào so sánh"
              href=""
              alt=""
              onClick={(e) => {
                e.preventDefault();
                toastDanger("Sản phẩm không có nội dung để so sánh sản phẩm!");
              }}
            >
              <FontAwesomeIcon icon={faRotate} />
            </motion.a>
          </motion.span>
        </>
      </motion.div>
    </div>
  );
}

const actionButton = {
  initial: { x: 50, opacity: 0 },
  hidden: { x: 50, opacity: 0 },
  show: { x: 0, opacity: [0, 0.8, 1] },
};

export default ProductItem;
