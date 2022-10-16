import React from "react";
import Sketch from "react-p5";


// p5 sketch from online, seeing another example of p5.js
// Currently unused, but may play with in the future.

const getRandomInt = (max) => {
	return Math.floor(Math.random() * max);
};

const OldSketch = (props) => {
	const sphere = (p5, x, y, a, b) => {
		let c = p5.color(
			getRandomInt(255),
			getRandomInt(255),
			getRandomInt(255)
		);
		p5.fill(c);
		p5.noStroke();
		p5.ellipse(x, y, a, b);
	};

	const setup = (p5, canvasParentRef) => {
		const width = window.innerWidth;
		const height = window.innerHeight;

		let bound = 0;

		if (width > height) {
			bound = width;
		} else {
			bound = height;
		}

		p5.createCanvas(width, height).parent(canvasParentRef);
		p5.background("white");

		for (let i = 0; i < 10; i++) {
			const randomSize = getRandomInt(40);
			sphere(
				p5,
				getRandomInt(bound),
				getRandomInt(bound),
				randomSize,
				randomSize
			);
		}
	};

	const draw = (p5) => {
		//
	};

	return <Sketch setup={setup} draw={draw} />;
};

export default OldSketch;
