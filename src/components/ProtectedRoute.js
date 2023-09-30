// ProtectedRoute.js

import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
const ProtectedRoute = ({ toRedirect = "/tai-khoan/yeu-cau-dang-nhap", children }) => {
  const { user } = useSelector((store) => store.auth);
  if (!user) {
    return <Navigate to={toRedirect} />;
  }
  return children;
};

export default ProtectedRoute;

