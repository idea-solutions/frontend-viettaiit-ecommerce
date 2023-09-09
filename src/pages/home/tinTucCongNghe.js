import { Col, Row } from "react-bootstrap";
import LazyImage from "../../components/LazyImage";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
function TinTucCongNghe() {
  console.log("[HOME] tin tuc cong nghe -re-render");
  return (
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
  );
}

export default React.memo(TinTucCongNghe);
