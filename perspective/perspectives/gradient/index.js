const x = (n) => width * n;
const y = (n) => height * n;

function setup() {
	createCanvas(500,500);

	
}
function draw(){
	background(250);
	const increment= 50; 
	
	for (let i= 0; i < height; i+= increment){
		const x= 0;
		const y= i; 
		const w= width; 
		const h= height; 
		const r= map(y,0,height,153,255);
		const g= map(y,0,height,0,255);
		const b= map(y,0,height,99,255);
		fill(r,g,b);
		noStroke()
		rect (x,y, w, h);
	}

}
function keyPressed() {
	if (key === "s") {
		const name = prompt("Enter name", `out-${Date.now()}.png`);
		save(name);
	}
}
