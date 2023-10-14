import { useDispatch } from "react-redux";
import { getUserSuccess } from "../../../features/auth/authSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toastSuccess } from "../../../utils/toast";
import { setIsLoadingApi } from "../../../features/loadingCompSlice";

function LoginSuccess() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(setIsLoadingApi(true));
    const getUserAsync = async () => {
      const { payload } = await dispatch(getUserSuccess());
      if (payload.status === 200) {
        toastSuccess(payload.message);
      }
    };
    getUserAsync();
    navigate("/");
    dispatch(setIsLoadingApi(false));
  }, []);
  return <div className="">redirect home</div>;
}

export default LoginSuccess;
