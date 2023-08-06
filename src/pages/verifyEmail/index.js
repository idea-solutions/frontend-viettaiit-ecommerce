import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { verifyEmailUser } from "../../features/user/userSlice";
import { useDispatch } from "react-redux";
import { setLoadingClose, setLoadingShow } from "../../features/loadingSlice";
import { clientRoutes } from "../../routes";
import HelmetCustom from "../../components/HelmetCustom";
import Breadcrumb from "../../components/Breadcrumb";

function VerifyEmail() {
  const location = useLocation();
  const dispatch = useDispatch();
  const params = new URLSearchParams(location.search);
  const verificationToken = params.get("token");
  const email = params.get("email");
  const navigate = useNavigate();
  useEffect(() => {
    const verifyEmailAsync = async () => {
      dispatch(setLoadingShow());
      await dispatch(verifyEmailUser({ verificationToken, email }));
      dispatch(setLoadingClose());
      navigate(clientRoutes.login);
    };
    verifyEmailAsync();
  }, []);
  return (
    <div className="container d-flex align-content-center justify-content-center">
      <HelmetCustom title="Xác minh" />
      <Breadcrumb title="Xác minh tài khoản" />
    </div>
  );
}

export default VerifyEmail;
