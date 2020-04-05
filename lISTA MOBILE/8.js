function validar(){

	if (document.getElementById("pessoaFisica").checked) {
	document.getElementById("Fisica").style.display = "block";
	document.getElementById("Juridica").style.display="none";
	
}else if(document.getElementById("pessoa").checked){
	document.getElementById("Juridica").style.display="block";
	document.getElementById("Fisica").style.display = "none";
}
}

function cep(){
    evt = window.event;
    var cep = evt.keyCode;

    if(cep < 47 || cep > 58){ 
      alert('Informe apenas números');
      evt.preventDefault();
    }
  }
