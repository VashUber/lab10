var
  canv = document.getElementById("canvas"),
  ctx = canv.getContext("2d");
canv.width = 450;
canv.height = 600;
ctx.fillStyle = "black";
ctx.fillRect(0, 150, 450, 10);
ctx.fillRect(0, 300, 450, 10);
ctx.fillRect(150, 0, 10, 450);
ctx.fillRect(300, 0, 10, 450);
