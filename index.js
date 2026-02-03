function handleYesClick() {
    const mainContent = document.getElementById("main-content");
    
    // On ajoute un paramètre aléatoire après le nom du fichier pour forcer le chargement
    const timestamp = new Date().getTime();
    
    mainContent.innerHTML = `
        <img id="image-display" src="bubu-dancing-dance.gif?t=${timestamp}" alt="Bubu Yay">
        <h1 style="font-size: 3rem; color: #ff4081;">GÉNIAL ! ❤️🎉</h1>
        <p style="font-size: 1.5rem; color: #d81b60;">C'est un rendez-vous !</p>
    `;
}
