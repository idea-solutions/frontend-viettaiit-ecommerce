import { useDispatch } from "react-redux";
import { getUserSuccess } from "../../../features/auth/authSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { setIsLoadingComp } from "../../../features/loadingCompSlice";

function LoginSuccess() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log("login success");
  useEffect(() => {
    dispatch(setIsLoadingComp(true));
    const getUserAsync = async () => {
      const { payload } = await dispatch(getUserSuccess());
      console.log(payload);
      if (payload.status === 200) {
        navigate("/");
      }
    };
    getUserAsync();
    dispatch(setIsLoadingComp(false));
  }, []);
  return <div className="">redirect home</div>;
}

export default LoginSuccess;
