function validar_registro() {
    //valido el nombre
    const doom = ".com";
    let nom = document.forms["form"]["nom"].value;
    if (nom == "") {
        alert("Su nombre no puede estar vacio");
        return false;
    }
    let email = document.forms["form"]["email"].value;
    if (!email.endsWith(doom)) {
        alert("no es un dominio valido");
        return false;
    }
    let fono = document.forms["form"]["fono"].value;
    if (fono.toString().length < 8 || fono.toString().length > 9) {
        alert("numero no valido");
        return false;
    }
    let pass = document.forms["form"]["pass"].value;
    let pass2 = document.forms["form"]["pass2"].value;
    if (pass != pass2) {
        alert("las contraseñas deben ser iguales");
        return false;
    }
}
function validar_contacto() {
    let nom = document.forms["contacto"]["nom"].value;
    if (nom == "") {
        alert("Su nombre no puede estar vacio");
        return false;
    }
    let email = document.forms["contacto"]["email"].value;
    if (!email.endsWith(doom)) {
        alert("no es un dominio valido");
        return false;
    }
    let fono = document.forms["contacto"]["fono"].value;
    if (fono.toString().length < 8 || fono.toString().length > 9) {
        alert("numero no valido");
        return false;
    }
    let infoc = document.forms["contacto"]["fono"].value;
    if (infoc.length > 200) {
        alert("Maximo permitido alcanzado (200 caracteres)");
    }
}
