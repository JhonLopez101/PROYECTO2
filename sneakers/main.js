const precioBaseC = 500000;
const precioBaseR = 800000;
const precioBaseB = 1000000; 

const opcion_C = 1;
const opcion_R = 2;
const opcion_B = 3;

let Talla;
let cantidad;
let precioTotal;
let descuento; 

//funciones
let tenisSeleccionado = parseInt(prompt("seleccione el tipo de sneakers que desea \n1. sneakers clasicos \n2. sneakers running \n3. sneakers basketball"));

if(tenisSeleccionado < 1 || tenisSeleccionado > 3) {
    alert ("seleccione una opccion correcta")
} else {
     Talla = parseInt(prompt("ingrese la talla que desea tenemos desde 35 a 44"));
    if (Talla <35 || Talla >44) {
        alert ("Porfavor seleccione una talla valida")
    } else {
        cantidad = parseInt(prompt("Puedes seleccionar varios pares apartir de 3 pares tienes un descuento pero solo puedes llevar como maximo 5"))
        if (cantidad <1 || cantidad >5) {
        alert ("no tenemos stock para la cantidad de sneakers que scojiste")  
        }else{
            if (cantidad >= 3) {
                descuento = 0.1
            }else{
                descuento = 0
            } switch (tenisSeleccionado){
                case opcion_C:
          precioTotal = precioBaseC * cantidad - ((precioBaseC * descuento) * cantidad);
          alert ("gracias por preferirnos el precio total a pagar seria de $${precioTotal} elegiste ${cantidad} sneakers y tu talla es ${Talla} Gracias por tu compra!")
               break;
               case opcion_R:
                precioTotal = precioBaseR * cantidad - ((precioBaseR * descuento) * cantidad);
                alert ("gracias por preferirnos el precio total a pagar seria de $${precioTotal} elegiste ${cantidad} sneakers y tu talla es ${Talla} Gracias por tu compra!")
                case opcion_B:
                precioTotal = precioBaseB * cantidad - ((precioBaseB * descuento) * cantidad);
                alert ("Gracias por preferirnos el precio total a pagar seria de $${precioTotal} elegiste ${cantidad} sneakers y tu talla es ${Talla} gracias por tu compra!")
                default: ("vuelve a intentarlo algo salio mal, si tienes alguna duda avisa a nuestro servicio tecnico")
            }
            

        }
    }
}