// fonction qui donne la réponse à l'appui du "oui" ou "non"
function apples() {
  // écrit dans le paragraphe avec l'id "applerep" la réponse
  document.getElementById('applerep').innerHTML = "On ne sait pas ! Mais il se pourrait que la pomme croquée (on ne sait pas grand chose, oui) soit une référence volontaire de Turing au conte de Blanche Neige";
}

// fonction qui affiche "+" si l'année rentée par l'utilisateur est inférieure à la réponse, "-" si elle est supérieure & un élément de réponse si c'est juste
function year() {
  document.getElementById("yearrep").style.display = "block"; // on afiche la boite de réponse, cachée de base dans le css
  var year = document.getElementById('year').value; // la variable "year" prend l'année envoyée par l'utilisateur
  if (year == 1970) { // si l'année est juste
    document.getElementById('yearrep').classList.remove("bigletter"); // on enlève la classe "bigletter" (pour éviter que la réponse soit affichée en énorme)
    document.getElementById('yearrep').innerHTML = "Bravo ! C'est pourquoi ses travaux sur Enigma n'ont pas pu le défendre contre sa condamnation"; // on donne la réponse ds le <p> #yearrep
  }
  else if (year < 1970) { // sinon si l'année rentée par l'utilisateur est inférieure à la réponse
    document.getElementById('yearrep').classList.add("bigletter"); // on ajoute la classe "bigletter" (pour que le "+" soit affiché en gros, bien lisible)
    document.getElementById('yearrep').innerHTML = "+"; // on écrit "+" cs le <p> de réponse #yearrep
  }
  else { // sinon (c'est donc que l'année rentée par l'utilisateur est supérieure à la réponse)
    document.getElementById('yearrep').classList.add("bigletter"); // on ajoute la classe "bigletter" (pour que le "+" soit affiché en gros, bien lisible)
    document.getElementById('yearrep').innerHTML = "-"; // on écrit "-" cs le <p> de réponse #yearrep
  }
}

// fonction réutilisable qui affiche/cache un élément
function more(id) { // on entre l'id de l'élément dont on veut basculer l'affichage en paramètre de la fonction
  var panel = document.getElementById(id); // la variable "panel" désigne l'élément avec l'id mis en paramètre de la fonction
  if (panel.style.display === "block") { // si il est affiché
    panel.style.display = "none"; // on le cache
  }
  else { // sinon
    if (id=='funfacts') { // on detecte le cas spécifique du bouton affichant la 2ème partie de la page
      window.scrollBy({ // on fait un joli scroll
        top: 2000,
        left: 0,
        behavior: "auto",
      });
    }
    panel.style.display = "block"; // on l'affiche
    if (id=='funfacts') {// 2ème partie du joli scroll
      window.scrollBy({
        top: 700,
        left: 0,
        behavior: "smooth",
      });
    }
  }
}
