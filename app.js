function apples() {
  document.getElementById('applerep').innerHTML = "On ne sait pas ! Mais il se pourrait que la pomme croquée (on ne sait pas grand chose, oui) soit une référence volontaire de Turing au conte de Blanche Neige";
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

function more(id) {
  var panel = document.getElementById(id);
  if (panel.style.display === "block") {
    panel.style.display = "none";
  }
  else {
    if (id=='funfacts') {
      window.scrollBy({
        top: 2000,
        left: 0,
        behavior: "auto",
    });
  }
    panel.style.display = "block";
    if (id=='funfacts') {
      window.scrollBy({
        top: 700,
        left: 0,
        behavior: "smooth",
      });
    }
  }
}
