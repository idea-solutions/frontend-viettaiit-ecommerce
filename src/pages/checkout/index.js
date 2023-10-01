import { Button, Col, FloatingLabel, Form, Row } from "react-bootstrap";
import HelmetCustom from "../../components/HelmetCustom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { clientRoutes } from "../../routes";
import { faMoneyBill, faUser } from "@fortawesome/free-solid-svg-icons";
import LazyImage from "../../components/LazyImage";

function CheckOut() {
  return (
    <div className="vh-100 ">
      <HelmetCustom title="Thanh toán" />
      <div className="container w-70 ">
        <Row>
          <Col md={12} xl={8} className="">
            <FontAwesomeIcon className="icon-size-sm  me-3  " />
            <Link
              to={"/"}
              className={`logo d-block fs-4 fw-bold text-center text-size-30 rounded mb-3`}
            >
              Sudes Phone
            </Link>
            <Row className="">
              <Col md={12} xl={6}>
                <div className="d-flex justify-content-between">
                  <span className="fw-bold text-size-18 mb-3">
                    Thông tin nhận hàng
                  </span>
                  <Link
                    to={clientRoutes.login}
                    className="text-info fw-bold text-size-14"
                  >
                    <FontAwesomeIcon icon={faUser} className="ms-2" /> Đăng nhập
                  </Link>
                </div>
                <Form className="">
                  <FloatingLabel
                    controlId="floatingInputGrid"
                    label="Email"
                    className="mb-2"
                  >
                    <Form.Control
                      size="sm"
                      type="email"
                      placeholder="name@example.com"
                    />
                  </FloatingLabel>
                  <FloatingLabel
                    controlId="floatingInputGrid"
                    label="Họ và tên"
                    className="mb-2"
                  >
                    <Form.Control type="email" placeholder="Nguyen Viet Tai" />
                  </FloatingLabel>

                  <div className="d-flex mb-2">
                    <FloatingLabel
                      controlId="floatingInputGrid"
                      label="Số điện thoại (tùy chọn)"
                      className="w-100"
                    >
                      <Form.Control type="email" placeholder="329638260" />
                    </FloatingLabel>
                  </div>
                  <FloatingLabel
                    controlId="floatingInputGrid"
                    label="Địa chỉ (tùy chọn)"
                    className="mb-2"
                  >
                    <Form.Control
                      type="email"
                      placeholder="124 Nguyen Tat Thanh"
                    />
                  </FloatingLabel>
                  <div className="d-flex mb-2">
                    <FloatingLabel
                      controlId="floatingInputGrid"
                      label="Tỉnh thành"
                      className="w-90"
                    >
                      <Form.Control
                        type="email"
                        placeholder="name@example.com"
                      />
                    </FloatingLabel>
                    <FloatingLabel>
                      <Form.Select>
                        <option></option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </Form.Select>
                    </FloatingLabel>
                  </div>
                  <div className="d-flex mb-2">
                    <FloatingLabel
                      controlId="floatingInputGrid"
                      label="Quận huyện (Tùy chọn)"
                      className="w-90"
                    >
                      <Form.Control
                        type="email"
                        placeholder="name@example.com"
                      />
                    </FloatingLabel>
                    <FloatingLabel>
                      <Form.Select>
                        <option></option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </Form.Select>
                    </FloatingLabel>
                  </div>
                  <div className="d-flex mb-2">
                    <FloatingLabel
                      controlId="floatingInputGrid"
                      label="Phường xã (Tùy chọn)"
                      className="w-90"
                    >
                      <Form.Control
                        type="email"
                        placeholder="name@example.com"
                      />
                    </FloatingLabel>
                    <FloatingLabel>
                      <Form.Select>
                        <option></option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </Form.Select>
                    </FloatingLabel>
                  </div>
                  <FloatingLabel
                    controlId="floatingTextarea2"
                    label="Ghi chú (tùy chọn)"
                  >
                    <Form.Control
                      as="textarea"
                      placeholder="Ghi chú"
                      style={{ height: "70px" }}
                    />
                  </FloatingLabel>
                </Form>
              </Col>
              <Col md={12}  xl={6} className="">
                <div className=" mt-sm-5 ">
                  <span className="fw-bold text-size-18 mb-3 d-block">
                    Vận chuyển
                  </span>
                  <div className="d-flex justify-content-between align-items-center p-2 border ">
                    <Form.Check
                      type="radio"
                      label={`Giao hàng tận nơi`}
                      className="text-size-14 "
                    />
                    <span className="fw-bold text-size-14">40.000đ</span>
                  </div>
                </div>
                <div className="mt-4">
                  <span className="fw-bold text-size-18">Thanh toán</span>
                  <div className="d-flex justify-content-between align-items-center p-2 border ">
                    <Form.Check
                      type="radio"
                      label={"Thanh toán khi giao hàng (COD)"}
                      className="text-size-14 "
                    />
                    <span className="fw-bold text-size-14">
                      <FontAwesomeIcon
                        icon={faMoneyBill}
                        className="text-info"
                      />
                    </span>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
          <Col md={12} xl={4} className="px-0">
            <h6 className=" border-bottom text-size-20 fw-bold py-3 px-4 mb-0">
              Đơn hàng (1 sản phẩm)
            </h6>

            <Row>
              <Col md={12} className="ps-5">
                <div>
                  {/* ITEM */}
                  <div className="d-flex justify-content-between align-items-center border-bottom py-2">
                    <div className="d-flex gap-1 align-items-center">
                      <div className="w-50 h-50">
                        <LazyImage
                          src="https://bizweb.dktcdn.net/thumb/thumb/100/480/632/products/pin-sac-du-phong-apple-magsafe-b.jpg?v=1681917535150"
                          alt=""
                          className="w-70 h-70 border border-info rounded-5"
                        />
                      </div>
                      <span className="fw-light text-size-14">
                        Pin sạc dự phòng Apple Magsafe Battery Pack Chính Hãng
                        MJWY3VN
                      </span>
                    </div>
                    <div className="fw-light text-size-14">2.590.000₫</div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center border-bottom py-2">
                    <div className="d-flex gap-1 align-items-center">
                      <div className="w-50 h-50">
                        <LazyImage
                          src="https://bizweb.dktcdn.net/thumb/thumb/100/480/632/products/pin-sac-du-phong-apple-magsafe-b.jpg?v=1681917535150"
                          alt=""
                          className="w-70 h-70 border border-info rounded-5"
                        />
                      </div>
                      <span className="fw-light text-size-14">
                        Pin sạc dự phòng Apple Magsafe Battery Pack Chính Hãng
                        MJWY3VN
                      </span>
                    </div>
                    <div className="fw-light text-size-14">2.590.000₫</div>
                  </div>
                </div>
              </Col>
              <Col md={12} className="ps-5">
                <div className="d-flex gap-2 justify-content-between py-3 border-bottom">
                  <FloatingLabel
                    controlId="floatingInputGrid"
                    label="Nhập mã sản phẩm"
                  >
                    <Form.Control type="text" placeholder="name@example.com" />
                  </FloatingLabel>
                  <Button variant="info btn-md">Áp dụng</Button>
                </div>
              </Col>
              <Col md={12} className="ps-5">
                <div className="py-3 border-bottom">
                  <div className="d-flex justify-content-between align-items-center">
                    <span>Tạm tính</span>
                    <span>2.590.000₫</span>
                  </div>

                  <div className="d-flex justify-content-between align-items-center">
                    <span>Phí vận chuyển</span>
                    <span>40.000₫</span>
                  </div>
                </div>
              </Col>
              <Col md={12} className="ps-5 mb-10">
                <div className="">
                  <div className="d-flex justify-content-between align-items-center py-3">
                    <span className="text-size-14">Tổng cộng</span>
                    <span className="text-size-16 fw-bold text-info">
                      2.630.000₫
                    </span>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mt-2">
                    <Link
                      to={clientRoutes.cart}
                      className="text-size-14 text-info"
                    >
                      ❮ Quay về giỏ hàng
                    </Link>
                    <Button variant="info" className="text-size-16 fw-bold btn-md">
                      ĐẶT HÀNG
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default CheckOut;
