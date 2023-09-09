import { Col, Row } from "react-bootstrap";
import LazyImage from "../../components/LazyImage";
import React from "react";
function CustomersOfVietTai() {
  console.log("[HOME] customers of viettai-re-render");
  return (
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
  );
}

export default React.memo(CustomersOfVietTai);
