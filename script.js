// Bilder vergrößern und Modal öffnen
function openModal(image) {
    const modal = document.getElementById("myModal");
    const modalImg = document.getElementById("modalImage");
    const closeButton = document.querySelector(".close");

    // Modal anzeigen
    modal.style.display = "block";
    modalImg.src = image.src;

    // Sicherstellen, dass der Close-Button sichtbar ist
    closeButton.style.display = 'block';
}

// Funktion zum Schließen des Modals
function closeModal() {
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
}

// Scroll-Animation für den Text
const text = document.querySelector(".Para-text");
let lastScroll = window.scrollY;

window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;

    if (currentScroll < lastScroll) {
        // Hochscrollen: Text einblenden
        text.style.opacity = "1";
        text.style.transform = "translateY(0px)";
    } else {
        // Runterscrollen: Text ausblenden
        text.style.opacity = "0";
        text.style.transform = "translateY(20px)";
    }

    lastScroll = currentScroll;
});

// Header ein- und ausblenden beim Scrollen
let lastScrollTop = 0; // Speichert den letzten Scrollwert
const header = document.querySelector('.header'); // Header auswählen

window.addEventListener('scroll', function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // Wenn nach unten gescrollt wird, Header nach oben verschieben
        header.style.top = "-60px"; // Ändere dies je nach Header-Höhe
    } else {
        // Wenn nach oben gescrollt wird, Header anzeigen
        header.style.top = "0";
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Verhindern, dass der Wert negativ wird
});

// Das Panel und der Toggle-Button
const toggleButton = document.querySelector('.toggle-btn');
const sidePanel = document.querySelector('.side-panel');
const closeButton = document.querySelector('.close-btn');

// Button für das Öffnen/Schließen des Panels
toggleButton.addEventListener('click', function() {
    sidePanel.classList.toggle('open');
});

// Button zum Schließen des Panels
closeButton.addEventListener('click', function() {
    sidePanel.classList.remove('open');
});
