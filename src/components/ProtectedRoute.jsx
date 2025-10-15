import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  if (!isLoggedIn) {
    console.warn("Intento de acceso sin login");
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
