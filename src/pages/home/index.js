import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faClock } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import bannerNewImage from "../../assets/images/section/section_banner_new_product.webp";

// MY IMPORTS


import LazyImage from "../../components/LazyImage";
import { Button, Col, Form, Row } from "react-bootstrap";
import HelmetCustom from "../../components/HelmetCustom";
import DanhMucNoiBat from "./danhMucNoiBat";
import CategoryProduct from "./categoryProduct";
import { useState } from "react";

import HotSales from "./hotSales";
import TopSlide from "./topSlide";
import PromoBoxes from "./promoBoxes";
import Banner from "./banner";

function Home() {
  const [testRerender, setTestRerender] = useState(false);
  return (
    <>
      <HelmetCustom title="Trang chủ" />
      <button onClick={() => setTestRerender(!testRerender)}>
        Test re-render
      </button>
      <div className="home">
        {/* TOP SLIDE */}
        <TopSlide />

        {/* PROMO BOX */}
        <PromoBoxes />

        {/* BANNER */}
        <Banner />

        {/* HOT SALES */}
        <HotSales />

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
                  <LazyImage src={bannerNewImage} alt="" />
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
                  <LazyImage
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
                  <LazyImage
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
                  <LazyImage
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
                  <LazyImage
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
                <LazyImage
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
                <LazyImage
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
                <LazyImage
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
                <LazyImage
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
