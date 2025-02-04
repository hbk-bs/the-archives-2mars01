const x = (n) => width * n;
const y = (n) => height * n;

function setup() {
	createCanvas(500, 500);
	background("indigo");

	noStroke();
	fill("crimson");
	rect(x(0.08), y(0.1), x(1), y(1));
	fill("tomato");
	rect(x(0.16), y(0.08), x(1), y(1));
	fill("salmon");
	rect(x(0.24), y(0.06), x(1), y(1));
	fill("mistyrose");
	rect(x(0.32), y(0.04), x(1), y(1));
}

function keyPressed() {
	if (key === "s") {
		const name = prompt("Enter name", `out-${Date.now()}.png`);
		save(name);
	}
}
