import Sidebar from "../components/Sidebar";
import Chat from "../components/Chat";

export default function Messages() {
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    window.location.href = "/"; // redirige al login
  };

  return (
    <div className="messages-container">
      {/* Sidebar */}
      <Sidebar />

      {/* Chat principal */}
      <Chat />

      {/* Botón de cerrar sesión */}
      <button className="logout-btn" onClick={handleLogout}>
        Cerrar sesión
      </button>
    </div>
  );
}
