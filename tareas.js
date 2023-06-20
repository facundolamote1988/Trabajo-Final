// Creo las variables
var lista = document.getElementById("lista");
var nuevaTarea = document.getElementById("nueva");
// Llamo a la funcion
nuevaTarea.addEventListener("onclick", agregar);
// FUNCIONES
function agregar() {
    var nuevaLista = nuevaTarea.value;
    if (nuevaLista != null && nuevaLista != "") {
        var newElement = document.createElement("li");
        newElement.textContent = "".concat(nuevaLista);
        lista.appendChild(newElement);
        nuevaTarea.value = "";
    }
}
//nuevaLista toma el valor ingresado, se crea un element "li"
//ese nuevo elemento tiene el valor ingresado en "nuevaLista"
//appendChild va agregando ese elemento dejando el campo en blanco para volver a ingresar otra tarea.
