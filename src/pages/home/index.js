import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faChevronRight,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import bannerNewImage from "../../assets/images/section/section_banner_new_product.webp";

// MY IMPORTS
import { sliders1, sliders2 } from "../../assets/sliders";
import promoBoxes from "../../assets/promoBox";
import ListProductSlide from "../../components/ListProductSlide";
import { IconFire } from "../../assets/icons";

import LazyImage from "../../components/LazyImage";
import { Button, Col, Form, Image, Row } from "react-bootstrap";
import HelmetCustom from "../../components/HelmetCustom";
import DanhMucNoiBat from "./danhMucNoiBat";
import CategoryProduct from "./categoryProduct";

function Home() {
  return (
    <>
      <HelmetCustom title="Trang chủ" />
      <div className="home">
        <Swiper
          navigation={true}
          modules={[Navigation, Autoplay]}
          autoplay={{ delay: 2000 }}
          className="home__slider"
        >
          {sliders1.map((slider, idx) => (
            <SwiperSlide key={idx}>
              <Image src={slider} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="container">
          <div className="promo-box row">
            {promoBoxes.map((item, idx) => (
              <div key={idx} className="col-lg-3 col-md-3 col-sm-6 col-6">
                <div
                  className="promo-box__item"
                  style={{
                    backgroundColor: `${item.backgroundColor}`,
                  }}
                >
                  <div className="promo-box__item__left">
                    <LazyImage src={item.image} />
                  </div>
                  <div className="promo-box__item__right">
                    <small>{item.textTop}</small>
                    <span>{item.textBot}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="container my-4">
          <div className="section row">
            {sliders2.map((image, idx) => (
              <motion.div
                animate={{
                  y: [0, 14, 12, 15, 14, 12, 13, 10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: 3 - 0.4 * idx,
                  ease: "easeOut",
                }}
                key={idx}
                className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-2  d-flex justify-content-center"
              >
                <LazyImage className="section__item" src={image} />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="container">
          <div className="block-sale">
            <div className="block-sale__top">
              <span className="block-sale__top__left">
                <p>HOT SALE CUỐI TUẦN</p>
                <IconFire />
              </span>
              <span className="block-sale__top__right">
                <div className="block-sale__top__right__one">
                  <strong>167</strong>
                  <small>Ngày</small>
                </div>
                <div className="block-sale__top__right__one">
                  <strong>167</strong>
                  <small>Giờ</small>
                </div>
                <div className="block-sale__top__right__one">
                  <strong>167</strong>
                  <small>Phút</small>
                </div>
                <div className="block-sale__top__right__one">
                  <strong>167</strong>
                  <small>Giây</small>
                </div>
              </span>
            </div>
            <ListProductSlide />
            <div className="d-flex justify-content-center align-items-center pb-3">
              <Button
                className="hover-bg-secondary btn-md btn-icon-text btn-md"
                variant="primary"
              >
                Xem tất cả
                <FontAwesomeIcon
                  className="btn-icon-append"
                  icon={faAngleRight}
                />
              </Button>
            </div>
          </div>
        </div>

        {/* DANH MỤC NỔI BẬT */}
        <DanhMucNoiBat></DanhMucNoiBat>

        {/* Category Product */}
        {/*  IPHONE*/}
        <CategoryProduct
          listSubCategory={[
            "Iphone 14 series",
            "Iphone 14 series",
            "Iphone 14 series",
            "Iphone 14 series",
          ]}
          title={"IPhone"}
        />
        {/*  Ipad*/}
        <CategoryProduct
          listSubCategory={["Ipad Pro", "Ipad Pro", "Ipad Pro", "Ipad Pro"]}
          title={"Ipad"}
        />

        {/* New Info Product */}
        <div className="section-new-info mt-4">
          <div className="container">
            <h3 className="text-uppercase my-3 text-center fw-bold">
              THÔNG TIN SẢN PHẨM MỚI
            </h3>
            <Row className=" align-items-center">
              <Col sm={12} md={6}>
                <p className="text-secondary">iPhone 15 - 15 Pro Max</p>
                <h2 className="fw-bold">
                  iPhone 15 Pro Max sẽ có viền màn hình mỏng nhất thế giới.
                </h2>
                <p className="text-size-16 lh-lg fw-light">
                  Theo Apple Insider, dựa trên những bản CAD (thiết kế có sự hỗ
                  trợ của máy tính) rò rỉ gần đây, iPhone 15 Pro Max có thể dày
                  hơn iPhone 14 Pro Max, mặc dù phần lồi camera nhỏ hơn một
                  chút. Thông tin mới nhất từ chuyên gia rò rỉ Ice Universe tiết
                  lộ kích thước 1,55 mm của phần khung viền trên iPhone 15 Pro
                  Max sẽ phá kỷ lục trước đó được thiết lập bởi Xiaomi 13 là
                  1,81mm.
                </p>

                <Button variant="primary btn-md hover-bg-secondary">
                  <span>Xem thêm</span>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    shake
                    className="ms-2"
                  />
                </Button>
              </Col>
              <Col sm={12} md={6}>
                <motion.div
                  animate={{ y: [0, 2, 4, 6, 8, 10, 8, 6, 4, 2, 0] }}
                  transition={{
                    duration: 4,
                    ease: "easeInOut",
                    repeat: Infinity,
                  }}
                >
                  <Image src={bannerNewImage} alt="" />
                </motion.div>
              </Col>
            </Row>
          </div>
        </div>

        {/* Macbook */}
        <CategoryProduct
          listSubCategory={["Mac Pro", "Mac Pro", "Mac Pro", "Mac Pro"]}
          title={"Macbook"}
        />

        {/* Apple Watch */}
        <CategoryProduct
          listSubCategory={[
            "Apple Watch Pro",
            "Apple Watch Pro",
            "Apple Watch Pro",
            "Apple Watch Pro",
          ]}
          title={"Apple Watch"}
        />
      </div>

      {/* Tin tuc cong nghe */}
      <div>
        <div className="container tintuc">
          <h3 className="text-uppercase my-3 text-center fw-bold">
            TIN TỨC <span className="text-secondary fw-bold">CÔNG NGHỆ</span>
          </h3>
          <Row>
            <Col sm={12} md={6} lg={3}>
              <div className="item">
                {" "}
                <div className="image">
                  <Image
                    src={require("../../assets/images/tintuc/tintuc01.webp")}
                    alt=""
                  />
                </div>
                <h6 className="px-2 my-2">
                  iPhone đã đúng khi không đụng đến tính năng này suốt những năm
                  qua - Đình đám một thời nay đã chết yểu"
                </h6>
                <p className="px-2 my-2 fw-light">
                  iPhone vẫn kiên định với thiết kế tai thỏ suốt nhiều năm dù bị
                  nhiều người dùng chỉ trích. Thế nhưng, có vẻ như Apple một lần
                </p>
                <span className="px-2 my-2 d-flex gap-1 align-items-center pb-2">
                  <FontAwesomeIcon icon={faClock} />
                  <small>28/04/2023</small>
                </span>
              </div>
            </Col>
            <Col sm={12} md={6} lg={3}>
              <div className="item">
                {" "}
                <div className="image">
                  <Image
                    src={require("../../assets/images/tintuc/tintuc02.webp")}
                    alt=""
                  />
                </div>
                <h6 className="px-2 my-2">
                  iPhone đã đúng khi không đụng đến tính năng này suốt những năm
                  qua - Đình đám một thời nay đã chết yểu"
                </h6>
                <p className="px-2 my-2 fw-light">
                  iPhone vẫn kiên định với thiết kế tai thỏ suốt nhiều năm dù bị
                  nhiều người dùng chỉ trích. Thế nhưng, có vẻ như Apple một lần
                </p>
                <span className="px-2 my-2 d-flex gap-1 align-items-center pb-2">
                  <FontAwesomeIcon icon={faClock} />
                  <small>28/04/2023</small>
                </span>
              </div>
            </Col>
            <Col sm={12} md={6} lg={3}>
              <div className="item">
                {" "}
                <div className="image">
                  <Image
                    src={require("../../assets/images/tintuc/tintuc03.webp")}
                    alt=""
                  />
                </div>
                <h6 className="px-2 my-2">
                  iPhone đã đúng khi không đụng đến tính năng này suốt những năm
                  qua - Đình đám một thời nay đã chết yểu"
                </h6>
                <p className="px-2 my-2 fw-light">
                  iPhone vẫn kiên định với thiết kế tai thỏ suốt nhiều năm dù bị
                  nhiều người dùng chỉ trích. Thế nhưng, có vẻ như Apple một lần
                </p>
                <span className="px-2 my-2 d-flex gap-1 align-items-center pb-2">
                  <FontAwesomeIcon icon={faClock} />
                  <small>28/04/2023</small>
                </span>
              </div>
            </Col>
            <Col sm={12} md={6} lg={3}>
              <div className="item">
                {" "}
                <div className="image">
                  <Image
                    src={require("../../assets/images/tintuc/tintuc04.webp")}
                    alt=""
                  />
                </div>
                <h6 className="px-2 my-2">
                  iPhone đã đúng khi không đụng đến tính năng này suốt những năm
                  qua - Đình đám một thời nay đã chết yểu"
                </h6>
                <p className="px-2 my-2 fw-light">
                  iPhone vẫn kiên định với thiết kế tai thỏ suốt nhiều năm dù bị
                  nhiều người dùng chỉ trích. Thế nhưng, có vẻ như Apple một lần
                </p>
                <span className="px-2 my-2 d-flex gap-1 align-items-center pb-2">
                  <FontAwesomeIcon icon={faClock} />
                  <small>28/04/2023</small>
                </span>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      {/*   KHÁCH HÀNG CỦA SUDES */}
      <div className="container khachhang mt-5">
        <h3 className="text-uppercase my-3 text-center fw-bold">
          KHÁCH HÀNG CỦA <span className="text-secondary">VIẾT TÀI</span>
        </h3>
        <Row>
          <Col sm={12} md={6} lg={3}>
            <div className="item">
              {" "}
              <div className="image">
                <Image
                  src={require("../../assets/images/tintuc/tintuc01.webp")}
                  alt=""
                />
              </div>
            </div>
          </Col>
          <Col sm={12} md={6} lg={3}>
            <div className="item">
              {" "}
              <div className="image">
                <Image
                  src={require("../../assets/images/tintuc/tintuc02.webp")}
                  alt=""
                />
              </div>
            </div>
          </Col>
          <Col sm={12} md={6} lg={3}>
            <div className="item">
              {" "}
              <div className="image">
                <Image
                  src={require("../../assets/images/tintuc/tintuc03.webp")}
                  alt=""
                />
              </div>
            </div>
          </Col>
          <Col sm={12} md={6} lg={3}>
            <div className="item">
              {" "}
              <div className="image">
                <Image
                  src={require("../../assets/images/tintuc/tintuc04.webp")}
                  alt=""
                />
              </div>
            </div>
          </Col>
        </Row>
      </div>

      {/* DANG KY NHAN TIN */}
      <div className=" bg-black text-white mt-5 py-5">
        <div className="container d-flex flex-column gap-2 justify-content-center align-items-center">
          <h3 className="text-uppercase  text-center fw-bold">
            Đăng ký nhận tin từ VIẾT TÀI
          </h3>
          <p className="fw-light">
            Nhận thông tin sản phẩm mới nhất và các chương trình khuyến mãi.
          </p>
          <Form className="w-50 ">
            <Form.Group className="d-flex flex-sm-column gap-sm-2 gap-md-0 flex-md-row">
              <Form.Control placeholder="Nhập địa chỉ email..." name="email" />
              <Button variant="outline-danger btn-sm">Gửi</Button>
            </Form.Group>
          </Form>
        </div>
      </div>
    </>
  );
}

export default Home;
