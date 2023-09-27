import { Button, Col, Row } from "react-bootstrap";
import Breadcrumb from "../../components/Breadcrumb";
import HelmetCustom from "../../components/HelmetCustom";
import LazyImage from "../../components/LazyImage";
import ButtonQuantity from "../../components/Button/ButtonQuantity";
import { useMediaQuery } from "react-responsive";

function Cart() {
  const isTabletOrMobile = useMediaQuery({
    query: "(max-width: 1024px)",
  });

  const renderCartItems = (isTabletOrMobile) => {
    if (isTabletOrMobile) return <CartItemsDownDesktop />;
    return <CartItemsUpDesktop />;
  };
  return (
    <div className="cart">
      <HelmetCustom title="Giỏ hàng" />
      <Breadcrumb title="Giỏ hàng" />
      <div className="container">
        <h3 className="my-4 text-size-22 fw-bold">Giỏ hàng của bạn</h3>
        <div className="top">
          <Row className="info">
            <Col xs={6}>
              <h5>THÔNG TIN SẢN PHẨM</h5>
            </Col>
            <Col xs={2}>
              <h5 className="text-center"> ĐƠN GIÁ</h5>
            </Col>
            <Col xs={2}>
              <h5 className="text-center">SỐ LƯỢNG</h5>
            </Col>
            <Col xs={2}>
              <h5 className="text-center"> THÀNH TIỀN</h5>
            </Col>
          </Row>
          {renderCartItems(isTabletOrMobile)}
        </div>
        <div className="mt-3">
          <Row>
            <Col lg={8} xs={4} md={6} >
              <Button variant="outline-primary">TIẾP TỤC MUA HÀNG</Button>
            </Col>
            <Col lg={4} xs={8} md={6} >
              <div className="d-flex justify-content-between">
                <span className="fw-light">TỔNG TIỀN:</span>
                <span className="text-size-18 text-danger fw-bold">
                  119.960.000₫
                </span>
              </div>
              <Button variant="primary w-100 mt-2 hover-bg-secondary btn-md">
                THANH TOÁN
              </Button>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default Cart;

function CartItemsDownDesktop() {
  return (
    <div className="items">
      <div className="mt-2 border-bottom">
        <div className="left">
          <LazyImage src="https://bizweb.dktcdn.net/thumb/compact/100/480/632/products/210916030223-promax-01.jpg" />
          <div className="w-100">
            <span>iPhone 13 Pro Max 1TB - Chính Hãng VN/A</span>
            <small className="mb-2">vàng</small>
            <div className="d-flex justify-content-between">
              <ButtonQuantity qty={1} className="btn-sm d-flex" />

              <div>
                <span className="text-danger fw-bold text-size-14 mb-1">
                  {" "}
                  29.990.000₫
                </span>
                <Button variant="outline-danger btn-xs">Xóa</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-2">
        <div className="left">
          <LazyImage src="https://bizweb.dktcdn.net/thumb/compact/100/480/632/products/210916030223-promax-01.jpg" />
          <div className="w-100">
            <span>iPhone 13 Pro Max 1TB - Chính Hãng VN/A</span>
            <small className="mb-2">vàng</small>
            <div className="d-flex justify-content-between">
              <ButtonQuantity qty={1} className="btn-sm d-flex" />

              <div>
                <span className="text-danger fw-bold text-size-14 mb-1">
                  {" "}
                  29.990.000₫
                </span>
                <Button variant="outline-danger btn-xs">Xóa</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CartItemsUpDesktop() {
  return (
    <Row>
      <Col xs={12}>
        <Row className="items border-bottom">
          <Col xs={12} md={6}>
            <div className="left">
              <LazyImage src="https://bizweb.dktcdn.net/thumb/compact/100/480/632/products/210916030223-promax-01.jpg" />

              <div>
                <span>iPhone 13 Pro Max 1TB - Chính Hãng VN/A</span>
                <small className="mb-2">vàng</small>
                <Button variant="outline-danger btn-xs">Xóa</Button>
              </div>
            </div>
          </Col>
          <Col
            md={2}
            className="d-flex align-items-center text-danger fw-bold text-size-14 justify-content-center"
          >
            29.990.000₫
          </Col>
          <Col
            md={2}
            className="d-flex align-items-center justify-content-center"
          >
            <ButtonQuantity qty={1} className="btn-sm" />
          </Col>
          <Col
            xs={2}
            className="d-flex align-items-center text-danger fw-bold text-size-14 justify-content-center"
          >
            29.990.000₫
          </Col>
        </Row>
      </Col>
      <Col xs={12}>
        <Row className="items">
          <Col xs={12} md={6}>
            <div className="left">
              <LazyImage src="https://bizweb.dktcdn.net/thumb/compact/100/480/632/products/210916030223-promax-01.jpg" />

              <div>
                <span>iPhone 13 Pro Max 1TB - Chính Hãng VN/A</span>
                <small className="mb-2">vàng</small>
                <Button variant="outline-danger btn-xs">Xóa</Button>
              </div>
            </div>
          </Col>
          <Col
            md={2}
            className="d-flex align-items-center text-danger fw-bold text-size-14 justify-content-center"
          >
            29.990.000₫
          </Col>
          <Col
            md={2}
            className="d-flex align-items-center justify-content-center"
          >
            <ButtonQuantity qty={1} className="btn-sm" />
          </Col>
          <Col
            xs={2}
            className="d-flex align-items-center text-danger fw-bold text-size-14 justify-content-center"
          >
            29.990.000₫
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
