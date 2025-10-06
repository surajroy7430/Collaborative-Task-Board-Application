import React from "react";
import { useAuth } from "../context/AuthContext";

const Register = () => {
  const { register } = useAuth();

  return (
    <form onSubmit={() => register()} className="max-w-sm mx-auto p-6">
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

      <Button type="submit">Register</Button>
    </form>
  );
};

export default Register;
