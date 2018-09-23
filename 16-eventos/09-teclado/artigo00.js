
// p teclado

// keyup
// keydown

$(function(){

	//aperta
	$('#idnome').bind('keydown', function() {
		console.log("apertou o teclado");
	});


	//solta
	$('#idnome').bind('keyup', function() {
		console.log("soltou a tecla");
	});


});
		