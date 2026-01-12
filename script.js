// ========== MENU HAMBURGER ==========
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', function() {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// ========== CARROUSEL DE MONTRES ==========
let currentSlide = 0;
const images = document.querySelectorAll('.watch-image');
const dots = document.querySelectorAll('.dot');

// Fonction pour changer de montre
function changeSlide(slideIndex) {
    // Enlever la classe 'active' de toutes les images
    images.forEach(function(img) {
        img.classList.remove('active');
    });
    
    // Enlever la classe 'active' de tous les points
    dots.forEach(function(dot) {
        dot.classList.remove('active');
    });
    
    // Ajouter la classe 'active' à l'image sélectionnée
    images[slideIndex].classList.add('active');
    
    // Ajouter la classe 'active' au point sélectionné
    dots[slideIndex].classList.add('active');
    
    // Mettre à jour l'index actuel
    currentSlide = slideIndex;
}