// Variables 
const precioServicioBasico = 2000;
const precioServicioPremium = 4000;

const servicioBasico = 1;
const servicioPremium = 2;

let servicioElegido; 
let numeroPiezas;
let valorTotal; 

// Funcion del programa 
servicioElegido = parseInt(prompt(`¿Que servicio desea elegir? \n 1-Basico: $2.000 \n 2-Premium: $4.000`));
numeroPiezas = parseInt(prompt(`Ingrese el numero de piezas que necesita para el servicio min: 1 - max: 20`))
    
if (numeroPiezas < 1 || numeroPiezas > 20) {
        alert(`Ingrese un numero comprendido entre 1 - 20`);
    } else {
       alert(`Estamos cotizando tu servicio...`);   
       switch(servicioElegido) {
        case servicioBasico:
                valorTotal = precioServicioBasico * numeroPiezas;
                alert(`Su valor total a pagar es de $${valorTotal}`)
            break;
        case servicioPremium:
                valorTotal = precioServicioPremium * numeroPiezas;
                alert(`Su valor total a pagar es de $${valorTotal}`)
            break;
        default:
            alert(`Algo estuvo mal en su proceso de cotización. Por favor repita el proceso`)
        } 
    };

