# Ejecución Docker
Solo ejecutar docker-compose up y esperar unos segundos

# Ejecución normal
Crear base de datos llamada: segundo_parcial
Asignar usuario llamado: monoABC
Contraseña: password123
Modificar el archivo ./database/config/config.js
    En el parametro "host", cambiar de "dbExamen" (nombre del contenedor de docker) a 127.0.0.1
Ejecutar La app
    node app.js

# RECOMENDACIÓN USAR DOCKER