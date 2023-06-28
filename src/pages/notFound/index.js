import { Link } from "react-router-dom";
import defaultRoutes from "../../assets/defaultRoutes";
import { Image } from "react-bootstrap";
import AnimationPage from "../../components/AnimationPage";
function NotFound() {
  return (
    <AnimationPage>
      <div className="container-fuild">
        <div className="d-flex pt-5 align-items-center vh-100 text-white flex-column">
          <Image src="/not-found.png" rounded />
          <p className=" w-50 text-center text-wrap fs-4 text-primary d-flex align-items-center flex-column gap-1">
            Xin lỗi, trang này không tồn tại, vui lòng quay lại trang chủ
          </p>
          <Link
            to={defaultRoutes.dashboard}
            type="button"
            className="btn btn-secondary"
          >
            Quay lại trang chủ
          </Link>
        </div>
      </div>
    </AnimationPage>
  );
}

export default NotFound;
