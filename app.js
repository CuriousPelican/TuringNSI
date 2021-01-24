function apples() {
  document.getElementById('applerep').innerHTML = "On ne sait pas ! Mais il se pourrait (on ne sait pas grand chose, oui) que ce soit une référence volontaire de Turing au conte de Blanche Neige";
}

function year() {
  document.getElementById("yearrep").style.display = "block";
  var year = document.getElementById('year').value;
  if (year == 1970) {
    document.getElementById('yearrep').classList.remove("bigletter");
    document.getElementById('yearrep').innerHTML = "Bravo ! C'est pourquoi ses travaux sur Enigma n'ont pas pu le défendre contre sa condamnation";

  }
  else if (year < 1970) {
    document.getElementById('yearrep').classList.add("bigletter");
    document.getElementById('yearrep').innerHTML = "+";
  }
  else {
    document.getElementById('yearrep').classList.add("bigletter");
    document.getElementById('yearrep').innerHTML = "-";
  }
}

function infos() {
    var panel = document.getElementById("panel");
    if (panel.style.display === "block") {
      panel.style.display = "none";
    }
    else {
      panel.style.display = "block";
    }
}
