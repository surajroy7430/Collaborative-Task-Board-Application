import { createContext, useContext, useEffect, useState } from "react";
import { useFetch } from "../hooks/use-fetch";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const AuthContext = createContext(null);
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ childred }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("todo_token"));
  const { request, loading } = useFetch();
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      request({
        url: "/profile",
        headers: { Authorization: `Bearer ${token}` },
        showToast: false,
      }).then((res) => {
        if (res.success) {
          setUser(res.data);
        } else {
          toast.error("Failed to login");
        }
      });
    }
  }, [token]);

  const register = async (email, password) => {
    return await request({
      url: "/auth/register",
      method: "POST",
      data: { email, password },
    });
  };

  const login = async (email, password) => {
    const res = await request({
      url: "/auth/login",
      method: "POST",
      data: { email, password },
    });

    if (res.success) {
      const { token, user } = res.data;

      setToken(token);
      localStorage.setItem("todo_token", token);
      setUser(user);

      navigate("/");
    }

    return res;
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("todo_token");

    navigate("/login");
  };

  <AuthContext.Provider
    value={{ user, token, loading, register, login, logout }}
  >
    {childred}
  </AuthContext.Provider>;
};
