// requisição completa
$(function(){

	$('#form').bind('submit', function(e) {
		e.prenventDefault();

		var txt = $(this).serialize();
		console.log( txt );

		//fazendo a requisição
		$.ajax({
			url: '/path/to/file',
			type: 'default GET (Other values: POST)',
			dataType: 'default: Intelligent Guess (Other values: xml, json, script, or html)',
			data: {param1: 'value1'},
			success:function(data){

				$('.div').html("Resultado "+data)
				console.log('sucesso na requisicao');
			},	
			error:function(){
				console.log('erro na requisicao');
			}
		})


		//clicando no linkin
		$('a').bind('click', function() {
			console.log('redirect ...');
		});
		
		

	});


});
	


	

