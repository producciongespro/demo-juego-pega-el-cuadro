import { renderPersonaje } from "./render.js";
import * as utils from "./utils.js";
import { personaje, juego } from "./config.js";

let canvas;
let ctx;

document.addEventListener("DOMContentLoaded", setup);

function setup() {
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  console.log("height", canvas.height, "width", canvas.width);

  dibujar();
}

function dibujar() {
  // Limpiar el canvas
  setTimeout(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  // Dibujar un cuadrado en la posición actual
  renderPersonaje(
    ctx,
    utils.generarNumeros(canvas.width - personaje.tamano),
    utils.generarNumeros(canvas.height - personaje.tamano),
    personaje.tamano,
    personaje.color
  );
  }, juego.espera);

  // Solicitar el próximo frame de animación
  window.requestAnimationFrame(dibujar);
}
