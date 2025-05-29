const totalImagenes = 8; // Cambia este número si agregas más imágenes
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
