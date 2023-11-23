/*
  Not Fidenza
  
  Description:
  This script generates a mesmerizing particle system that moves based on Perlin noise.
  
  Specifications:
  - The script creates a canvas that fills the window and initializes a background color.
  - It defines a particle system with random positions and colors.
  - The particles move according to Perlin noise, creating a fluid and dynamic effect.
  - When the particles reach the canvas boundaries or randomly, they reset to a new random position.
  - Users can interact with the script by clicking or dragging the mouse, adding new particles at the cursor position.
  
  Author: 0xMilord

  Date: 23-11-2023

  Copyright (c) 2023 0xMilord

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  THE SOFTWARE.
*/


let pos, colors;
const moveSpeed = 0.4;
const moveScale = 800;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background("#162a25");
	noStroke();
	
	colors = [color("#77c39c"), color("#2f5e36"), color("#55aba5"), color("#2d7063"), color("#3f6829"), color("#44a872"), color("#215964"), color("#cdedae")];
	pos = [];
	for(let i = 0; i < 500; i++){
		pos.push({
			x:random(width),
			y:random(height),
			c:colors[floor(random(colors.length))]
		});
	}
}

function draw() {
	for(let i = 0; i < pos.length; i++){
		with(pos[i]){
			let angle = noise(x / moveScale, y / moveScale) * TWO_PI * moveScale;//I never understood why end by multiplying by moveScale
			x += cos(angle) * moveSpeed;
			y += sin(angle) * moveSpeed;
			fill(c);
			ellipse(x, y, 2, 2);
			if(x > width || x < 0 || y > height || y < 0 || random(1) < 0.001 ){
				x = random(width);
				y = random(height);
			}
		}
	}
}

function mousePressed(){
	for(let i = 0; i < 10; i++){
		pos.push({
			x:mouseX+random(-30, 30),
			y:mouseY+random(-30, 30),
			c:colors[floor(random(colors.length))]
		});
	}
}

function mouseDragged(){
	mousePressed();
}