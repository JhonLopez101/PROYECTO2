// Variables
const precioNovedades = 500;
const precioLiteratura = 100;
const precioAcademicos = 0;

const libroNovedades = 1;
const libroLiteratura = 2;
const libroAcademicos = 3;

let libroElegido;
let cantidadLibros;
let cantidadDias;
let valorTotal;

// Funciones
libroElegido = parseInt(prompt(`Elija el tipo de libro que desea, siendo: \n1. Novedades ($500 por día) \n2. Literatura ($100 por día) \n3. Académicos (Gratuitos)`));
if (libroElegido < 1 || libroElegido > 3){ // valida que ingreso anterior sea correctok
    alert(`Opción inválida.`);
} else if( libroElegido === libroNovedades){
    cantidadLibros = parseInt(prompt(`Ingrese el valor de libros que desea. (1-5)`));
    if (cantidadLibros < 1 || cantidadLibros > 5){
        alert(`Opción inválida.`);
    } else{
        cantidadDias = parseInt(prompt(`Ingrese el número de días que lo/s llevará. (1-30)`));
        if (cantidadDias < 1 || cantidadDias > 30){
            alert(`Opción inválida`);
        } else if(cantidadDias > 10){
                valorTotal = (precioNovedades * cantidadDias * cantidadLibros) - ((precioNovedades * cantidadDias * cantidadLibros)*0.1);
                alert(`El valor total de su préstamo es de $${valorTotal}.`);
        } else{
            valorTotal = precioNovedades * cantidadDias * cantidadLibros;
            alert(`El valor total de su préstamo es de $${valorTotal}.`);
        }
        }   
    } else if(libroElegido === libroLiteratura){
        cantidadLibros = parseInt(prompt(`Ingrese el valor de libros que desea. (1-5)`));
        if (cantidadLibros < 1 || cantidadLibros > 5){
            alert(`Opción inválida.`)
        } else{
            cantidadDias = parseInt(prompt(`Ingrese el número de días que lo/s llevará. (1-30)`));
            if (cantidadDias < 1 || cantidadDias > 30){
                alert(`Opción inválida`);
            } else if(cantidadDias > 10){
                valorTotal = (precioLiteratura * cantidadDias * cantidadLibros) - ((precioLiteratura * cantidadDias * cantidadLibros)*0.1);
                alert(`El valor total de su préstamo es de $${valorTotal}.`);
            } else{
                valorTotal = (precioLiteratura * cantidadDias * cantidadLibros);
                alert(`El valor total de su préstamo es de $${valorTotal}.`);
            }
            }   
    } else if(libroElegido === libroAcademicos){
        cantidadLibros = parseInt(prompt(`Ingrese el valor de libros que desea. (1-5)`));
        if (cantidadLibros < 1 || cantidadLibros > 5){
            alert(`Opción inválida.`)
        } else{
            cantidadDias = parseInt(prompt(`Ingrese el número de días que lo/s llevará. (1-30)`));
            if (cantidadDias < 1 || cantidadDias > 30){
                alert(`Opción inválida`);
            } else{
                valorTotal = precioAcademicos * cantidadDias * cantidadLibros;
                alert(`El valor total de su préstamo es de $${valorTotal}.`);
            }
            }   
    }
    
    
    



