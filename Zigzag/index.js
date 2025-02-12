let x1 = 0;
let y1=  0;
let radius= 20;
let xSpeed= 20;
let ySpeed= 1;


function setup(){
  const canvas= createCanvas(200,200);
  canvas.parent ("sketch");
 
  y=height/2;
  x= width/2;

}
function draw(){
background (0,20); 
fill ("ffffff");
stroke (x+50, y+50);
circle(x,y, radius);
x+= xSpeed;
y+= ySpeed;

if ( x>= width || x<0){
  xSpeed*= -1;

}
if (y> height|| y<0){
  ySpeed *= -1;
}
}