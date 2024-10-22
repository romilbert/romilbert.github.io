function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

// Fonction pour changer l'opacité du bouton lors du scroll
function handleScrollMobile() {
    const button = document.querySelector('.dark-mode-toggle');
    
    if (window.innerWidth <= 767) {
      // Si la page est scrollée vers le bas, diminuer l'opacité
      if (window.scrollY > 100) {
        button.style.opacity = '0.5';
      } else {
        // Sinon, opacité normale
        button.style.opacity = '1';
      }
    }
  }
  
  // Appliquer l'effet de scroll uniquement sur mobile
  window.addEventListener('scroll', handleScrollMobile);