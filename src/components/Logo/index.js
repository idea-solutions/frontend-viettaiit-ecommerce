import { Link } from "react-router-dom";
import "./logo.scss";
function Logo({ size }) {
  const rule = "client";
  return (
    <Link
      to={rule === "client" ? "/" : "/admin/dash-board"}
      className={`logo d-block ${size ? size : "fs-4"} text-white rounded`}
    >
      Sudes Phone
    </Link>
  );
}

export default Logo;
