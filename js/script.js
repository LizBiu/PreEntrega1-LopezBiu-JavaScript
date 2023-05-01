function IngresarDatos() {
    let nombreIngresado = prompt("Ingresa tu nombre")
    let PisoIngresado = prompt("Elige el piso #1 o el piso #2")

    piso(PisoIngresado);
}

function piso(PisoIngresado) {
    switch (PisoIngresado) {
        case '1':
            alert('Elpiso #1 solo cuenta con 6 asientos');
        case '2':
            alert('el piso #2 cuenta con 29 asientos');
    }
    return;
}

function asignarAsientos(PisoIngresado) {
    let numeroDeAsiento = prompt("Ingresa el asiento que deseas")
    let asientosPiso1 = 6;
    let asientosPiso2 = 29;

    if (numeroDeAsiento > asientosPiso1) {
        console.log("Asiento asignado correctamente en el piso 2");
    } else if (PisoIngresado == 2) {
        if (numeroDeAsiento > asientosPiso2) {
            console.log("Asiento asignado correctamente en el piso 2");
        } else {
            console.log("El autobus no cuenta con los asientos requeridos");
        }
    }
}

function calcularEdad(fechaNacimiento) {
    let numero1, numero2, numero3, operacion;
    numero1 = Number(prompt('Ingresa tu año de nacimiento:'));
    numero2 = Number(prompt('Ingresa tu día de nacimiento:'));
    numero3 = Number(prompt('Ingresa tu mes de nacimiento:'));
    operacion = 2023 - numero1; 
    let resultado;

	switch (true) {
		case operacion < 59 :
			console.log ("No tiene descuento");
			break;
		case operacion > 60 && operacion < 79 :
			console.log ("Tienes 40% de descuento");
			break;
		case operacion > 80:
			console.log ("Tienes 50% de descuento");
			break;
        default:
            console.log("Error");
	}

	return resultado;
}

    IngresarDatos();
    asignarAsientos();
    calcularEdad();