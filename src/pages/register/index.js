import { Link } from "react-router-dom";
import AnimationPage from "../../components/AnimationPage";
import { publicRoutes } from "../../routes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

import "./register.scss";
import FormControl from "../../components/FormControl";
import Form from "../../components/Form";
function Register() {
  return (
    <div className="register">
      <div className="container-fuild register__breadcrumb">
        <div className="container ">
          <Link
            to={publicRoutes.home}
            className="register__fs-13 hover-color-secondary text-decoration-none"
          >
            Trang chủ
          </Link>
          <FontAwesomeIcon
            className="px-3 register__fs-13"
            icon={faAngleRight}
          />
          <span className="text-secondary register__fs-13">
            Đăng ký tài khoản
          </span>
        </div>
      </div>
      <AnimationPage>
        <div className="container">
          <div className="register__form">
            <Form>
              <h5 className="text-center py-2">ĐĂNG KÝ</h5>
              <p className="text-center ">
                Đã có tải khoản đăng nhập
                <Link className="text-secondary ms-1" to={publicRoutes.login}>
                   tại đây
                </Link>
              </p>
              <div className="form-group">
                <FormControl type="text" placeholder="   Tên hiển thị" />
                <FormControl type="email" placeholder="   Email" />
                <FormControl type="password" placeholder="   Mật khẩu cấp 1" />
                <FormControl type="password" placeholder="   Mật khẩu cấp 2" />
                <div className="mb-3 ">
                  <button
                    type="submit"
                    className="btn btn-primary w-100 hover-bg-secondary"
                  >
                    ĐĂNG KÝ
                  </button>
                </div>
                <div className="mb-3">
                  <p className="d-flex justify-content-center">
                    <span>hoặc đăng nhập qua</span>
                  </p>
                </div>
                <div className="mb-3 d-flex justify-content-center gap-2">
                  <button type="submit" className="btn btn-facebook">
                    <span></span>
                    Facebook
                  </button>
                  <button type="submit" className="btn btn-google">
                    <span></span>
                    Google
                  </button>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </AnimationPage>
    </div>
  );
}

export default Register;
