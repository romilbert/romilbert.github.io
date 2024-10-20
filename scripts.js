function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

// Fonction pour détecter si un élément est visible dans le viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Fonction pour révéler et animer les titres au scroll
function revealTypingOnScroll() {
    const titles = document.querySelectorAll('.typewriter');

    titles.forEach((title) => {
        if (isInViewport(title)) {
            title.classList.add('visible');

            // Une fois que l'animation de saisie est terminée, supprimer la barre de saisie
            setTimeout(() => {
                title.querySelector('span').classList.add('end'); // Ajoute la classe 'end' pour supprimer le curseur
            }, 3000); // 3 secondes pour correspondre à la durée de l'animation de saisie
        }
    });
}

// Écouteur d'événement pour le scroll
window.addEventListener('scroll', revealTypingOnScroll);

// Révéler les titres au chargement de la page si déjà visibles
window.addEventListener('load', revealTypingOnScroll);