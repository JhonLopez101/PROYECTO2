// variables 
const precioEscobaDura = 6000;
const precioEscobaSuave = 8000;
const precioCepillo = 10000;

const tipoDuro = 1;
const tipoSuave = 2;
const tipoCepillo = 3;

const precioSintetico = 2000;
const precioNatural = 4000;

const materialSintetico = 1;
const materialNatural = 2;

const precioMango = 2000;
const precioGancho = 500;

const adicionMango = 1;
const adicionGancho = 2;
const noDeseoAdicion = 3;

let cantidad;
let precioTotal;

//Funciones
let seleccionEscoba = parseInt(prompt(`Digite un numero entre 1 y 3 del tipo de escoba que desea pedir siendo: \n 1: Escoba Dura $6.000 \n 2: Escoba Suave $8.000 \n 3: Cepillo $10.000`));

switch (seleccionEscoba) {
    case tipoDuro:
        precioTotal = precioEscobaDura;
        break;
    case tipoSuave:
        precioTotal = precioEscobaSuave;
        break;
    case tipoCepillo:
        precioTotal = precioCepillo;
        break;
    default:
        alert(`Hubo algo mal en su proceso, por favor digite un numero correcto sea 1, 2 o 3`);
        break;
}

let seleccionMaterial = parseInt(prompt(`Digite un numero que sea 1 o 2 siendo: \n 1: Material Sintetico $2.000 \n 2: Material Natural $4.000`));

switch (seleccionMaterial) {
    case materialSintetico: 
        precioTotal += precioSintetico;
        break;
    case materialNatural:
        precioTotal += precioNatural;
        break;
    default:
        alert(`tenemos un problema con tu dijitacion intenta de nuevo, por favor digite un numero correcto sea 1 o 2`);
        break;
}

let seleccionAdicion = parseInt(prompt(`Digite un numero del 1 al 3 siendo: \n 1: Adicion de Mango largo $2.000 \n 2: Adicion de gancho en la punta $500 \n 3: No deseo adicion`))

switch (seleccionAdicion) {
    case adicionMango:
        precioTotal += precioMango;
        break;
    case adicionGancho:
        precioTotal += precioGancho;
        break;
    case noDeseoAdicion:
        precioTotal;
        break;
    default:
        alert(`Hubo algo mal en su proceso, por favor digite un numero correto que este entre 1 y 3`);
        break;
}

cantidad = parseInt(prompt(`Seleccione la cantidad de escobas que desea se pueden min: 3 y max: 30`))

if(cantidad >= 3 && cantidad <= 30) {
    precioTotal *= cantidad;
    alert(`El precio total de su compra es de $${precioTotal}, cantidad total ${cantidad}, Gracias por su compra`);
} else {
    alert(`La cantidad que ingreso fue ${cantidad} recuerde que su numero debe estar comprendido en el rango 3-30`);
}

