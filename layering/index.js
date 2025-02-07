const x = (n) => width * n;
const y = (n) => height * n;

function setup() {
	createCanvas(500, 500);
	
	noStroke()
	let c1= color(59,0,122);
    let c2= color(179,0,0);
	let c3 = color(255,51,15);
	let c4 =color(255, 106,76);
	let c5 = color(255,157,138);

	background (c1)
	fill(c2);
	rect(x(0.08), y(0.1), x(1), y(1));
	fill(c3);
	rect(x(0.16), y(0.08), x(1), y(1));
	fill(c4);
	rect(x(0.24), y(0.06), x(1), y(1));
	fill(c5);
	rect(x(0.32), y(0.04), x(1), y(1));
}

function keyPressed() {
	if (key === "s") {
		const name = prompt("Enter name", `out-${Date.now()}.png`);
		save(name);
	}
}
