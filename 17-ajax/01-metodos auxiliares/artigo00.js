# metodos auxiliares



## load
$(function(){

	//load
	$('#btn').bind('click', function() {
		
		$('.div').load("teste.html");

	});


	//get
	$('#btn').bind('click', function() {
		
		$.get("teste.html", function(t){
			$('.div').html(t);
		});
		
	});


	//post
	$('#btn').bind('click', function() {
		
		$.post("teste.html", function(t){
			$('.div').html(t);
		});
		
	});

});
	


	

