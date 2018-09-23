
## eventos com o muose

	mause 		=> muoseover, mouseout


## esse evento faz a funções dos dois juntos, recebe dois parametros

	hover	





//===============================================
	$('#btn').bind('mousedown', function() {
		consle.log("apertou o mause");
	});


	$('#btn').bind('mouseup', function() {
		consle.log("soltou o mause");
	});


	$('#btn').bind('mousemove', function() {
		consle.log("soltou o mause");
	});


	$('#btn').bind('dblclick', function() {
		consle.log("deu dois cliques no elemento");
	});