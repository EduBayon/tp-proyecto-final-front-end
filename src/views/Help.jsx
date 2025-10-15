
import React from "react";

const Help = () => {
  return (
    <main style={{ padding: 24, maxWidth: 980, margin: "0 auto" }}>
      <h1>Ayuda — Documentación del Chat</h1>

      <section style={{ marginTop: 18 }}>
        <h2>Funcionamiento general</h2>
        <p>
          Este proyecto es un clon simple de un chat web. Los usuarios deben
          iniciar sesión con una contraseña para poder acceder a <code>/chat</code>.
          La ruta <code>/chat</code> está protegida; si el usuario no está
          autenticado será redirigido al login.
        </p>
      </section>

      <section style={{ marginTop: 18 }}>
        <h2>Tecnologías utilizadas</h2>
        <ul>
          <li>React (v18+)</li>
          <li>React Router DOM (v6+)</li>
          <li>Context API (ChatContext)</li>
          <li>LocalStorage para persistencia simple</li>
          <li>Vite (o Create React App según configuración)</li>
        </ul>
      </section>

      <section style={{ marginTop: 18 }}>
        <h2>Posibles mejoras futuras</h2>
        <ul>
          <li>Autenticación real con backend (JWT / sessions).</li>
          <li>Mensajería en tiempo real con WebSocket / Socket.IO.</li>
          <li>Mejoras en accesibilidad y tests unitarios.</li>
          <li>Temas (dark / light) completos con CSS variables.</li>
        </ul>
      </section>
    </main>
  );
};

export default Help;
