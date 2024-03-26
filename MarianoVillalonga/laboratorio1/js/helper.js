function saludar() {
    const nombre = document.getElementById("nombre").value.trim();
    const mensajeDiv = document.getElementById("mensaje");

    if (nombre === "") {
        mensajeDiv.innerHTML = "Debes ingresar tu nombre por favor.";
    } else {
        mensajeDiv.innerHTML = "¡Hola, " + nombre + "! Soy tu asistente virtual y estoy para responder tus consultas.";
    }
}
