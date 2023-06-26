// Creo las variables
var lista = document.getElementById("lista");
var nuevaTarea = document.getElementById("nueva");
// Llamo a la funcion
nuevaTarea.addEventListener("onclick", agregar);
// FUNCIONES
function agregar() {
    var nuevaLista = nuevaTarea.value; //nuevaLista toma el valor ingresado.
    if (nuevaLista != null && nuevaLista != "") {
        var newElement = document.createElement("li"); // Se crea un element "li"
        newElement.textContent = "".concat(nuevaLista); //Ese nuevo elemento tiene el valor ingresado en "nuevaLista"
        lista.appendChild(newElement); //appendChild va agregando ese elemento.
        nuevaTarea.value = ""; //Dejando el campo en blanco para volver a ingresar otra tarea.
    }
}
/*La condicion != null verifica si la variable "nuevaLista" no es nula y no esta vacia al mismo tiempo.
Si "nuevaLista" tiene un valor distinto,la condicion es verdadera
!="" verifica que la variable no esta vacia*/
