const buttonEnviarMensaje = document.getElementById('enviarMensaje');

buttonEnviarMensaje.addEventListener('click', (e) => {
    const title_error = document.getElementById('error-message');
    if(e.target.form.nombre.value == "") {
        title_error.innerHTML = "Error - El nombre esta vacio"
        title_error.style.display = 'block';
        e.preventDefault();
        return;
    }

    if(e.target.form.correo.value == "") {
        title_error.innerHTML = "Error - El Correo esta vacio"
        title_error.style.display = 'block';
        e.preventDefault();
        return;
    }

    if(e.target.form.mensaje.value == "") {
        title_error.innerHTML = "Error - El Mensaje esta vacio"
        title_error.style.display = 'block';
        e.preventDefault();
        return;
    }

    
    
});