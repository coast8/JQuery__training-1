
// scrool

$('#area').bind('scroll', function() {
	console.log("evento de scrool");

	$(this).css(
		'background-color', 'green'
	);

});
	