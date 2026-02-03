import { useAuth } from "../context/AuthContext";

const Login = () => {
  const { login } = useAuth();

  return (
    <div className="login">
      <h2>Sign in</h2>
      <input placeholder="Email address" />
      <input type="password" placeholder="Password" />
      <button onClick={() => login("test", "test")}>Sign In</button>
    </div>
  );
};

export default Login;
