# Ejecución Docker
Solo ejecutar docker-compose up y esperar unos segundos
# NOTA, SI EL PRIMER docker-compose up no funciona, favor de bajar el contenedor y volverlo ejecutar, ya que es necesario que primero se cargue la DB y luego se ejecute la app de NODE (Cosas raras de docker :C)
# Ejecución normal
Crear base de datos llamada: segundo_parcial
Asignar usuario llamado: monoABC
Contraseña: password123
Modificar el archivo ./database/config/config.js
    En el parametro "host", cambiar de "dbExamen" (nombre del contenedor de docker) a 127.0.0.1
Ejecutar La app
    node app.js

# RECOMENDACIÓN USAR DOCKER