import * as render from "./render.js";
import * as utils from "./utils.js";
import { personaje, juego } from "./config.js";

let canvas;
let ctx;
let lastTimestamp = 0;

document.addEventListener("DOMContentLoaded", setup);

function setup() {
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  console.log("height", canvas.height, "width", canvas.width);  
  window.requestAnimationFrame(dibujar);
  
}

function dibujar(timestamp) {
    const dt = timestamp - lastTimestamp;
    render.titulo(ctx, canvas, "PÉGALE AL CUADRO")   
           
   

    if (dt >= juego.espera) {        
        ctx.clearRect(0, 50, canvas.width, canvas.height);                
        
        render.presonaje(
          ctx,
          utils.generarNumeros( 50, canvas.width - personaje.tamano),
          utils.generarNumeros( 50, canvas.height - personaje.tamano),
          personaje.tamano,
          personaje.color
        );
        lastTimestamp = timestamp;
    }
    window.requestAnimationFrame(dibujar);  
}
