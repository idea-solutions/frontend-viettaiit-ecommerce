import { Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { faEye, faGear, faHeart, faRotate } from "@fortawesome/free-solid-svg-icons";
import "./product-item.scss";
import { IconFire } from "../../assets/icons";
function ProductItem({ product }) {
  return (
    <motion.div whileHover="hover" initial="initial" className="product-item">
      <div className="product-item__image">
        <Image
          rounded
          src="https://bizweb.dktcdn.net/thumb/large/100/480/632/products/230225032836-12red-9e866195-9543-4592-af92-c3986c0e30d3.jpg?v=1681684380000"
        />
        <span className="discount">Giảm 19%</span>
        <span className="pay">Trả góp 0%</span>
        <span className="warranty">BH 24 tháng</span>
      </div>

      <span className="product-item__title my-2">
        iPhone 12 64GB - Chính hãng VN/A - MGJ73VN/A
      </span>
      <div className="d-flex justify-content-between align-items-center my-2">
        <div className="product-item__price">
          <span className="product-item__price-old">123.000.000đ</span>
          <span className="product-item__price-new">123.000.000đ</span>
        </div>
        <div className="product-item__icon-setting">
          <FontAwesomeIcon icon={faGear} />
        </div>
      </div>
      <p className="product-item__desc">
        Giảm trực tiếp 40%, tối đa 600.000VNĐ khi mở thẻ TP Bank EVO.
      </p>
      <div className="product-item__count">
        <IconFire />
        <div className="countdown"></div>
        <div className="sold">
          đã bán <strong>126</strong>
        </div>
      </div>

      <div className="product-item__action-button">
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
      </div>
    </motion.div>
  );
}

const actionButton = {
  initial: { x: 50, opacity: 0 },
  hover: { x: 0, opacity: [0, 0, 0.4, 1] },
};

export default ProductItem;
