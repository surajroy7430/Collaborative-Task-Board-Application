import { Routes, Route } from "react-router-dom";
import Register from "../auth/Register";
import Login from "../auth/Login";
import PublicRouter from "./PublicRouter";
import PrivateRouter from "./PrivateRouter";
import AdminDashboard from "../pages/AdminDashboard";
import Dashboard from "../pages/Dashboard";

const appRoutes = () => {
  return (
    <Routes>
      <Route element={<PublicRouter />}>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Route>

      <Route element={<PrivateRouter roles />}>
        <Route path="/admin" element={<AdminDashboard />} />
      </Route>

      <Route element={<PrivateRouter roles />}>
        <Route path="/" element={<Dashboard />} />
      </Route>

      <Route path="*" element={<Login />} />
    </Routes>
  );
};

export default appRoutes;
