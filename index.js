<script>
    let messageIndex = 0;
    const messages = [
        "Tu es sûr(e) ?",
        "Vraiment sûr(e) ??",
        "Réfléchis bien...",
        "S'il te plaît... 🥺",
        "Je vais pleurer...",
        "Tu me brises le cœur 💔",
        "OK j'arrête... NON JE RIGOLE ! DI OUI !",
        "T'as pas le choix en fait."
    ];

    function handleNoClick() {
        const noBtn = document.getElementById("noBtn");
        const yesBtn = document.getElementById("yesBtn");

        noBtn.textContent = messages[messageIndex];
        messageIndex = (messageIndex + 1) % messages.length;

        const currentSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
        const newSize = currentSize * 1.5;
        
        yesBtn.style.fontSize = `${newSize}px`;
        yesBtn.style.padding = `${newSize * 0.5}px ${newSize * 0.8}px`;
    }

    function handleYesClick() {
        // C'est ici qu'on change le lien mort par ton fichier local
        document.getElementById("main-content").innerHTML = `
            <img id="image-display" src="bubu-dancing-dance.gif" alt="Yay Bubu">
            <h1 style="font-size: 3rem; color: #ff4081;">GÉNIAL ! ❤️🎉</h1>
            <p style="font-size: 1.5rem; color: #d81b60;">C'est un rendez-vous !</p> 
        `;
    }
</script>
