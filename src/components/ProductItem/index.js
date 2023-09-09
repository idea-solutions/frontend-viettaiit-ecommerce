import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import {
  faEye,
  faGear,
  faHeart,
  faRotate,
} from "@fortawesome/free-solid-svg-icons";
import { IconFire } from "../../assets/icons";
import LazyImage from "../LazyImage";
import { useEffect, useState } from "react";
import { formatCurrency } from "../../utils/format";
function ProductItem({ product, hiddenSold }) {
  const [hovered, setHovered] = useState(false);
  const [soLuongDaBan, setSoLuongDaBan] = useState(0);
  const [traGop, setTraGop] = useState(0);
  const [baoHanh, setBaoHanh] = useState(0);
  useEffect(() => {
    setSoLuongDaBan(Math.floor(Math.random() * 300) + 1);
    setTraGop(Math.floor(Math.random() * 5) + 1);
    setBaoHanh(Math.floor(Math.random() *24) + 1);
  }, []);
  // Tổng số sản phẩm
  const tongSoSanPham = 1000;

  // Width của element ban đầu (px)
  const widthBanDau = 282;

  // Tính tỷ lệ phần trăm đã bán
  const tyLeDaBan = soLuongDaBan / tongSoSanPham;

  // Tính width của countdown element còn lại
  const widthCountdownConLai = widthBanDau * (1 - tyLeDaBan);
  return (
    <motion.div
      className="product-item"
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
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
      <span className="warranty">
        BH {baoHanh} tháng
      </span>
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
        <div className="product-item__icon-setting">
          <FontAwesomeIcon icon={faGear} />
        </div>
      </div>
      <p className="product-item__desc">{product.description}</p>
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
        >
          <FontAwesomeIcon icon={faHeart} />
        </motion.a>
        <motion.a
          variants={actionButton}
          title="Thêm vào so sánh"
          href=""
          alt=""
        >
          <FontAwesomeIcon icon={faRotate} />
        </motion.a>
      </motion.span>
    </motion.div>
  );
}

const actionButton = {
  initial: { x: 50, opacity: 0 },
  hidden: { x: 50, opacity: 0 },
  show: { x: 0, opacity: [0, 0.8, 1] },
};

export default ProductItem;
