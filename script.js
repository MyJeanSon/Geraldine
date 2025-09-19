document.addEventListener("DOMContentLoaded", function () {
  const openButton = document.querySelector(".open-button");
  const infoSection = document.querySelector(".info-section");         // Sección 2
  const detailsSection = document.querySelector(".details-section");   // Sección 3: contador
  const parentsSection = document.querySelector(".parents-section");   // Sección 4: padres y padrinos

  // Función para lanzar confeti
  function launchConfetti() {
    const confettiSettings = {
      particleCount: 100,
      spread: 100,
      startVelocity: 10,
      gravity: 0.8,
      ticks: 200,
      colors: ['#d4af37', '#ffcc00', '#ffffff', '#f5f5f5'],
      origin: { x: 0.5, y: 0.5 },
      shapes: ['circle', 'square']
    };

    confetti(confettiSettings);
  }

  // Evento al hacer clic en "Abrir"
  openButton.addEventListener("click", function () {
    this.closest(".envelope").style.display = "none";
    infoSection.classList.remove("hidden");

    launchConfetti();

    // Reproduce la música de fondo
    const backgroundMusic = document.getElementById("background-music");
    backgroundMusic.play().catch(e => {
      console.log("Autoplay bloqueado hasta interacción del usuario.");
    });

    setTimeout(() => {
      detailsSection.classList.remove("hidden"); // Contador
    }, 2000);

    setTimeout(() => {
      document.querySelector(".bless-section").classList.remove("hidden"); //Gracias a Dios
    }, 4000);

    setTimeout(() => {
      parentsSection.classList.remove("hidden"); // Padres y padrinos
    }, 6000);

    setTimeout(() => {
      document.querySelector(".poem-section").classList.remove("hidden");
    }, 8000);

    setTimeout(() => {
      document.querySelector(".interactive-section").classList.remove("hidden");
    }, 10000);

    setTimeout(() => {
      document.querySelector(".gifts-section").classList.remove("hidden");
    }, 12000);

    setTimeout(() => {
      document.querySelector(".money-section").classList.remove("hidden");
    }, 14000);

  });
});

// ─── CONTADOR REGRESIVO ────────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", function () {
  const eventDate = new Date("November 15, 2025 15:45:00").getTime(); // ← Cambia a tu fecha real

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = eventDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Actualiza los elementos del DOM
    document.getElementById("days").innerText = String(days).padStart(2, '0');
    document.getElementById("hours").innerText = String(hours).padStart(2, '0');
    document.getElementById("minutes").innerText = String(minutes).padStart(2, '0');
    document.getElementById("seconds").innerText = String(seconds).padStart(2, '0');

    if (distance < 0) {
      clearInterval(countdownInterval);
      document.querySelector(".countdown-container").innerHTML = "<h3>¡Ya llegó el gran día! 🎉</h3>";
    }
  }

  // Inicia el contador
  const countdownInterval = setInterval(updateCountdown, 1000);
  updateCountdown(); // Ejecuta inmediatamente

});
