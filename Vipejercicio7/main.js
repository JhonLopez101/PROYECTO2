function venderBoletas() {
   
    var precios = {
        "general": 50000,
        "preferencial": 150000,
        "vip": 300000
    };

    var capacidades = {
        "general": 100,
        "preferencial": 50,
        "vip": 20
    };

   
    var cantidadBoletas = parseInt(prompt("Ingrese la cantidad de boletas que desea (máximo 5 por transacción):"));
    if (isNaN(cantidadBoletas) || cantidadBoletas < 1 || cantidadBoletas > 5) {
        alert("La cantidad de boletas ingresada no es válida.");
        return;
    }

    var localidad = prompt("Seleccione la localidad deseada (General, Preferencial, VIP):").toLowerCase();
    if (!(localidad in precios)) {
        alert("La localidad seleccionada no es válida.");
        return;
    }

    if (cantidadBoletas > capacidades[localidad]) {
        alert("Lo sentimos, no hay suficientes boletas disponibles en la localidad seleccionada.");
        return;
    }

 
    var subtotal = precios[localidad] * cantidadBoletas;
    var impuestos = subtotal * 0.1;
    var cargoServicio = 5000 * cantidadBoletas;
    var totalPagar = subtotal + impuestos + cargoServicio;

    var mensaje = "Desglose de cobros:\n";
    mensaje += "Subtotal: $" + subtotal + "\n";
    mensaje += "Impuestos (10%): $" + impuestos + "\n";
    mensaje += "Cargo por servicio: $" + cargoServicio + "\n";
    mensaje += "Total a pagar: $" + totalPagar;
    alert(mensaje);
}


venderBoletas();
