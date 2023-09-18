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
import {
  getProducts,
  setQueryProduct,
} from "../../features/product/productSlice";
import useScrollTop from "../../hooks/useScrollTop";
import HelmetCustom from "../../components/HelmetCustom";

const optionsName = {
  "san-pham-khuyen-mai": "Sản phẩm khuyến mãi",
  "tat-ca": "Tất cả sản phẩm",
  
};
function ProductQuery() {
  useScrollTop();
  const dispatch = useDispatch();
  const { name } = useParams();
  const { products, query, page, totalPages } = useSelector(
    (store) => store.product
  );
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch, query]);

  return (
    <div className="product-query">
      <Breadcrumb title={optionsName[name]} />
      <HelmetCustom title={optionsName[name]} />
      <div className="container">
        <h3 className="text-center fw-bold text-size-26 mb-2">
          {optionsName[name]}
        </h3>
        <div
          style={{
            backgroundImage: `url(${require("../../assets/sliders/slider_1/1.webp")})`,
            paddingTop: "25%",
            border: "10px",
          }}
        ></div>

        {/* sub categories */}

        <SubCategories categoryId={query.categoryId} />

        {/* bar query */}
        <BarQuery sortValue={query["sort"]} />

        {/* LIST PRODUCT */}

        <div>
          <Row>
            {products && products.length > 0 ? (
              products.map((product, index) => (
                <Col xs={12} sm={6} md={4} lg={3} key={index}>
                  <ProductItem product={product} />
                </Col>
              ))
            ) : (
              <div className="text-success  text-bold text-center py-5 text-uppercase bg-body-secondary mt-2">
                <h3 className="fw-bold">Không có sản phẩm !</h3>
              </div>
            )}
          </Row>
          <div className="my-4 d-flex align-items-center justify-content-center">
            <Pagination>
              <Pagination.Prev
                disabled={page === 1}
                onClick={() => {
                  var curPage;
                  if (page <= 1) curPage = totalPages;
                  else curPage = page - 1;
                  dispatch(setQueryProduct({ name: "page", value: curPage }));
                }}
              />
              {Array.from({ length: totalPages }, (_, index) => (
                <Pagination.Item
                  onClick={() =>
                    dispatch(
                      setQueryProduct({ name: "page", value: index + 1 })
                    )
                  }
                  key={index + 1}
                  active={page === index + 1}
                >
                  {index + 1}
                </Pagination.Item>
              ))}
              <Pagination.Next
                disabled={page === totalPages}
                onClick={() => {
                  var curPage;
                  if (page >= totalPages) curPage = 1;
                  else curPage = page + 1;
                  dispatch(setQueryProduct({ name: "page", value: curPage }));
                }}
              />
            </Pagination>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductQuery;

function SubCategories({ categoryId }) {
  const { categories } = useSelector((store) => store.category);
  const dispatch = useDispatch();
  const handleQueryProduct = (name, value) => {
    dispatch(setQueryProduct({ name, value }));
  };
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
            slidesPerView: 7,
            spaceBetween: 25,
          },
        }}
        className="list-product-slide items"
      >
        <>
          <SwiperSlide
            className={`item ${categoryId ? "" : "active"}`}
            onClick={() => handleQueryProduct("categoryId", "all")}
          >
            <span>
              <LazyImage className="w-100 h-100 rounded-circle" src={require('../../assets/no-image.webp')} alt="" />
            </span>
            <small>All</small>
          </SwiperSlide>
          {categories.map((category, index) => (
            <SwiperSlide
              className={`item ${categoryId === category.id ? "active" : ""}`}
              key={index}
              onClick={() => handleQueryProduct("categoryId", category.id)}
            >
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
        </>
      </Swiper>
    </div>
  );
}

// bar -query
function BarQuery({ sortValue }) {
  const dispatch = useDispatch();
  const handleQueryProduct = (name, value) => {
    dispatch(setQueryProduct({ name, value }));
  };
  const itemRight = [
    {
      title: "Mặc định",
      value: "createdAt",
    },
    { title: "Tên A-Z", value: "name" },
    {
      title: "Tên A-Z",
      value: "-name",
    },
    {
      title: "Giá thấp đến cao",
      value: "price",
    },
    { title: "Giá cao đến thấp", value: "-price" },
  ];
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
          {itemRight.map((item, index) => (
            <div
              key={index}
              className={`item ${sortValue === item.value ? "active" : ""}`}
              onClick={() => handleQueryProduct("sort", item.value)}
            >
              {item.title}
            </div>
          ))}
        </div>
        <DropdownButton
          id="dropdown-basic-button"
          className="max-lg-display d-none right"
          title="Tùy chọn"
        >
          {itemRight.map((item, index) => (
            <Dropdown.Item
              key={index}
              className={`item ${sortValue === item.value ? "active" : ""}`}
              onClick={() => handleQueryProduct("sort", item.value)}
            >
              {item.title}
            </Dropdown.Item>
          ))}
        </DropdownButton>
      </div>
    </div>
  );
}
