

function confirmar(event: Event) {
    let nombre: string = (<HTMLInputElement>document.getElementById("nombre completo")).value;
    let apellido: string = (<HTMLInputElement>document.getElementById("apellido")).value;
    let email: string = (<HTMLInputElement>document.getElementById("email")).value;
    let usuario: string = (<HTMLInputElement>document.getElementById("usuario")).value;
    let contraseña: string = (<HTMLInputElement>document.getElementById("contraseña")).value;
    console.log(nombre, apellido, email, usuario, contraseña);
    if (nombre === "" || apellido === "" || email === "" || usuario === "" || contraseña === "") {
        event.preventDefault();
        alert("Debes llenar todos los campos");
    }
}
