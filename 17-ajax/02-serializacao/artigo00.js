// serializando dados
// serializa todos as variaveis passadas
// esse processo é feito de uma so vez passando apenas o elemento capturado.


// serializando
$(function(){

	//load
	$('#form').bind('submit', function(e) {
		e.prenventDefault();

		//serializa todos as variaveis passadas
		var txt = $(this).serialize();
		console.log( txt );

	});


});
	


	

