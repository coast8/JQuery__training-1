<!-- 
	=========================
  	  Selecionando elementos
  	=========================
-->
<script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>

<body>	
	<button id="bt1"> BTN1 </button>
	<button class="bt2"> BTN2 </button>

	<ul class="lista1">
		<li> it1 </li>
		<li> it2 </li>
		<li> it3 </li>
		<li> it4 </li>
		<li> it5 </li>
	</ul>

	<ul class="lista2">
		<li> it1 </li>
		<li> it2 </li>
		<li class="botao"> it3 </li>
		<li> it4 </li>
		<li> it5 </li>
	</ul>
</body>

<script>
	// capturing one element per class
	$('.lista2')

	// capturing one element per id
	$('#bt1')	

	// capturing an element within the list
	$('.lista2 li.botao')


	// os elementos capturados retorna um array de dados
	// para verificar se o arry nao estar vazio
	if( $('.botao').length > 0 ){
		console.log('ok tem elemento');
	}
</script>

