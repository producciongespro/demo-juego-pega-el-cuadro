import {renderPersonaje} from "./render.js"

const TAMANO = "5";
let canvas;
let ctx;

onload =()=> setup()

function setup() {
canvas = document.getElementById("canvas");
//canvas.width = canvas.offsetWidth;
//canvas.height = canvas.offsetHeight;
ctx = canvas.getContext("2d");
console.log(canvas.height, canvas.width  );

renderPersonaje(ctx, canvas.width / 2 , canvas.height / 2, TAMANO, "red" );

    
}