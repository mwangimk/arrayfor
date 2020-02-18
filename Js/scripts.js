function myFunction(){
 
  var names = ["KAMAU", "NJOROGE", "OCHIENG", "RITA", "RITHO", "KEYA", "NYAMBUTO"];
  var text = "";
  var i;
  for (i = 0; i < names.length; i++) {
    text += names[i] + "<br>";
  }
  document.getElementById("demo").innerHTML = text;}