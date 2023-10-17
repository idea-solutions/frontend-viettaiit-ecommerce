import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handlePaymentService } from "../../services/orderService";
import { setIsLoadingComp } from "../../features/loadingCompSlice";

function PaymentSuccess() {
  const { cart } = useSelector((store) => store.cart);
  const { address } = useSelector((store) => store.formAddress);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const onPaymentSuccess = async () => {
      await handlePaymentService(
        {
          cart,
          address,
          status: "completed",
        },
        dispatch,
        navigate
      );
    };
    onPaymentSuccess();
  }, []);
  return (
    <div className="">
      <h1></h1>
    </div>
  );
}

export default PaymentSuccess;
