// Creo las variables
let lista: HTMLInputElement = <HTMLInputElement>document.getElementById("lista");
let nuevaTarea: HTMLInputElement = <HTMLInputElement>document.getElementById("nueva");


// Llamo a la funcion
nuevaTarea.addEventListener("onclick", agregar);

// FUNCIONES
function agregar() {
    const nuevaLista = nuevaTarea.value
    if (nuevaLista != null && nuevaLista != "") {
        const newElement = document.createElement("li");
        newElement.textContent = `${nuevaLista}`;
        lista.appendChild(newElement);
        nuevaTarea.value = "";
    }
}
//nuevaLista toma el valor ingresado, se crea un element "li"
//ese nuevo elemento tiene el valor ingresado en "nuevaLista"
//appendChild va agregando ese elemento dejando el campo en blanco para volver a ingresar otra tarea.


