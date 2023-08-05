import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { verifyEmailUser } from "../../features/user/userSlice";
import { useDispatch } from "react-redux";
import { setLoadingClose, setLoadingShow } from "../../features/loadingSlice";
import { publicRoutes } from "../../routes";
import HelmetCustom from "../../components/HelmetCustom";

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
      navigate(publicRoutes.login);
    };
    verifyEmailAsync();
  }, []);
  return (
    <div className="container d-flex align-content-center justify-content-center">
      <HelmetCustom title="Xác minh" />
      <h1>Xác minh email</h1>
    </div>
  );
}

export default VerifyEmail;
