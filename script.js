var
  canv = document.getElementById("canvas"),
  ctx = canv.getContext("2d");
canv.width = 450;
canv.height = 800;
ctx.fillRect(0, 150, 450, 10);
ctx.fillRect(0, 300, 450, 10);
ctx.fillRect(150, 0, 10, 450);
ctx.fillRect(300, 0, 10, 450);
let z = 0;
var a = [[0,0,0],
         [0,0,0],
         [0,0,0]];
var img = new Image();
function clean(){
  ctx.clearRect(0, 0, 450, 450);
  ctx.fillRect(0, 150, 450, 10);
  ctx.fillRect(0, 300, 450, 10);
  ctx.fillRect(150, 0, 10, 450);
  ctx.fillRect(300, 0, 10, 450);
  a = [[0,0,0],
       [0,0,0],
       [0,0,0]];
}
function winner0(){
  clean();
  z = 1;
}
function winnerX(){
  img.onload = function(){
    clean();
  }
  z = 0;
}
function pat(){
  img.onload = function(){
    clean();
  }
  z = 0;
}
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
  let s3 = 0;
      s4 = 0;
      num = 0;
  for (let i = 0; i < 3; i++){
    let s1 = 0;
        s2 = 0;
    for (let j = 0; j < 3; j++){
      s1 += a[i][j];
      s2 += a[j][i];
      if (a[i][j] > 0)
        num += 1;
      if (i == j)
        s3 += a[i][j];
      if (i + j == 2)
        s4 += a[i][j];
      if (s1 == 12 || s2 == 12 || s3 == 12 || s4 == 12){
        console.log("0");
        winner0();
        break;
      }
      if (s1 == 9 || s2 == 9 || s3 == 9 || s4 == 9){
        console.log("x");
        winnerX();
        break;
      }
      else if (num == 9)
        pat();
    }
  }
}
function check(x, y, z){
  if(x <= 150){
    if (y <= 150)
      if (z % 2 == 0)
        a[0][0] = 4;
      else
        a[0][0] = 3;
    else if (y <= 300)
        if (z % 2 == 0)
          a[1][0] = 4;
        else
          a[1][0] = 3;
      else
        if (z % 2 == 0)
          a[2][0] = 4;
        else
          a[2][0] = 3;
  }
  else if(x <= 300)
    if (y <= 150)
      if (z % 2 == 0)
        a[0][1] = 4;
      else
        a[0][1] = 3;
    else if (y <= 300)
        if (z % 2 == 0)
          a[1][1] = 4;
        else
          a[1][1] = 3;
      else
        if (z % 2 == 0)
          a[2][1] = 4;
        else
          a[2][1] = 3;
    else
      if (y <= 150)
        if (z % 2 == 0)
          a[0][2] = 4;
        else
          a[0][2] = 3;
      else if (y <= 300)
          if (z % 2 == 0)
            a[1][2] = 4;
          else
            a[1][2] = 3;
        else
          if (z % 2 == 0)
            a[2][2] = 4;
          else
            a[2][2] = 3;
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
