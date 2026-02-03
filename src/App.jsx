import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { useAuth } from "./context/AuthContext";

function App() {
  const { isAuth } = useAuth();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={isAuth ? <Dashboard /> : <Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
