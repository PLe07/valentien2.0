function handleYesClick() {
    // On cible la div principale
    const mainContent = document.getElementById("main-content");
    
    // On remplace le contenu
    mainContent.innerHTML = `
        <img id="image-display" src="bubu-dancing-dance.gif" alt="Bubu Yay" onerror="this.src='https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMmo3cjZ4eXN6bm93eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4JmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1n/MDJ9Ibh3vUzqa0Ew9u/giphy.gif'">
        <h1 style="font-size: 3rem; color: #ff4081;">GÉNIAL ! ❤️🎉</h1>
        <p style="font-size: 1.5rem; color: #d81b60;">C'est un rendez-vous !</p>
    `;
}
