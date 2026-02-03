let messageIndex = 0;
const messages = [
  "Tu es sûr(e) ?",
  "Vraiment ?",
  "Réfléchis encore...",
  "Dernière chance !",
  "Tu vas le regretter...",
  "Sois gentil(le) !",
  "Promis, ça sera super !",
  "Allez, dis oui !"
];

function handleNoClick() {
  // Ajout du "." pour cibler les classes CSS
  const noButton = document.querySelector(".no-button");
  const yesButton = document.querySelector(".yes-button");

  // On change le texte du bouton "Non"
  noButton.textContent = messages[messageIndex];
  messageIndex = (messageIndex + 1) % messages.length;

  // On récupère la taille actuelle de la police
  const style = window.getComputedStyle(yesButton);
  const currentSize = parseFloat(style.fontSize);

  // Utilisation des backticks (`) pour la template string
  yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
  window.location.href = "yes_page.html";
}
