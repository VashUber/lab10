var
  canv = document.getElementById("canvas"),
  ctx = canv.getContext("2d");
canv.width = 450;
canv.height = 800;
ctx.fillStyle = "black";
ctx.fillRect(0, 150, 450, 10);
ctx.fillRect(0, 300, 450, 10);
ctx.fillRect(150, 0, 10, 450);
ctx.fillRect(300, 0, 10, 450);
let z = 0;
var a = [0, 0, 0,
         0, 0, 0,
         0, 0, 0]
var img = new Image();
function draw(x, y, z){
    if (z % 2 == 0){
      ctx.beginPath();
      ctx.lineWidth = 6;
      ctx.arc(x, y, 30, 0, Math.PI * 2, false);
      ctx.stroke();
    }
    else{
      img.onload = function(){
        ctx.drawImage(img, x-35, y-35, 70, 70);
      }
       img.src = "x.png";
    }
}
function check(x, y, z){
  if(x <= 150){
    if (y <= 150)
      if (z % 2 == 0)
        a[0] = 4;
      else
        a[0] = 3;
    else if (y <= 300)
        if (z % 2 == 0)
          a[3] = 4;
        else
          a[3] = 3;
      else
        if (z % 2 == 0)
          a[6] = 4;
        else
          a[6] = 3;
  }
  draw(x, y, z);
  console.log(a)
}
canvas.addEventListener('click', function(e) {
  const rect = canvas.getBoundingClientRect()
  const x = event.clientX - rect.left
  const y = event.clientY - rect.top
  console.log("x: " + x + " y: " + y)
  if (x < 450 && y < 450) {
    z += 1;
    check(x, y, z);
  }
})
