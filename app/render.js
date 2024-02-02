export function presonaje (ctx, x, y, tamano, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, tamano, tamano);
}

export function leyenda(ctx, canvas, texto) {
  ctx.font = "20px Comic Sans MS";
  ctx.fillStyle = "blue";
  ctx.textAlign = "center";
  ctx.fillText(texto, canvas.width / 2, canvas.height / 2);
}

export function titulo(ctx, canvas, texto) {
  ctx.font = "30px Comic Sans MS";
  ctx.fillStyle = "#C70039";
  ctx.textAlign = "center";
  ctx.fillText(texto, canvas.width / 2, 40);
}

export function puntos(ctx, canvas, texto) {
  ctx.font = "10px Comic Sans MS";
  ctx.fillStyle = "#FF5733";
  ctx.textAlign = "center";
  ctx.fillText(`${texto} PUNTOS`, canvas.width / 2, 60);
}
