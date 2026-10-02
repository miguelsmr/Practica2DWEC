// Botón del Trabajo 1: cambia el texto del párrafo al pulsarlo
const boton = document.getElementById("boton");
const mensaje = document.getElementById("mensaje");

boton.addEventListener("click", function () {
  mensaje.textContent = "¡Has pulsado el botón! (JS externo)";
});
