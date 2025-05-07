function guardar() {
    validar();
}

function validar() {
    let nombre = document.getElementById("id_nombre").value.trim();
    let apellido = document.getElementById("id_apellido").value.trim();
    let fechaNacimiento = document.getElementById("id_fecha_nacimiento").value;
    let email = document.getElementById("id_email").value.trim();
    let password = document.getElementById("id_password").value;

    
    if (nombre === "") {
        console.log("Error: no ha ingresado el nombre");
    } else {
        console.log("Nombre válido");
    }

    if (apellido === "") {
        console.log("Error: no ha ingresado el apellido");
    } else {
        console.log("Apellido válido");
    }

    if (fechaNacimiento === "") {
        console.log("Error: no ha ingresado la fecha de nacimiento");
    } else {
        console.log("Fecha de nacimiento válida");
    }


    if (!validarEmail(email)) {
        console.log("Error: el correo electrónico no es válido");
    } else {
        console.log("Email válido");
    }

   
    if (password.length < 3) {
        console.log("Error: la contraseña debe tener al menos 6 caracteres");
    } else {
        console.log("Contraseña válida");
    }
}

function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
} 