import { useParams } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb";
import HelmetCustom from "../../components/HelmetCustom";
import { Button, Col, Row } from "react-bootstrap";
import LazyImage from "../../components/LazyImage";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { IconFire } from "../../assets/icons";
import ButtonQuantity from "../../components/ButtonQuantity";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import promoBoxes from "../../assets/promoBox";
import useDataDetail from "../../hooks/useDataDetail";
import { formatCurrency } from "../../utils/format";
import { useState } from "react";
function ProductDetail() {
  const { slug: name } = useParams();
  const { data, isLoading, isError } = useDataDetail("/products/" + name);
  console.log("[PRODUCT-DETAIL - rerender");
  const thumbImages =
    data?.productItems.map((productItem) => productItem.image) || [];
  const colors =
    data?.productItems.map((productItem) => productItem.color) || [];
  const [idxSelected, setIdxSelected] = useState(0);
  return (
    <div className="product-detail">
      <HelmetCustom title="Chi tiết sản phẩm" />
      <Breadcrumb title={data?.name} />
      <div className="container">
        <Row>
          <Col lg={4} xs={12} className="mb-3 overflow-hidden">
            <div className=" ">
              <LazyImage
                src={
                  thumbImages &&
                  process.env.REACT_APP_BACKEND_URL +
                    "/static/uploads/" +
                    thumbImages[idxSelected]
                }
                alt={data?.name}
              />
            </div>

            <Swiper
              spaceBetween={10}
              slidesPerView={5}
              navigation={true}
              modules={[Navigation]}
              className="list-product-slide thumb-images"
            >
              {thumbImages &&
                thumbImages.map((thumb, index) => (
                  <SwiperSlide
                    className={`thumb-image ${
                      idxSelected === index ? "active" : ""
                    }`}
                    key={index}
                    onClick={() => setIdxSelected(index)}
                  >
                    <LazyImage
                      src={
                        process.env.REACT_APP_BACKEND_URL +
                        "/static/uploads/" +
                        thumb
                      }
                      alt={data?.name}
                    />
                  </SwiperSlide>
                ))}
            </Swiper>

            <div className=" border-2 overflow-hidden">
              <LazyImage
                src={require("../../assets/images/productDetail/big-sales.webp")}
                alt=""
              />
            </div>
          </Col>
          <Col lg={5} xs={12}>
            <h4 className="fw-bold">{data?.name}</h4>
            <p className="fw-light text-size-13">
              <span>
                Thương hiệu : <small>{data?.provider.providerName}</small>
              </span>
              <span className="mx-2">|</span>
              <span>
                Tình trạng : <small>Còn hàng</small>
              </span>
            </p>
            <hr />

            {/* BLOCK SALES */}
            <div className="block-sale">
              <div className="block-sale__top py-1">
                <span className="block-sale__top__left">
                  <p className=" text-size-14">HOT SALE CUỐI TUẦN</p>
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
            </div>

            {/* PRICE */}
            <div className="my-2">
              <span className="text-secondary fw-bold text-size-22">
                {formatCurrency(
                  data?.price - (data?.price * data?.discount) / 100
                )}
              </span>
              <span className="text-gray-100 text-decoration-line-through opacity-25 ms-2">
                {formatCurrency(data?.price)}
              </span>
            </div>
            <div className="my-3">
              <p className="text-size-16">
                <span className="text-16">
                  Màu sắc :{" "}
                  <small
                    className="fw-bold ms-2"
                    style={{ color: `${colors[idxSelected]?.value}` }}
                  >
                    {colors &&
                      colors[idxSelected]?.value.slice(0, 1).toUpperCase() +
                        colors[idxSelected]?.value.slice(1)}
                  </small>
                </span>
              </p>
              <div className="colors">
                {colors &&
                  colors.map((color, index) => (
                    <span
                      onClick={() => setIdxSelected(index)}
                      className={`p-3 d-inline-block border-2 overflow-auto mx-1 color ${
                        idxSelected === index ? "active" : ""
                      } `}
                      key={color.id}
                      style={{ background: `${color.value}` }}
                    ></span>
                  ))}
              </div>

              <div className="my-4">
                <div className="fw-light text-size-14">
                  ✔️ {data?.description}
                </div>
                <div className="fw-light text-size-14">
                  ✔️ {data?.description}
                </div>
                <div className="fw-light text-size-14">
                  ✔️ {data?.description}
                </div>
              </div>

              {/* SO LUONG */}
              <div>
                <span>
                  Số lượng :{" "}
                  <ButtonQuantity className="btn-lg">{1}</ButtonQuantity>
                </span>
              </div>

              {/* Mua NGAY */}
              <div className="my-4">
                <Button variant="primary hover-bg-secondary">
                  <div className="fw-bold text-size-20 mb-2 ">MUA NGAY</div>
                  <div className="fw-light text-size-16">
                    Giao tận nơi hoặc nhận tại cửa hàng
                  </div>
                </Button>
                <Button variant="outline-secondary ms-4">
                  <div className="fw-bold text-size-20 mb-2 ">
                    <FontAwesomeIcon icon={faCartShopping} />
                  </div>
                  <div className="fw-light text-size-16">Thêm vào giỏ</div>
                </Button>
              </div>
            </div>
          </Col>
          <Col lg={3} xs={12}>
            <div>
              <div className=" border-2 overflow-hidden rounded-top overflow-auto bg-secondary text-white p-2">
                <div className="fw-fold">
                  <FontAwesomeIcon icon={faCartShopping} />
                  <span className="fw-bold ms-2">Khuyến mãi đặc biệt</span>
                </div>
              </div>
              <div className="p-2 border  border-secondary rounded-bottom">
                <div className="text-size-14">
                  <small>-</small> Giảm trực tiếp 40%, tối đa{" "}
                  <span className="text-secondary fw-bold">600.000 VNĐ</span>{" "}
                  khi mở thẻ TP Bank EVO .
                </div>
                <div className="text-size-14">
                  <small>-</small> Giảm trực tiếp 40%, tối đa{" "}
                  <span className="text-secondary fw-bold">600.000 VNĐ</span>{" "}
                  khi mở thẻ TP Bank EVO .
                </div>
                <div className="text-size-14">
                  <small>-</small> Giảm trực tiếp 40%, tối đa{" "}
                  <span className="text-secondary fw-bold">600.000 VNĐ</span>{" "}
                  khi mở thẻ TP Bank EVO .
                </div>
              </div>
            </div>

            {/* Chinh sahc ho tro */}

            <div className="mt-4">
              <div className=" border-2 overflow-hidden rounded-top overflow-auto bg-primary text-white p-2">
                <div className="fw-fold">
                  <FontAwesomeIcon icon={faCartShopping} />
                  <span className="fw-bold ms-2">Chính sách hỗ trợ</span>
                </div>
              </div>
              <div className="p-2 border  border-primary rounded-bottom bg-gray-100">
                {promoBoxes.map((promo, index) => (
                  <>
                    <div
                      className="d-flex gap-2 py-2 border-bottom"
                      key={index}
                    >
                      <div className="w-15 h-15">
                        <LazyImage src={promo.image} alt="" />
                      </div>
                      <span className="mt--1">
                        <div className="fw-bold text-primary text-size-16">
                          Vận chuyển miễn phí
                        </div>
                        <small className="fw-light opacity-50  text-size-14">
                          Hóa đơn trên 5 triệu
                        </small>
                      </span>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default ProductDetail;
