function mostrarMensaje() {
    alert("Gracias por visualizar mi hoja de vida");
}

document.getElementById("formulario-contacto").addEventListener("submit", function(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const mensaje = document.getElementById("mensaje").value;

    const destinatario = "nicolas.quitianr@uniagustiniana.edu.co";
    const asunto = encodeURIComponent("Mensaje desde el formulario de contacto");
    const cuerpo = encodeURIComponent(`Nombre: ${nombre}\nCorreo: ${email}\n\nMensaje:\n${mensaje}`);

    window.location.href = `mailto:${destinatario}?subject=${asunto}&body=${cuerpo}`;
});
