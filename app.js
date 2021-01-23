function apples() {
  document.getElementById('applerep').innerHTML = "On ne sait pas ! Mais il se pourrait (on ne sait pas grand chose, oui) que ce soit une référence volontaire de Turing au conte de Blanche Neige";
}

function year() {
  var year = document.getElementById('year').value;
  if (year == 1970) {
    document.getElementById('yearrep').innerHTML = "Bravo ! C'est pourquoi ses travaux sur Enigma n'ont pas pu le défendre contre sa condamnation";
  }
  else if (year < 1970) {
    document.getElementById('year-+').innerHTML = "+";
  }
  else {
    document.getElementById('year-+').innerHTML = "-";
  }
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
