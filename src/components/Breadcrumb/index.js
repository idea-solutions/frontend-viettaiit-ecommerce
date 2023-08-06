import { Link } from "react-router-dom";
import { clientRoutes } from "../../routes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

import "./breadcrumb.scss";
function Breadcrumb({ title }) {
  return (
    <div className="container-fuild breadcrumb__breadcrumb">
      <div className="container ">
        <Link
          to={clientRoutes.home}
          className="breadcrumb__fs-13 hover-color-secondary text-decoration-none"
        >
          Trang chủ
        </Link>
        <FontAwesomeIcon
          className="px-3 breadcrumb__fs-13"
          icon={faAngleRight}
        />
        <span className="text-secondary breadcrumb__fs-13">{title}</span>
      </div>
    </div>
  );
}

export default Breadcrumb;
