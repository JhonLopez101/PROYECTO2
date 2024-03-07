function apostarEnCarrera() {

    var carreras = {
        "Carrera 1": {
            "Piloto A": 1.5,
            "Piloto B": 2.3,
            "Piloto C": 1.8
        },
        "Carrera 2": {
            "Piloto X": 2.0,
            "Piloto Y": 1.7,
            "Piloto Z": 3.1
        }
    };

    var mensajeCarreras = "Carreras disponibles:\n";
    for (var carrera in carreras) {
        mensajeCarreras += "- " + carrera + "\n";
    }
    var carreraSeleccionada = prompt(mensajeCarreras + "Seleccione la carrera en la que desea apostar: ");


    if (!(carreraSeleccionada in carreras)) {
        alert("La carrera seleccionada no es válida.");
        return;
    }

   
    var tipoApuesta = prompt("Seleccione el tipo de apuesta (Ganador de la carrera o Posiciones exactas): ").toLowerCase();
    if (tipoApuesta !== "ganador de la carrera" && tipoApuesta !== "posiciones exactas") {
        alert("El tipo de apuesta seleccionado no es válido.");
        return;
    }

    
    var montoApostar = parseInt(prompt("Ingrese el monto a apostar (mínimo $10000, máximo $1000000): "));
    if (isNaN(montoApostar) || montoApostar < 10000 || montoApostar > 1000000) {
        alert("El monto ingresado no es válido.");
        return;
    }


    var pilotoSeleccionado;
    if (tipoApuesta === "ganador de la carrera") {
        pilotoSeleccionado = prompt("Seleccione el piloto al que desea apostar (Piloto A, Piloto B, Piloto C): ").toUpperCase();
        if (!(pilotoSeleccionado in carreras[carreraSeleccionada])) {
            alert("El piloto seleccionado no es válido.");
            return;
        }
    } else {
        var primerPiloto = prompt("Seleccione el primer piloto en posiciones exactas (Piloto A, Piloto B, Piloto C): ").toUpperCase();
        var segundoPiloto = prompt("Seleccione el segundo piloto en posiciones exactas (Piloto A, Piloto B, Piloto C): ").toUpperCase();
        if (!(primerPiloto in carreras[carreraSeleccionada]) || !(segundoPiloto in carreras[carreraSeleccionada]) || primerPiloto === segundoPiloto) {
            alert("Los pilotos seleccionados para posiciones exactas no son válidos.");
            return;
        }
        pilotoSeleccionado = [primerPiloto, segundoPiloto];
    }

    
    var resultadoCarrera;
    var resultadoAleatorio = Math.random();
    if (resultadoAleatorio < 0.5) {
        resultadoCarrera = "Piloto A";
    } else if (resultadoAleatorio < 0.8) {
        resultadoCarrera = "Piloto B";
    } else {
        resultadoCarrera = "Piloto C";
    }

    
    var ganancias = 0;
    if (tipoApuesta === "ganador de la carrera") {
        if (pilotoSeleccionado === resultadoCarrera) {
            ganancias = montoApostar * carreras[carreraSeleccionada][pilotoSeleccionado];
        }
    } else {
        if (pilotoSeleccionado[0] === resultadoCarrera && pilotoSeleccionado[1] === resultadoCarrera) {
            ganancias = montoApostar * carreras[carreraSeleccionada][pilotoSeleccionado[0]] * carreras[carreraSeleccionada][pilotoSeleccionado[1]];
        }
    }


    if (ganancias > 0) {
        alert("¡Felicidades! Has ganado $" + ganancias);
    } else {
        alert("Lo siento, no has ganado.");
    }
}


apostarEnCarrera();
