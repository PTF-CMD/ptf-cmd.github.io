// El total arranca en 0
var total = 0;

// Funcion para agregar precio
function agregar() {
	var precio = $("input").val(); // Vemos que valor tiene el input
	total = total + Number(precio); // Se lo sumamos al total
	console.log("se agregaron "+precio+" pesos al total sin iva");
	$("input").val("");
	$('#btn-agregar').addClass("btn-agregar-hover");
	setTimeout(function(){
		console.log("hola")
		$('#btn-agregar').removeClass("btn-agregar-hover");
	},400);
}

$("#btn-agregar").click(agregar)// Al hacer click en el btn-agregar "llamamos" a la funcion agregar

$("#btn-total").click(function() {
	$(".mensaje").html("El total es: $"+total*1.21)
	console.log(total*1.21); // Mostramos el total mas su 21%
	total = 0; // Volvemos el total a 0
})


// Definimos un "evento"
$('input').bind("enterKey",function(e){
	agregar();
});

// Cuando el usuario suelte una tecla comprabamos si fue el enter,
// si lo fue activamos el evento enterKey que llama a la funcion agregar
$('input').keyup(function(e){
	if(e.keyCode == 13) {
	  $(this).trigger("enterKey");
	}
});



