const totalImagenes = 9; // Cambia este número si agregas más imágenes
const key = "fotoActual";

// Obtener y actualizar el índice
let actual = parseInt(localStorage.getItem(key) || "0");
actual = (actual % totalImagenes) + 1;
localStorage.setItem(key, actual);

// Asignar la imagen correspondiente
const img = document.getElementById("imagen");
img.src = `Imagenes/${actual}.jpeg`;
img.onerror = () => {
  img.alt = "Imagen no encontrada";
  img.src = ""; // Oculta la imagen si no se encuentra
};

// Agregar efecto ripple (onda) al hacer click o tap en la imagen
img.classList.add("ripple");

img.addEventListener("click", function (e) {
  const ripple = document.createElement("span");
  ripple.classList.add("ripple-circle");

  // Posicionar el ripple en el punto del click/tap
  const rect = this.getBoundingClientRect();
  ripple.style.left = `${e.clientX - rect.left - 50}px`; // -50 para centrar (mitad del tamaño)
  ripple.style.top = `${e.clientY - rect.top - 50}px`;

  this.appendChild(ripple);

  // Remover el ripple después de la animación
  setTimeout(() => {
    ripple.remove();
  }, 600);
});
