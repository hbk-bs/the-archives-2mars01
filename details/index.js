const x = (n) => width * n;
const y = (n) => height * n;
const s = (n) => width * n;

function setup() {
	createCanvas(500, 500);
	background("tomato");

	noStroke();
	fill("orangered");
	ellipse(x(0.5), y(0.8), x(0.6), s(0.3));

	fill("white");
	rect(0, y(0.8), x(1), y(0.02));
	fill("salmon");
	rect(x(0.2), y(0.8), x(0.6), s(0.02));
	fill("lime");
	ellipse(x(0.6), y(0.6), s(0.6));
}
function keyPressed() {
	if (key === "s") {
		const name = prompt("Enter name", `out-${Date.now()}.png`);
		save(name);
	}
}
