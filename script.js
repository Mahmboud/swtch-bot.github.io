// Met automatiquement l'année en cours dans le pied de page.
var annee = document.getElementById("annee");
if (annee) {
  annee.textContent = new Date().getFullYear();
}
