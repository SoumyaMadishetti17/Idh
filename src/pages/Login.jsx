import { useAuth } from "../context/AuthContext";
import './Login.css'

const Login = () => {
  const { login } = useAuth();

  return (
    <div className="idh-bg">
      <div className="idh-card">
        <h1 className="idh-logo">India Data Hub</h1>
        <p className="idh-tagline">
          Secure access to your analytics workspace
        </p>

        <input type="email" placeholder="Email address" />
        <input type="password" placeholder="Password" />

        <button onClick={() => login("test", "test")}>
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Login;
