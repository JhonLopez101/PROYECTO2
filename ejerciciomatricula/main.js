// Variables 
const matricula = 7000000;

const valorOpcion1 = matricula - matricula * 0.05;
const valorOpcion2 = (matricula / 2) + matricula * 0.02;
const valorOpcion3 = (matricula / 3) + matricula * 0.02;

// Funcionamiento
let metodoDePago = parseInt(prompt(`Ingrese un digito del 1 al 3 siendo: \n 1: Pago total de matricula \n 2: Pago de la matricula a 2 cuotas \n 3: Pago total de la matricula a 3 cuotas`))

if(metodoDePago > 3 || metodoDePago < 1) {
    alert(`Ingrese un metodo de cotizacion valido`)
} else {
    switch(metodoDePago) {
        case 1:
            alert(`El valor total a pagar de la matricula es de $${valorOpcion1} y obtuviste un descuento del 5%`)
            break;
        case 2:
            alert(`El valor total a pagar de la matricula son de 2 cuotas de $${valorOpcion2} se le agregan a las cuotas intereses del 2%`)
            break;
        case 3:
            alert(`El valor total a pagar de la matricula son de 3 cuotas de $${Math.round(valorOpcion3)} se le agregan a las cuotas intereses del 2%`)
            break;
        default: 
            alert(`La opcion de pago registrada es invalida`)
            break;
    } 
}




