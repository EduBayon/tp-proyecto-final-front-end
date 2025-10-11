import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Login = () => {
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const PASS = "pepe123";

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn === "true") {
      navigate("/chat");
    }
  }, [navigate]);

  const validatePassword = () => {
    setMessage("");
    setError("");

    if (!password) {
      setError("Por favor ingrese una contraseña.");
      return;
    }

    if (password === PASS) {
      localStorage.setItem("isLoggedIn", "true");
      setMessage("Contraseña válida, serás redirigido...");
      setTimeout(() => {
        navigate("/chat");
      }, 1500);
    } else {
      setError("Contraseña inválida, inténtelo nuevamente.");
      setPassword("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validatePassword();
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <main className="login-main">
      <img width={100} src={logo} alt="logo de whatsapp" />
      <h1>Clon de Whatsapp 🎉</h1>

      <form onSubmit={handleSubmit}>
        <label>Contraseña de acceso</label>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <input
            placeholder="Ingrese la contraseña"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <button
            type="button"
            onClick={handleShowPassword}
            style={{ cursor: "pointer" }}
          >
            <i className="fa fa-eye" aria-hidden="true"></i>
          </button>
        </div>

        <button type="submit" style={{ marginTop: "10px" }}>
          Acceder
        </button>

        {message && <p style={{ color: "green" }}>{message}</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>

      <p className="text-info">Acceso restringido • Contenido privado</p>
    </main>
  );
};

export { Login };
