import { Link, useNavigate } from "react-router-dom";
import AnimationPage from "../../components/AnimationPage";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";

// MY IMPORTS
import FormControl from "../../components/FormControl";
import Form from "../../components/Form";

import { publicRoutes } from "../../routes";
import { validateFormRegister } from "../../utils/validate";

import { registerUser } from "../../features/user/userSlice";

import { setLoadingClose, setLoadingShow } from "../../features/loadingSlice";
import "./register.scss";
import HelmetCustom from "../../components/HelmetCustom";
import Breadcrumb from "../../components/Breadcrumb";
function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading } = useSelector((store) => store.user);
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
    if (isLoading) return;

    const err = validateFormRegister(inputs);
    if (err) {
      toast.warning(err);
      return;
    }
    dispatch(setLoadingShow());
    const { payload } = await dispatch(registerUser(inputs));
    dispatch(setLoadingClose());
    if (payload.status === 201) {
      navigate(publicRoutes.login);
    }
  };
  return (
    <div className="register">
      <HelmetCustom title="Đăng ký" />
      <Breadcrumb title="Đăng ký tài khoản" />
      <AnimationPage>
        <div className="container">
          <motion.div className="register__form">
            <Form className="form position-relative">
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
                <div className="mb-3  position-relative">
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
