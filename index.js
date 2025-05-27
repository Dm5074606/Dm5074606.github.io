const fechaObjetivo = new Date("2025-06-06");

function actualizarContador() {
  const hoy = new Date();
  hoy.setHours(0, 0, 0, 0);
  const diferencia = Math.ceil((fechaObjetivo - hoy) / (1000 * 60 * 60 * 24));

  const contador = document.getElementById("contador");
  const imagen = document.getElementById("imagen-dia");

  if (diferencia > 0) {
    contador.textContent = `Faltan ${diferencia} días`;
    const diaImagen = Math.min(diferencia, 10);
    imagen.src = `img/${diaImagen}.jpg`;
  } else {
    contador.textContent = "¡Hoy es el día de la Sorpresa!";
    imagen.src = "img/1.jpg";
  }
}

actualizarContador();
