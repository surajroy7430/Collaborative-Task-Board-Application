import { useAuth } from "../context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

const PublicRouter = () => {
  const { token } = useAuth();

  if (token) return <Navigate to="/" replace />;

  return <Outlet />;
};

export default PublicRouter;
