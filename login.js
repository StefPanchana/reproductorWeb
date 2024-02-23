//======================================================================================================//
//                          Inicio de seción
//======================================================================================================//

function validarFormulario() {
    var usuario = document.getElementById("usuario").value;
    var contrasena = document.getElementById("contrasena").value;

    if ((usuario.trim() === "cursos@correo.com" && contrasena.trim() === "curso123") ||
        (usuario.trim() === "reproductor@urmusic.com" && contrasena.trim() === "musica10")) {
        // Redireccionar a la página del reproductor
        window.location.href = "reproductor.html";
    } else {
        // Mostrar mensaje de error si ingresa datos incorrectos
        alert("Usuario o contraseña incorrectos. Por favor, verifica tus credenciales.");
    }
}