import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handlePaymentService } from "../../services/orderService";
import { setIsLoadingApi } from "../../features/loadingCompSlice";

function PaymentSuccess() {
  const { cart } = useSelector((store) => store.cart);
  const { address } = useSelector((store) => store.formAddress);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(setIsLoadingApi(true));
    handlePaymentService(
      {
        cart,
        address,
        status: "completed",
      },
      dispatch,
      navigate
    );
    dispatch(setIsLoadingApi(false));
  }, []);
  return (
    <div className="">
      {/* <div>Pay ral success</div> */}
    </div>
  );
}

export default PaymentSuccess;
