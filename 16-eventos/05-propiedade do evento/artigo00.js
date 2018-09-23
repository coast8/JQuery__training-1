
//podemos clicar em um local e acionar o gatinho com varios elementos
// ou realizar outro evento

$('#bt').bind('click', function(e) {
	
	//executa o vento e trava 
	e.preventDefault();

	//mostra o tipo de evento
	e.type;

	//elemento no qual ocorreu a ação
	e.target;
});
