import { Link } from "react-router-dom";
import AnimationPage from "../../components/AnimationPage";
import { publicRoutes } from "../../routes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import "./register.scss";
import FormControl from "../../components/FormControl";
import Form from "../../components/Form";
import { useState } from "react";
import { validateFormRegister } from "../../utils/validate";
import { toast } from "react-toastify";
import { registerUser } from "../../features/user/userSlice";
import { useDispatch } from "react-redux";
function Register() {
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({
    email: "",
    name: "",
    password: "",
    password2: "",
  });
  let disabled =
    !inputs.email || !inputs.name || !inputs.password || !inputs.password2;
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const err = validateFormRegister(inputs);
    if (err) {
      toast.warning(err);
      return;
    }
    dispatch(registerUser(inputs));
  };
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
          <motion.div className="register__form">
            <Form>
              <h5 className="text-center py-2">ĐĂNG KÝ</h5>
              <p className="text-center ">
                Đã có tải khoản đăng nhập
                <Link className="text-secondary ms-1" to={publicRoutes.login}>
                  tại đây
                </Link>
              </p>
              <div className="form-group">
                <FormControl
                  type="text"
                  placeholder="   Tên hiển thị"
                  name="name"
                  onChange={handleChange}
                />
                <FormControl
                  type="email"
                  placeholder="   Email"
                  name="email"
                  onChange={handleChange}
                />
                <FormControl
                  type="password"
                  placeholder="   Mật khẩu cấp 1"
                  name="password"
                  onChange={handleChange}
                />
                <FormControl
                  type="password"
                  placeholder="   Mật khẩu cấp 2"
                  name="password2"
                  onChange={handleChange}
                />
                <div className="mb-3 ">
                  <button
                    type="submit"
                    className="btn btn-primary w-100 hover-bg-secondary"
                    onClick={handleSubmit}
                    disabled={disabled}
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
          </motion.div>
        </div>
      </AnimationPage>
    </div>
  );
}

export default Register;
