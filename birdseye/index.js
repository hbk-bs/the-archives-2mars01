const x = (n) => width * n;
const y = (n) => height * n;
const s = (n) => width * n;

function setup() {
	createCanvas(500, 250);
	background("tomato");
	noStroke();
	fill("orangered");

	beginShape();
	vertex(x(0.5), 0);
	vertex(x(0.5) + 40, y(0.1));
	vertex(x(0.5) + 40, y(1));
	vertex(x(0.5), y(1));
	endShape();

	fill("white");
	rect(x(0.5), 0, y(0.002), x(1));
	rect(0, y(1), x(1), y(0.002));
	rect(0, y(0.2), x(1), y(0.002));
	rect(0, y(0.8), x(1), y(0.002));
	rect(x(0.25), y(0.2), y(0.002), 300);
	rect(x(0.75), y(0.2), y(0.002), 300);
	rect(x(0.25), y(0.5), x(0.5), y(0.002));

	fill("salmon");
	rect(x(0.5) + 3, y(0.2), 37, y(0.002));
	rect(x(0.5) + 3, y(0.5), 37, y(0.002));
	rect(x(0.5) + 3, y(0.8), 37, y(0.002));

	for (let i = 0; i < 5; i++) {
		const x1 = random(1);
		const y1 = random(1);
		fill("crimson");
		ellipse(x(x1), y(y1), s(0.01));

		fill("lawngreen");
		ellipse(x(x1 - 0.002), y(y1 - 0.002), s(0.01));
	}
}
function keyPressed() {
	if (key === "s") {
		const name = prompt("Enter name", `out-${Date.now()}.png`);
		save(name);
	}
}
