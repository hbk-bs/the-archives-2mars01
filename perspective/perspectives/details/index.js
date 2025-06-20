const x = (n) => width * n;
const y = (n) => height * n;
const s = (n) => width * n;

function setup() {
	createCanvas(500, 500);
	let c1= color(255, 81,61);
	let c2= color(168,17,0);
	let c3= color(255);
	let c4= color(214,100,82);
	let c5= color(111,255,10);
	background(c1);

	noStroke();
	fill(c2);
	ellipse(x(0.5), y(0.8), x(0.6), s(0.3));

	fill(c3);
	rect(0, y(0.8), x(1), y(0.02));
	fill(c4);
	rect(x(0.2), y(0.8), x(0.6), s(0.02));
	fill(c5);
	ellipse(x(0.6), y(0.6), s(0.6));
}
function keyPressed() {
	if (key === "s") {
		const name = prompt("Enter name", `out-${Date.now()}.png`);
		save(name);
	}
}
