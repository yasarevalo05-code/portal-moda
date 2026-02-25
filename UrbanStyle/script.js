window.addEventListener("load", () => {

  // ==============================
  // MENU HAMBURGUESA
  // ==============================
  const hamburguesa = document.getElementById("hamburguesa");
  const menu = document.querySelector(".menu");

  if (hamburguesa && menu) {
    hamburguesa.addEventListener("click", () => menu.classList.toggle("active"));
  }

  document.querySelectorAll(".menu a").forEach(link => {
    link.addEventListener("click", () => {
      if (window.innerWidth < 1000) menu?.classList.remove("active");
    });
  });

  document.addEventListener("click", (e) => {
    if (window.innerWidth < 1000 && menu && hamburguesa) {
      if (!menu.contains(e.target) && !hamburguesa.contains(e.target)) menu.classList.remove("active");
    }
  });

  // ==============================
  // CARRUSEL HOME
  // ==============================
  const carruselHome = document.querySelector(".carrusel-home");
  if (carruselHome) {
    const track = carruselHome.querySelector(".carousel-track");
    const prevBtn = carruselHome.querySelector(".prev");
    const nextBtn = carruselHome.querySelector(".next");
    const cards = track.querySelectorAll(".teaser-card");
    const gap = 20;

    // Mover por el ancho de una card + gap
    const moveAmount = () => cards[0].getBoundingClientRect().width + gap;

    // Flechas
    nextBtn.addEventListener("click", () => {
      track.scrollBy({ left: moveAmount(), behavior: "smooth" });
    });

    prevBtn.addEventListener("click", () => {
      track.scrollBy({ left: -moveAmount(), behavior: "smooth" });
    });

    // ✅ No es necesario JS de touchmove
    // El scroll táctil funciona nativamente con overflow-x: auto
  }

  // ==============================
  // CARRUSELES COLECCIONES
  // ==============================
  document.querySelectorAll(".carrusel").forEach(carrusel => {
    const track = carrusel.querySelector(".carrusel-track");
    const prevBtn = carrusel.querySelector(".prev");
    const nextBtn = carrusel.querySelector(".next");
    const card = track.querySelector(".card");
    const gap = 20;

    const moveAmount = () => card.getBoundingClientRect().width + gap;

    nextBtn.addEventListener("click", () => track.scrollBy({ left: moveAmount(), behavior: "smooth" }));
    prevBtn.addEventListener("click", () => track.scrollBy({ left: -moveAmount(), behavior: "smooth" }));
  });

  // ==============================
  // CARRUSEL AUTOMÁTICO NOVEDADES
  // ==============================
  const slides = document.querySelectorAll(".titular-slide");
  if (slides.length > 0) {
    let index = 0;
    const mostrarSlide = i => {
      slides.forEach(slide => slide.classList.remove("active"));
      slides[i].classList.add("active");
    };

    setInterval(() => {
      index = (index + 1) % slides.length;
      mostrarSlide(index);
    }, 4000);
  }

});