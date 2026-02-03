let messageIndex = 0;
const messages = [
    "Tu es sûr(e) ?",
    "Vraiment ?",
    "Réfléchis bien...",
    "Dernière chance !",
    "Tu vas me briser le cœur... 💔",
    "S'il te plaît 🥺",
    "Je vais pleurer...",
    "OK, j'arrête de demander... (Menteur !)"
];

function handleNoClick() {
    const noButton = document.querySelector(".no-button");
    const yesButton = document.querySelector(".yes-button");

    // Change le texte du bouton Non
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;

    // Fait grandir le bouton Oui
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
    yesButton.style.padding = `${currentSize * 0.8}px ${currentSize * 1.5}px`;
}

function handleYesClick() {
    // Redirige vers la page de succès
    window.location.href = "yes_page.html";
}
