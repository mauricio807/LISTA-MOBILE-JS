function troca(){
var s1=document.getElementById("nome1").value;
var s2=document.getElementById("nome2").value;
  
   
var num = s1.length;
  
if(s1.length < s2.length){
  num = s2.length;
}

var string = '';
for(var i = 0; i < num; i++){
  if(s1[i]){
    string += s1[i];
  }
  if(s2[i]){
    string += s2[i];
  }
}
  document.getElementById("imprimir").style.display="block";
document.getElementById("resultado").value=string;
   
}