const x = (n) => width * n;
const y = (n) => height * n;

function setup() {
	createCanvas(500, 500);
	background("snow");
	noStroke();
	fill("lavenderblush");
	rect(0, y(0.08), x(1), y(0.08));
	fill("mistyrose");
	rect(0, y(0.1), x(1), y(0.1));
	fill("pink");
	rect(0, y(0.12), x(1), y(0.12));
	fill("lightpink");
	rect(0, y(0.14), x(1), y(0.14));

	fill("palevioletred");
	rect(0, y(0.16), x(1), y(0.16));

	fill("mediumvioletred");
	rect(0, y(0.18), x(1), y(0.18));
}
function keyPressed() {
	if (key === "s") {
		const name = prompt("Enter name", `out-${Date.now()}.png`);
		save(name);
	}
}
