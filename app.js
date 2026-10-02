// ===== MOMENTO 1: LOS DATOS VIVEN EN JAVASCRIPT =====
// Array de videojuegos: cada juego es un objeto con sus 5 datos
const videojuegos = [
  { nombre: "The Legend of Zelda: Tears of the Kingdom", compania: "Nintendo", plataforma: "Nintendo Switch", valoracion: 9.6, precio: 69.99 },
  { nombre: "Elden Ring", compania: "FromSoftware", plataforma: "Multiplataforma", valoracion: 9.5, precio: 59.99 },
  { nombre: "God of War Ragnarök", compania: "Santa Monica Studio", plataforma: "PlayStation 5", valoracion: 9.4, precio: 79.99 },
  { nombre: "Forza Horizon 5", compania: "Playground Games", plataforma: "Xbox Series X", valoracion: 9.2, precio: 69.99 },
  { nombre: "Minecraft", compania: "Mojang", plataforma: "PC", valoracion: 9.0, precio: 29.99 }
];

// ===== MOMENTO 3: EL JAVASCRIPT RELLENA LA TABLA =====
// Recorre el array y crea una fila por cada videojuego
function pintarTabla() {
  const tbody = document.getElementById("cuerpoTabla");
  tbody.innerHTML = ""; // vaciamos antes de pintar para no duplicar filas

  for (let i = 0; i < videojuegos.length; i++) {
    const juego = videojuegos[i];
    const fila = document.createElement("tr");

    fila.innerHTML = `
      <td>${juego.nombre}</td>
      <td>${juego.compania}</td>
      <td>${juego.plataforma}</td>
      <td>${juego.valoracion}</td>
      <td>${juego.precio} €</td>
    `;

    tbody.appendChild(fila);
  }
}

// Pintamos la tabla al cargar la página
pintarTabla();
