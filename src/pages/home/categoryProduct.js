import {
  faArrowLeftLong,
  faArrowRightLong,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Scrollbar } from "swiper/modules";
import { Fragment } from "react";
import ProductItem from "../../components/ProductItem";
import { useMediaQuery } from "react-responsive";
import { Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
function CategoryProduct({ products, listSubCategory, title }) {
  const isTabletOrMobile = useMediaQuery({
    query: "(max-width: 1024px)",
  });

  // handle render responsive
  const createListProduct = () => {
    if (isTabletOrMobile) {
      return (
        <Swiper
          spaceBetween={25}
          slidesPerView={4}
          navigation={true}
          modules={[Navigation, Autoplay]}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            100: {
              slidesPerView: 1,
              spaceBetween: 50,
            },
            500: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 25,
            },
          }}
        >
          <SwiperSlide>
            <ProductItem product hiddenSold />
          </SwiperSlide>
          <SwiperSlide>
            <ProductItem product hiddenSold />
          </SwiperSlide>
          <SwiperSlide>
            <ProductItem product hiddenSold />
          </SwiperSlide>
          <SwiperSlide>
            <ProductItem product hiddenSold />
          </SwiperSlide>
          <SwiperSlide>
            <ProductItem product hiddenSold />
          </SwiperSlide>
          <SwiperSlide>
            <ProductItem product hiddenSold />
          </SwiperSlide>
          <SwiperSlide>
            <ProductItem product hiddenSold />
          </SwiperSlide>
          <SwiperSlide>
            <ProductItem product hiddenSold />
          </SwiperSlide>
        </Swiper>
      );
    }
    return (
      <Row>
        <Col lg={3}>
          <ProductItem product hiddenSold />
        </Col>
        <Col lg={3}>
          <ProductItem product hiddenSold />
        </Col>
        <Col lg={3}>
          <ProductItem product hiddenSold />
        </Col>
        <Col lg={3}>
          <ProductItem product hiddenSold />
        </Col>
        <Col lg={3}>
          <ProductItem product hiddenSold />
        </Col>
        <Col lg={3}>
          <ProductItem product hiddenSold />
        </Col>
        <Col lg={3}>
          <ProductItem product hiddenSold />
        </Col>
        <Col lg={3}>
          <ProductItem product hiddenSold />
        </Col>
      </Row>
    );
  };
  return (
    <div className="container mt-3 categoryProduct">
      <h3 className=" text-uppercase mt-5 mt-3 text-center fw-bold">{title}</h3>
      <div className="listSubcategory">
        <FontAwesomeIcon
          icon={faArrowLeftLong}
          className="me-2 d-none max-md-display icon "
        />
        <div className="d-flex justify-content-center align-items-center items">
          {listSubCategory.map((subCategory, index) => (
            <Fragment key={index}>
              <span className={`item ${index == 0 ? "active" : ""}`}>
                {subCategory}
              </span>
              {index !== listSubCategory.length - 1 && (
                <small className="mx-2">/</small>
              )}
            </Fragment>
          ))}
        </div>
        <FontAwesomeIcon
          icon={faArrowRightLong}
          className="ms-2 d-none max-md-display icon "
        />
      </div>
      {createListProduct()}
      <div className="text-center">
        <Link className="btn btn-outline-primary my-4 btn-md" to="">
          <span>Xem tất cả</span>

          <FontAwesomeIcon icon={faChevronRight} shake className="ms-2" />
        </Link>
      </div>
    </div>
  );
}

export default CategoryProduct;
