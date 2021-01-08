var
  canv = document.getElementById("canvas");
  ctx = canv.getContext("2d");
  new1 = document.getElementById("new1");
  f5 = document.getElementById("f5");
new1.onclick = function(){
  img.onload = function(){
    clean();
  }
  clean();
}
f5.onclick = function(){
  document.location.reload();
}
canv.width = 450;
canv.height = 650;
ctx.fillRect(0, 150, 450, 10);
ctx.fillRect(0, 300, 450, 10);
ctx.fillRect(150, 0, 10, 450);
ctx.fillRect(300, 0, 10, 450);
let z = 0;
    w0 = 0;
    wX = 0;
    turn = "X";
var a = [[0,0,0],
         [0,0,0],
         [0,0,0]];
var img = new Image();
function score() {
  ctx.clearRect(0, 460, 500, 500);
  ctx.font = "24px Helvetica Neue"
  ctx.fillText("Первый игрок: " + wX, 20, 550);
  ctx.fillText("Второй игрок: " + w0, 280, 550);
  ctx.fillText("Количество побед", 140, 500);
  if (z % 2 == 0)
    turn = "X";
  else
    turn = "0";
  ctx.clearRect(30, 600, 444, 620);
  ctx.font = "24px Helvetica Neue"
  ctx.fillText("Ходит игрок - " + turn, 140, 630)
  ctx.fillText("Ход", 210, 590)
}
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
  z = 1;
  w0 += 1;
  score();
  alert("Победил 0");
}
function winnerX(){
  z = 0;
  wX += 1;
  score();
  alert("Победил X");
}
function pat(){
  z = 0;
  score();
  alert("Ничья");
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
      else{
        if (s1 == 9 || s2 == 9 || s3 == 9 || s4 == 9){
          console.log("x");
          winnerX();
          break;
        }
        else{
          if (num == 9){
            pat();
            break;
          }
        }
      }
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
    if (z % 2 == 0)
      turn = "X";
    else
      turn = "0";
    ctx.clearRect(30, 600, 444, 620);
    ctx.fillText("Ходит игрок - " + turn, 140, 630)
    check(x, y, z);
  }
})
ctx.font = "24px Helvetica Neue"
ctx.fillText("Первый игрок: " + 0, 20, 550);
ctx.fillText("Второй игрок: " + 0, 280, 550);
ctx.fillText("Количество побед", 140, 500);
ctx.fillText("Ход", 210, 590)
ctx.fillText("Ходит игрок - " + turn, 140, 630)
