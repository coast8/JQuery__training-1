
## way to avoid conflict with other libs Js

	//criando uma variavel para acessar a lib
	var $j = JQuery.noConflict();

	//mudou a maneira de acessar o JQuery
	$j(document).ready(function(){
		alert("ola, documento carregado");
	});
