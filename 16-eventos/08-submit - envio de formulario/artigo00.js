
// formulario

$(function(){

	$('#idform').bind('submit', function(e) {
		
		e.preventDefault();
		console.log("o formulario foi submitado");

	});


	//seleciona com o mause
	$('#nome').bind('select', function(){
		
		console.log("o foi selecionado");

	});


	//focado
	$('#nome').bind('focus', function(){
		
		console.log("o foi focado");

	});

	
	//deixou de tar focado
	$('#nome').bind('blur', function(){
		
		console.log("o foi focado");

	});


	//escuta alterações no select
	$('#select').bind('change', function(){
		
		console.log( $(this).val() );	

	});


});
		