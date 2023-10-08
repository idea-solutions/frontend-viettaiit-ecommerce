import { Col, Row } from "react-bootstrap";
import Breadcrumb from "../../../components/Breadcrumb";
import HelmetCustom from "../../../components/HelmetCustom";
import { useLocation, Link } from "react-router-dom";
import { clientRoutes } from "../../../routes/index";
import { useEffect } from "react";
import { logoutAuth } from "../../../features/auth/authSlice";
import { useDispatch } from "react-redux";

function Account({ children }) {
  const dispatch = useDispatch();
  const objectTitles = {
    [clientRoutes?.account.main]: [
      { to: clientRoutes.account.main, title: "Tài khoản" },
    ],
    [clientRoutes?.account.orders]: [
      { to: clientRoutes.account.main, title: "Tài khoản" },
      { to: clientRoutes.account.orders, title: "Đơn hàng" },
    ],
  };
  const location = useLocation();
  const pathname = location.pathname;
  // console.log(pathname)

  useEffect(() => {}, [pathname]);
  return (
    <div className="account">
      <HelmetCustom title="Trang khách hàng" />
      <Breadcrumb titles={objectTitles[pathname]} />
      <div className="container">
        <Row>
          <Col xs={12} lg={3}>
            <div className="mb-3">
              <h5>TRANG TÀI KHOẢN</h5>
              <span>
                <small className="fw-bold">Xin chào</small>,{" "}
                <small className="text-info fw-fold">Viết Tài </small>!
              </span>
            </div>
            <div className="d-flex flex-column gap-3">
              <span
                className={`hover-color-secondary fw-light ${
                  pathname === clientRoutes.account.main ? "active" : ""
                }`}
              >
                <Link to={clientRoutes.account.main}> Thông tin tài khoản</Link>
              </span>
              <span
                className={`hover-color-secondary fw-light ${
                  pathname.includes(clientRoutes.account.orders) ? "active" : ""
                }`}
              >
                <Link to={clientRoutes.account.orders}> Đơn hàng của bạn</Link>
              </span>
              <span className="hover-color-secondary fw-light">
                <Link to={clientRoutes.product.productLove}>
                  {" "}
                  Danh sách yêu thích (2)
                </Link>
              </span>
              <span className="hover-color-secondary fw-light">
                So sánh sản phẩm (1)
              </span>
              <span className="hover-color-secondary fw-light">
                <Link to={clientRoutes.account.changePassword}>
                  {" "}
                  Đổi mật khẩu
                </Link>
              </span>
              <span className="hover-color-secondary fw-light">
                Sổ địa chỉ (1)
              </span>
              <span
                className="hover-color-secondary fw-light"
                onClick={() => dispatch(logoutAuth())}
              >
                Đăng xuất
              </span>
            </div>
          </Col>
          <Col xs={12} lg={9}>
            {children ? (
              children
            ) : (
              <div>
                <h5> THÔNG TIN TÀI KHOẢN</h5>
                <div className="d-flex flex-column gap-4">
                  <span>Họ tên: Viết Tài</span>
                  <span>Email: viettaixca123@gmail.com</span>
                  <span>Điện thoại: 3213212313</span>
                  <span>Công ty: dsa</span>
                  <span>Địa chỉ : 124 Nguyen Tat Thanh, Quận 3, Vietnam</span>
                </div>
              </div>
            )}
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Account;
