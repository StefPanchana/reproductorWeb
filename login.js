//======================================================================================================//
//                          Inicio de seción
//======================================================================================================//

function validarFormulario() {
    var usuario = document.getElementById("usuario").value;
    var contrasena = document.getElementById("contrasena").value;

    // Verificar si el usuario y la contraseña coinciden
    if (usuario.trim() === "cursos@correo.com" && contrasena.trim() === "curso123") {
        // Redireccionar a la página del reproductor
        window.location.href = "reproductor.html";
    } else {
        // Mostrar mensaje de error si no ingreso los datos correctos
        alert("Usuario o contraseña incorrectos. Por favor, verifica tus credenciales.");
    }
}