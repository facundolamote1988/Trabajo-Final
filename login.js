
function confirmar(event) {
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
