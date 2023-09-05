import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { resetPasswordUser } from "../../features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { setLoadingClose, setLoadingShow } from "../../features/loadingSlice";
import { clientRoutes } from "../../routes";
import HelmetCustom from "../../components/HelmetCustom";
import Breadcrumb from "../../components/Breadcrumb";
import { validateFormResetPassword } from "../../utils/validate";
import { toastWarning } from "../../utils/toast";
import { Button, Form } from "react-bootstrap";

function ResetPassword() {
  const location = useLocation();
  const [inputs, setInputs] = useState({
    password1: "",
    password2: "",
  });
  const dispatch = useDispatch();
  const params = new URLSearchParams(location.search);
  const passwordToken = params.get("token");
  const email = params.get("email");
  const { isLoading } = useSelector((store) => store.user);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // useEffect(() => {
  //   const verifyEmailAsync = async () => {
  //
  //   };
  //   verifyEmailAsync();
  // }, []);
  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (isLoading) return;
    const err = validateFormResetPassword(inputs);
    if (err) {
      toastWarning(err);

      return;
    }
    dispatch(setLoadingShow());
    const { payload } = await dispatch(
      resetPasswordUser({
        passwordToken,
        email,
        password: inputs.password1,
        confirmPassword: inputs.password2,
      })
    );
    dispatch(setLoadingClose());
    if (payload.status === 200) {
      navigate(clientRoutes.login);
    }
  };
  return (
    <>
      <Breadcrumb title="Đặt lại mật khẩu" />
      <HelmetCustom title="Đặt lại mật khẩu" />
      <div className="container">
        <h4>Lấy lại mật khẩu</h4>
        <p>Nhập mật khẩu mới</p>
        <Form className="form d-flex flex-column gap-2">
          <label className="">
            Mật khẩu<sup>*</sup>
          </label>
          <Form.Control
            type="password"
            name="password1"
            onChange={handleChange}
          />
          <label className="">
            Xác nhận mật khẩu<sup>*</sup>
          </label>
          <Form.Control
            type="password"
            name="password2"
            onChange={handleChange}
          />
          <div className="mb-3">
            <Button
              variant="primary"
              className="me-5"
              onClick={handleResetPassword}
            >
              Đổi mật khẩu
            </Button>
            <Button
              onClick={(e) => {
                e.preventDefault();
                navigate(clientRoutes.home);
              }}
              variant="outline-primary"
              className="text-decoration-underline"
            >
              Hủy
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
}

export default ResetPassword;
