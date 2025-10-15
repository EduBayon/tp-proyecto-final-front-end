# Proyecto React - Clon de Whatsapp 

## Decripción 
Esta es una aplicación de chat desarrollada con **React**, que permite a los usuarios iniciar sesión, enviar y recibir mensajes en tiempo real. Incluye un sistema de **rutas protegidas** para restringir el acceso a ciertas páginas como `/help` si el usuario no está autenticado. La aplicación utiliza **Context API** para la gestión global del estado del chat.

## Funcionalidades principales
- Inicio de sesión y autenticación de usuarios.
- Envío y recepción de mensajes en tiempo real.
- Rutas protegidas para páginas privadas.
- Gestión del estado global con Context API.
- Interfaz responsiva y moderna usando CSS con **Flexbox** y **Grid**.

## Instalación y ejecución

1. Clonar el repositorio:

git clone <URL_DEL_REPOSITORIO>

2. Entrar en la carpeta del proyecto:

cd nombre-del-proyecto

3. Instalar las dependencias: 
npm install

4. Ejecutar la aplicación en modo desarrollo:
npm run dev

5. Abrir en el navegador:
http://localhost:5173

/src
  /components     # Componentes reutilizables
  /context        # Context API para el chat
  /router         # Configuración de rutas
  /views          # Páginas principales
  index.css       # Estilos globales
  main.jsx        # Entrada principal de la app

# Posibles mejoras a futuro

Integrar WebSockets para comunicación en tiempo real más eficiente.

Implementar autenticación con JWT para mayor seguridad.

Añadir notificaciones de nuevos mensajes.

Optimizar el diseño para dispositivos móviles.

Crear un sistema de grupos de chat y mensajes privados.

Mejorar la gestión de errores y mensajes informativos al usuario.

# Tecnologías utilizadas

React 18

Vite

Context API

CSS3 (Flexbox y Grid)

JavaScript ES6+

# Autor

Eduardo Bayon