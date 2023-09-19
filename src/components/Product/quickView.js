import { useState } from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import { Navigation } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

// MY IMPORTS
import LazyImage from "../LazyImage";
import useDataDetail from "../../hooks/useDataDetail";
import { Swiper, SwiperSlide } from "swiper/react";
import { formatCurrency } from "../../utils/format";
import ButtonQuantity from "../Button/ButtonQuantity";
import PropTypes from "prop-types";
function QuickView({ show, onHide, slugName }) {
  const { data } = useDataDetail("/products/" + slugName);
  const thumbImages =
    data?.productItems.map((productItem) => productItem.image) || [];
  const colors =
    data?.productItems.map((productItem) => productItem.color) || [];
  const [idxSelected, setIdxSelected] = useState(0);
  if (!data) return null;
  return (
    <Modal
      show={show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <Row className=" position-relative">
          <Col xs={12} lg={5} className="mb-3 overflow-hidden">
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
          </Col>
          <Col xs={12} lg={7}>
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
              <div className="d-flex gap-2 align-items-center">
                <div>
                  Số lượng :{" "}
                  <ButtonQuantity className="btn-lg">{1}</ButtonQuantity>
                </div>
                <Button variant="outline-secondary ms-4 d-flex gap-2 py-3">
                  <FontAwesomeIcon icon={faCartShopping} />
                  <div className="fw-light text-size-16">Thêm vào giỏ</div>
                </Button>
              </div>
            </div>
          </Col>
        </Row>
        <div className="position-absolute top--2 right--1 z-1 cursor">
          <motion.span onClick={onHide}>
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="text-size-28 p-1 border-white"
            />
          </motion.span>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default QuickView;

QuickView.propTypes = {
  show: PropTypes.bool,
  onHide: PropTypes.bool,
  slugName: PropTypes.string,
};
