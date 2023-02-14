class Invitado {
    constructor(nombre, identificacion, edad) {
        this.nombre = nombre;
        this.identificacion = identificacion;
        this.edad = edad;
    }
}

const invitado1 = new Invitado ("Natalia Uribe", 1128478566, 30);
const invitado2 = new Invitado ("Mery Ruiz", 43550247, 50);
const invitado3 = new Invitado ("Sebastian Patiño", 1152197180, 33);
const invitado4 = new Invitado ("Mateo Naranjo", 1216716570, 23);

const arrayInvitados = [invitado1, invitado2, invitado3, invitado4];

console.log(arrayInvitados);

class Regalo {
    constructor (producto, marca, referencia, precio) {
        this.producto = producto;
        this.marca = marca;
        this.referencia = referencia;
        this.precio = Math.round(precio);
    }
}

const regalo1 = new Regalo ("Nevera", "Samsung", 2140, 925.890);
const regalo2 = new Regalo ("Vajilla", "Ambiente Gourmet", 3098, 695.785);
const regalo3 = new Regalo ("Televisor", "LG", 2345, 745.999);
const regalo4 = new Regalo ("Sábanas de 1000 hilos", "Brissa", 5673, 898.996);

const arrayRegalos = [regalo1, regalo2, regalo3, regalo4];

console.log(arrayRegalos);

function opciones() {
    alert("Bienvenido a The Gift List, ¡el lugar perfecto para elegir el mejor obsequio para ese tan importante!");
    let elegir = parseInt(prompt("¿Qué deseas hacer el día de hoy? Seleccione una opción: \n 1) Consultar un invitado \n 2) Añadir un invitado \n 3) Agregar un regalo \n 4) Eliminar un regalo \n 5) Salir"));
    return elegir;
}

function consultarInvitado() {
    let identificacion = parseInt(prompt("Ingrese el número de identificación del invitado:"));
    let invitado = arrayInvitados.find(invitado => invitado.identificacion === identificacion);
    console.log(invitado);
}

function nuevoInvitado() {
    let nombre = prompt("Ingrese el nombre del nuevo invitado:");
    let identificacion = parseInt(prompt("Ingrese el número de identificación del nuevo invitado:"));
    let edad = parseInt(prompt("Ingrese su edad: (Para continuar debe tener o ser mayor de 18 años)"));
    while(edad >=18) {
        if(edad<18) {
            alert("Como eres menor de edad, No puedes continuar con el registro");
        }
        else {
            alert("El nuevo invitado se ha sido añadido exitosamente");
        }
        break;
    }
    let invitado = new Invitado(nombre, identificacion, edad);
    arrayInvitados.push(invitado);
    console.log(arrayInvitados);
}

function agregarRegalo() {
    let producto = prompt("Ingrese el nombre del producto:");
    let marca = prompt("Ingrese la marca del producto:");
    let referencia = parseInt(prompt("Ingrese la referencia del producto:"))
    let precio = parseInt(prompt("Ingresar el precio del producto que desea agregar:"))
    while(isNaN(precio)){
        precio = parseInt(prompt("El precio no es valido, por favor vuelva a ingresarlo:"));
    }
    console.log(producto, marca, referencia, precio);
    alert("El producto " + producto + " de la marca " + marca + " referencia " + referencia + " ingresa al sistema con el siguiente precio (IVA incluido) " + precio * 1.19 + " pesos colombianos ");
}

function eliminarRegalo() {
    let referencia = parseInt(prompt("Ingrese la referencia del producto:"));
    let regalo = arrayRegalos.find( regalo => regalo.referencia === referencia);
    let indice = arrayRegalos.indexOf(regalo);
    arrayRegalos.splice(indice, 1);
    console.log(arrayRegalos);
}

function salir() {
    alert("Gracias por visitar The Gift List, esperamos que vuelvas pronto");
}


let elegir = opciones();

switch(elegir) {
    case 1:
        consultarInvitado();
        break;
    case 2:
        nuevoInvitado();
        break;
    case 3:
        agregarRegalo();
        break;
    case 4:
        eliminarRegalo();
        break;
    case 5:
        salir();
        break;
    default:
        alert("Esta opción no es válida, ingrese nuevamente")
        break;
}