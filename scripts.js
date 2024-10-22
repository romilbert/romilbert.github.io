function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

// Fonction pour forcer la position fixe sur mobile lors du scroll
function handleScrollMobile() {
    var button = document.querySelector('.top-0.right-0');
    
    if (window.innerWidth <= 767) { // Si l'écran est plus petit que 767px (mobile)
      button.style.position = "fixed"; // Forcer la position fixe
      button.style.top = "10px";
      button.style.right = "8px";
    }
  }
  
  // Ajouter l'événement scroll pour mobile
  window.addEventListener('scroll', handleScrollMobile);
  
  // Assurer la position correcte dès le chargement de la page
  window.addEventListener('load', handleScrollMobile);
