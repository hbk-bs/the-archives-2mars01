const x = (n) => width * n;
const y = (n) => height * n;
const s = (n) => width * n;

function setup() {
	// this is function scope
	// setup is executed once
	createCanvas(500, 500);
	background("midnightblue");
	stroke("mediumslateblue");
	line(0, y(0.5), x(1), y(0.5));
	fill("lightsteelblue");
	noStroke();
	ellipse(x(0.5), y(0.2), x(0.2), y(0.2));
	ellipse(x(0.5), y(0.8), x(0.2), y(0.2));
	fill("slategrey");
	ellipse(x(0.5), y(0.24), s(0.06), y(0.04));
	ellipse(x(0.5), y(0.76), s(0.06), y(0.04));
	ellipse(x(0.5) - 10, y(0.2), s(0.04), y(0.02));
	ellipse(x(0.5) - 10, y(0.8), s(0.04), y(0.02));
	ellipse(x(0.5), y(0.18), s(0.02), y(0.01));
	ellipse(x(0.5), y(0.82), s(0.02), y(0.01));
}

function keyPressed() {
	if (key === "s") {
		const name = prompt("Enter name", `out-${Date.now()}.png`);
		save(name);
	}
}
