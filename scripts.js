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

  // Fonction pour révéler les titres au scroll
  function revealOnScroll() {
    const titles = document.querySelectorAll('.hidden-title');

    titles.forEach((title) => {
      if (isInViewport(title)) {
        title.classList.add('visible');
      }
    });
  }

  // Écouteur d'événement pour le scroll
  window.addEventListener('scroll', revealOnScroll);

  // Révéler au chargement de la page au cas où certains titres sont déjà dans la vue
  window.addEventListener('load', revealOnScroll);