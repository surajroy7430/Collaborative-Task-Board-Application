import { useAuth } from "../context/AuthContext";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";

const Login = () => {
  const { login } = useAuth();

  return (
    <form onSubmit={() => login()} className="max-w-sm mx-auto p-6">
      <div className="mb-3">
        <label className="font-medium">
          Email:
          <Input placeholder="Enter your email" type="email" />
        </label>
      </div>
      <div className="mb-3">
        <label className="font-medium">
          Password:
          <Input placeholder="Enter your password" type="password" />
        </label>
      </div>

      <Button type="submit">Login</Button>
    </form>
  );
};

export default Login;
