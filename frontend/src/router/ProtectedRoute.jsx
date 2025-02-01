import { Navigate, Outlet, useLocation } from "react-router-dom";
import { getContextData } from "../context/AuthContexProvider";

const ProtectedRoute = () => {
  const { user } = getContextData();
  const path = useLocation();

  if (path.pathname.includes("/dashboard")) {
    return user ? <Outlet /> : <Navigate to={"/"} replace={true} />;
  }

  return !user ? <Outlet /> : <Navigate to={"/"} replace={true} />;
};

export default ProtectedRoute;
