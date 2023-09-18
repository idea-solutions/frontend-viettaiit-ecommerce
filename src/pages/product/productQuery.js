import { useParams } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb";
import {
  Col,
  Dropdown,
  DropdownButton,
  Pagination,
  Row,
} from "react-bootstrap";
import LazyImage from "../../components/LazyImage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDownAZ, faFilter } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import ProductItem from "../../components/ProductItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Scrollbar } from "swiper/modules";
import { useEffect } from "react";
import { getProducts } from "../../features/product/productSlice";

const menuSubCategories = {
  all: [
    {
      title: "Iphone",
      icon: require("../../assets/icons/subCategories/iphone.webp"),
    },
    {
      title: "Ipad",
      icon: require("../../assets/icons/subCategories/ipad.webp"),
    },
    {
      title: "Macbook",
      icon: require("../../assets/icons/subCategories/macbook.webp"),
    },
    {
      title: "Apple Watch",
      icon: require("../../assets/icons/subCategories/apple-watch.webp"),
    },
    {
      title: "Airports",
      icon: require("../../assets/icons/subCategories/airports.webp"),
    },
    {
      title: "Phụ kiện",
      icon: require("../../assets/icons/subCategories/phu-kien.webp"),
    },
  ],
};
function ProductQuery() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  const { products } = useSelector((store) => store.product);
  const { categories } = useSelector((store) => store.category);
  return (
    <div className="product-query">
      <Breadcrumb title="Tất cả sản phẩm" />
      <div className="container">
        <h3 className="text-center fw-bold text-size-26 mb-2">
          Tất cả sản phẩm
        </h3>
        <div
          style={{
            backgroundImage: `url(${require("../../assets/sliders/slider_1/1.webp")})`,
            paddingTop: "25%",
            border: "10px",
          }}
        ></div>

        {/* sub categories */}

        <SubCategories />

        {/* bar query */}
        <BarQuery />

        {/* LIST PRODUCT */}

        <div>
          <Row>
            {products &&
              products.map((product, index) => (
                <Col xs={12} sm={6} md={4} lg={3} key={index}>
                  <ProductItem product={product} />
                </Col>
              ))}
          </Row>

          <div className="my-4 d-flex align-items-center justify-content-center">
            <Pagination>
              <Pagination.Prev />
              <Pagination.Item>{1}</Pagination.Item>
              <Pagination.Item>{10}</Pagination.Item>
              <Pagination.Item>{11}</Pagination.Item>
              <Pagination.Item active>{12}</Pagination.Item>
              <Pagination.Item>{13}</Pagination.Item>

              <Pagination.Ellipsis />
              <Pagination.Item>{20}</Pagination.Item>
              <Pagination.Next />
            </Pagination>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductQuery;

function SubCategories({}) {
  const { categories } = useSelector((store) => store.category);
  return (
    <div className="sub-categories">
      <Swiper
        spaceBetween={25}
        navigation={true}
        scrollbar={true}
        modules={[Navigation, Autoplay, Scrollbar]}
        breakpoints={{
          100: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          500: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 25,
          },
        }}
        className="items"
      >
        {categories.map((category, index) => (
          <SwiperSlide className="item" key={index}>
            <span>
              <LazyImage
                src={
                  process.env.REACT_APP_BACKEND_URL +
                  "/static/assets/images/category/" +
                  category.image
                }
                alt=""
              />
            </span>
            <small>{category.categoryName}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

// bar -query
function BarQuery() {
  return (
    <div className="bar-query my-4">
      <div className="wrapper">
        <div className="left">
          <FontAwesomeIcon icon={faFilter} />
          <span>Bộ lọc</span>
          <small className=" ">0</small>
        </div>
        <div className="right max-lg-none">
          <div className="d-flex gap-2 align-items-center">
            <FontAwesomeIcon icon={faArrowDownAZ} />
            <span>Xếp theo</span>
          </div>
          <div className="item active">Mặc định</div>
          <div className="item">Tên A-Z</div>
          <div className="item">Tên Z-A</div>
          <div className="item">Hàng mới</div>
          <div className="item">Giá thấp đến cao</div>
          <div className="item">Giá cao đến thấp</div>
        </div>
        <DropdownButton
          id="dropdown-basic-button"
          className="max-lg-display d-none right"
          title="Tùy chọn"
        >
          <Dropdown.Item href="#/action-1">
            <div className="item active">Mặc định</div>
          </Dropdown.Item>
          <Dropdown.Item href="#/action-1">
            <div className="item">Tên A-Z</div>
          </Dropdown.Item>
          <Dropdown.Item href="#/action-1">
            <div className="item">Tên Z-A</div>
          </Dropdown.Item>
          <Dropdown.Item href="#/action-1">
            <div className="item">Hàng mới</div>
          </Dropdown.Item>
          <Dropdown.Item href="#/action-1">
            <div className="item">Giá thấp đến cao</div>
          </Dropdown.Item>
          <Dropdown.Item href="#/action-1">
            <div className="item">Giá cao đến thấp</div>
          </Dropdown.Item>
        </DropdownButton>
      </div>
    </div>
  );
}
