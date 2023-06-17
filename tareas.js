//Creo las variables
// let nueva = document.getElementById("nueva");
let lista = document.getElementById("lista");

//Llamo a la funcion
nuevaTarea.addEventListener("onclick", agregar);
//FUNCIONES
function agregar(){
    
    let nuevaTarea = document.getElementById("nueva").value;
    lista.textContent = `${nuevaTarea}`;
    lista.appendChild(nuevaTarea);
    lista = document.createComment("li");
    nuevaTarea.appendChild(lista);
    // nuevaTarea = document.createElement("li");
    // nuevaTarea.value = "";
}
