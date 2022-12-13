/* Ajout ou suppression de la classe "responsive" lorsque l'on clic sur l'icone du menu */
function toogleResponsive() {
  var x = document.getElementById("menuRes");
  if (x.className === "menu") {
    x.className += " responsive";
  } else {
    x.className = "menu";
  }
}

/* Gestion du diaporama */ 
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) { myIndex = 1 }
  x[myIndex - 1].style.display = "block";
  setTimeout(carousel, 6000); // Change d'image toutes les 6 secondes
}