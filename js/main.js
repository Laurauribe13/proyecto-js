function mensaje() {
    alert("Bienvenido al programa Salud-Integral, para saber si es apto para participar diligencie los siguientes datos");
}
mensaje();
let nombre = prompt("Ingrese su nombre:");
let contacto = parseInt(prompt("Ingrese su número de contacto:"));
let sexo = prompt("Ingrese su sexo:");
let edad = parseInt(prompt("Ingrese su edad: (Para continuar debe tener o ser mayor de 18 años)"));

while(edad >= 18) {
    let presionArterialSistolica = parseInt(prompt("Ingrese su presión arterial sistólica:"));
    let presionArterialDiastolica = parseInt(prompt("Ingrese su presión arterial diastólica:"));
    if (presionArterialSistolica >= 130 || presionArterialDiastolica >= 80) {
        alert("Diagnóstico presuntivo: Hipertensión, cumples con los criterios para participar en el programa: ADMITIDO");
}
    else if (presionArterialSistolica >= 120 && presionArterialDiastolica < 80) {
        alert("Diagnóstico presuntivo: Presión arterial elevada, has sido seleccionado para los estudios de prevención");
}
    else {
        alert("Diagnóstico presuntivo: Presión arterial normal, no cumples con los criterios para hacer parte del programa, pero si de los talleres de promoción y prevención");
}
    alert("Gracias por su información, lo contactaremos muy pronto " + nombre);
    break;
}





