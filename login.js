//FUNCION QUE CONFIRMA ACCESO Y PASA AL GESTOR DE TAREAS. (captura los datos x consola)
function confirmar(event) { //EVENT.PREVENT,NO DEJA ACCESDER SIN TODOS LOS CAMPOS COMPLETADOS.
    var nombre = document.getElementById("nombre completo").value;
    var apellido = document.getElementById("apellido").value;
    var email = document.getElementById("email").value;
    var usuario = document.getElementById("usuario").value;
    var contraseña = document.getElementById("contraseña").value;
    console.log(nombre, apellido, email, usuario, contraseña);
    if (nombre === "" || apellido === "" || email === "" || usuario === "" || contraseña === "") {
        event.preventDefault();
        alert("Debes llenar todos los campos");
    }
}
