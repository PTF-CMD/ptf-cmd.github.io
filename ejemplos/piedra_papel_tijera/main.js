function jugar(eleccionPersona, eleccionCpu) {
	if (eleccionPersona == "piedra") {
		switch(eleccionCpu) {
			case "piedra":
				console.log("Empate");
				break;
			case "papel":
				console.log("Gano CPU");
				break;
			case "tijera":
				console.log("Gano Persona");
				break;
		}	
	} else if(eleccionPersona == "papel") {
		switch(eleccionCpu) {
			case "piedra":
				console.log("Gano Persona");
				break;
			case "papel":
				console.log("Empate");
				break;
			case "tijera":
				console.log("Gano CPU");
				break;
		}

	} else {
		switch(eleccionCpu) {
			case "piedra":
				console.log("Gano CPU");
				break;
			case "papel":
				console.log("Gano Persona");
				break;
			case "tijera":
				console.log("Empate");
				break;
		}
	}
}

$('button').click(function(){
	var eleccionPersona = $(this).val();
	var eleccionCpu = Math.floor((Math.random() * 3) + 1);
	switch(eleccionCpu){
		case 1:
			eleccionCpu = "piedra";
			break;
		case 2:
			eleccionCpu = "papel";
			break;
		case 3:
			eleccionCpu = "tijera";
			break;
	}
	console.log("persona:"+eleccionPersona);
	console.log("cpu:"+eleccionCpu);
	jugar(eleccionPersona,eleccionCpu);
})