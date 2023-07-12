import { useNavigate } from "react-router-dom";
import { Image } from "react-bootstrap";

// MY IMPORTS
import AnimationPage from "../../components/AnimationPage";
import LazyImage from "../../components/LazyImage";
function NotFound() {
  const navigate = useNavigate();
  return (
    <AnimationPage>
      <div className="container">
        <div className="d-flex pt-5 align-items-center vh-100 text-white flex-column">
        <LazyImage  src="/not-found.png"/>
          <p className=" w-50 text-center text-wrap fs-4 text-primary d-flex align-items-center flex-column gap-1">
            Xin lỗi, trang này không tồn tại, vui lòng quay lại trang chủ
          </p>
          <button
            onClick={() => navigate(-1)}
            type="button"
            className="btn btn-secondary"
          >
            Quay lại trang chủ
          </button>
        </div>
      </div>
    </AnimationPage>
  );
}

export default NotFound;
