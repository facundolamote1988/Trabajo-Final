// Creo las variables
let lista: HTMLInputElement = <HTMLInputElement>document.getElementById("lista");
let nuevaTarea: HTMLInputElement = <HTMLInputElement>document.getElementById("nueva");


// Llamo a la funcion
nuevaTarea.addEventListener("onclick", agregar);

// FUNCIONES
function agregar() {
    const nuevaLista = nuevaTarea.value //nuevaLista toma el valor ingresado.
    if (nuevaLista != null && nuevaLista != "") {
        const newElement = document.createElement("li");// Se crea un element "li"
        newElement.textContent = `${nuevaLista}`;//Ese nuevo elemento tiene el valor ingresado en "nuevaLista"
        lista.appendChild(newElement);
        nuevaTarea.value = "";//appendChild va agregando ese elemento dejando el campo en blanco para volver a ingresar otra tarea.

    } 
}



