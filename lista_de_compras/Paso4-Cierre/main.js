// Funcion que nos genera un li para cada producto que ingrese el usuario
function li_generator(producto) {
	
	return "<li><span>"+producto+"</span></li>"

}

function agregar() {
	$('header').css("padding","5vh") // Subo el header
	var producto = $('#input-producto').val(); // Veo que ingreso
	$('#input-producto').val(''); // Vacio el input
	$('#btn-agregar').addClass("btn-agregar-hover");
	setTimeout(function(){
		console.log("hola")
		$('#btn-agregar').removeClass("btn-agregar-hover");
	},400);
	$('.lista').append(li_generator(producto)); // Uso la primer funcion para poder agregar eso a nuestro div .lista
	// Declaro lo que sucede cuando se clickea un li
	$('li').click(function() {
		$(this).remove(); // Lo borro
		if ($('.lista').html()=="") { // Me fijo si no quedan productos entonces acomodo el header de nuevo
			$('header').css("padding","20vh")
		}
	})
}


// Declaramos que vamos a hacer cuando clickeen btn-agregar
$('#btn-agregar').click(function() {
	agregar();
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
