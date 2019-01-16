
## way to avoid conflict with other libs Js

	// creating a variable to access lib
	var $j = JQuery.noConflict();

	// changed the way to access JQuery
	$j(document).ready(function(){
		alert("ola, documento carregado");
	});
