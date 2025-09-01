🎨 Paleta de Colores - Frontend
- 
Aplicación frontend para gestionar paletas de colores con operaciones CRUD completas, conectada a una base de datos MongoDB Atlas a través de un backend personalizado.

![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=white&style=flat)
![React-Bootstrap](https://img.shields.io/badge/-React--Bootstrap-7952B3?logo=bootstrap&logoColor=white&style=flat)
![SweetAlert2](https://img.shields.io/badge/SweetAlert2-11.7.0-orange)
![MongoDB-Atlas](https://img.shields.io/badge/MongoDB-Atlas-green)

####
🌟 Características principales
- 
- ✅ CRUD Completo: Crear, leer, actualizar y eliminar colores
- 🚫 Validación de duplicados: No se permiten nombres de colores repetidos
- 💫 Interfaz moderna: Diseño responsive con React-Bootstrap
- 📱 Experiencia de usuario: Alertas elegantes con SweetAlert2
- 🌐 Conexión backend: Comunicación con API REST personalizada
- 🚀 Deploy: Aplicación desplegada en Netlify

####
🚀 Demo en vivo
- 
- Puedes probar la aplicación directamente:
- https://creatuscolores.netlify.app/

####
🛠️ Tecnologías utilizadas
- 
Frontend

- React 18.2.0 - Framework principal
- React-Bootstrap 2.8.0 - Componentes UI
- Bootstrap Icons - Iconografía
- SweetAlert2 11.7.0 - Alertas y mensajes
- Axios - Cliente HTTP para APIs

Backend (Repositorio separado)

- Node.js + Express - Servidor API
- MongoDB Atlas - Base de datos en la nube
- Mongoose - ODM para MongoDB
- CORS - Configuración de dominios cruzados

####
>
🚀 Instalación y desarrollo local
- 
- Clona el repositorio:
````
git clone https://github.com/Lucaspozziok64/paletaColores-frontend.git
cd tu-repo-frontend
````
- Instala dependencias:
````
npm install
````

- Configura variables de entorno:
````
cp .env.example .env
# Edita .env con tus valores reales
````

- Inicia el servidor de desarrollo:
````
cp .env.example .env
npm start
````

- Abre tu navegador en:
````
http://localhost:3000
````

🌐 Deployment en Netlify
- 
Configuración en Netlify:

- Build command: npm run build
- Publish directory: build
- Environment variables: Configuradas en el dashboard de Netlify

Variables de entorno requeridas:
````
REACT_APP_API_URL=https://tu-backend.herokuapp.com/api
REACT_APP_API_TIMEOUT=5000
````

####
🤝 Contribución
- 
- Haz fork del proyecto
- Crea una rama para tu feature: git checkout -b feature/nueva-funcionalidad
- Commit tus cambios: git commit -m 'Agrega nueva funcionalidad'
- Push a la rama: git push origin feature/nueva-funcionalidad

####
👨‍💻 Autor
- 
- Lucas Figueroa
- 💼 [LinkedIn](https://linkedin.com/in/lucas-figueroa-579b0b30b)
- 📬 lukafigueroa64@gmail.com
