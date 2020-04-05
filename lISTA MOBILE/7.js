
	var inversa=[document.getElementById("nome").value,document.getElementById("nome2").value,
	document.getElementById("nome3").value,document.getElementById("nome4").value,
	document.getElementById("nome5").value];

function preencherInversamente(){

	var inversa=[document.getElementById("nome").value,document.getElementById("nome2").value,
	document.getElementById("nome3").value,document.getElementById("nome4").value,document.getElementById("nome5").value];
	//inserindo valores invertidos nos campos
	document.getElementById("nome5").value=inversa[0];
	document.getElementById("nome4").value=inversa[1];
	document.getElementById("nome3").value=inversa[2];
	document.getElementById("nome2").value=inversa[3];
	document.getElementById("nome").value=inversa[4];
	
}
