function myFunction() {
  var r=parseFloat(document.getElementById('r').value);
  



      var area=22/7*r*r*r*4/3;
var coffee = document.forms[0];
var txt = "";
var i;
for (i = 0; i < coffee.length; i++) {
  if (coffee[i].checked) {
    txt = txt + coffee[i].value + " ";
  }
 
}
document.getElementById("order").value =area+txt;

}

