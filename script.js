// Lesson 3: Associative Arrays & Data Options

//---------------------------------------//
// Canvas setup for example problems later
let cnv = document.getElementById('myCanvas');
let ctx = cnv.getContext('2d');
cnv.width = window.innerWidth;
cnv.height = window.innerHeight;
//---------------------------------------//

// Associative Arrays (i.e. Objects)
// ---------------------------------

// An associative array is a data structure that has named indexes instead of the numerical indexes a regular array uses.

// An associative array may be described as a collection of key-value pairs.

// In JavaScript, objects behave like associative arrays.

// Values in the object may be accessed using dot notation or [ ] notation.

// Example 
// Create an associative array that contains a student's name, grade and ID. Then, output a sentence describing that student. E.g. "Donald Duck (#45203) is in grade 11"

var student = { name: 'Daffy Duck', grade: 6, id: '#999999' };

// console.log(student.name + " (" + student.id + ") is in grade " + student.grade);


// Example
// Create an associative array that contains a circle's x coordinate (50), y coordinate (75), radius (15), and color (blue). Then, write code that sets the middle of the circle to (100,200) and increases the radius by 5.

var myCircle = {
  x: 50,
  y: 75,
  r: 15,
  color: 'blue'
};

myCircle.x = 100;
myCircle.y = 200;
myCircle.r += 5;

// console.log(myCircle);


// Related Data structures
// -----------------------

// Often, you can have collections of data that are related to eachother. Some examples would be:
//    - A list of student names and a list of their final Math grades
//    - A list of grocery store products and a list of their prices
//    - A list of cites and a list of their total population


// Some possible ways of using data structures to handle related collections/lists are:

//    -Parallel Arrays
//    -2D Arrays
//    -Arrays of Objects

// Parallel Arrays
// ---------------

// Parallel Arrays are a set of multiple arrays that contain related information. The order of the arrays is very important because the element in one array is related the element in the same position in the other arrays.

// Example: Here are parallel arrays containing related information. Use a loop to output all the data in the form: 'Sailor Moon, the guardian of love, has a power level of 8000'

var sailors = ['Moon', 'Mercury', 'Mars', 'Jupiter', 'Venus'];
var guardianOf = ['Love', 'Intelligence', 'Aggression', 'Fitness', 'Popularity'];
var powerLevel = [9001, 6000, 7000, 8000, 5000];

// for (let i = 0; i < 5; i++){
//   console.log("Sailor " + sailors[i] + ", the guardian of " + guardianOf[i] + ", has a power level of " + powerLevel[i])
// }

// You Try: Create 2 parallel arrays: one containing the subjects you have taken this year, and the other containing your final mark in that class (You can make the marks up if you like). Then, output some sentence that uses the information in arrays.



// 2D Arrays
// ---------

// A 2D array is a multidimensional array. It is an array of arrays.

// Example: Create a 2D array of x and y coordinates and radius for a circle. Then, use this to draw the circles on the canvas. This array should have 5 circles.

// let circles = [[200, 300, 20] , [400, 100, 50] , [300,600,60] , [600,300,40] , [300,50,10]]; 

// // output the 400
// console.log(circles[1][0])

// // output the 40
// console.log(circles[3][2])

// // draw all the circles
// for (let i = 0; i < circles.length; i++){
//   ctx.fillStyle = 'blue';
//   ctx.beginPath();
//   ctx.arc(circles[i][0], circles[i][1], circles[i][2], 0, 2*Math.PI);
//   ctx.fill();
// }



// You Try: create a 2D array of 5 rectangles. Each inner array should have the x coord and y coord and color of each rectangle. If you want to add a width and height, go ahead!




//-----------------------------------------//
// Arrays of Objects
// This is probably the most organized way to structure data that has many characteristics.

// Example: Create a single stroke circle object that stores a circle with random x and y coordinates, a radius of 30, random stroke color, and random xSpeed between 1 and 5.

var oneCircle = {
  x: randomInt(0, cnv.width),
  y: randomInt(0, cnv.height),
  r: 30,
  color: randomRGB(),
  xSpeed: randomDec(1, 5)
}

// fill(oneCircle.color);
// circle(oneCircle.x, oneCircle.y, oneCircle.r, 'fill');

// Example: Use a loop to create 100 of the circles made in the previous question. Store these in an array. Then, draw the 13th index and 43rd index bubbles on the canvas.

var circles = [];

// Use a for loop to push a bunch of circles into the array
for (let i = 0; i < 100; i++) {
  circles.push({
    x: randomInt(0, cnv.width),
    y: randomInt(0, cnv.height),
    r: 30,
    color: randomRGB(),
    xSpeed: randomDec(1, 5)
  })
}

// // See all your circles!
// console.log(circles);


// Draw your circles using a loop!
for (let i = 0; i < circles.length; i++) {
  fill(circles[i].color);
  circle(circles[i].x, circles[i].y, circles[i].r, 'fill');
}


// You Try: Use a loop to draw all 100 circles on the canvas.



// Example: Use the xSpeed variable to make the bubbles travel from left to right

requestAnimationFrame(draw);

function draw() {
  // draw background
  fill('white');
  rect(0, 0, cnv.width, cnv.height, 'fill');

  // draw circle objects
  for (let i = 0; i < circles.length; i++) {
    fill(circles[i].color);
    circle(circles[i].x, circles[i].y, circles[i].r, 'fill');
  }

  // update animation variables
  for (let i = 0; i < circles.length; i++){
    circles[i].x += circles[i].xSpeed;
    // circles[i].color = randomRGB();

		if (circles[i].x - circles[i].r > cnv.width) {
			circles[i].x = -circles[i].r
		}
  }


  requestAnimationFrame(draw);
}



// You Try: Add the pulseBubble function to the animation so that all bubbles pulse.

function pulseBubble() {
	
}

// Example: Write a function called addBubble that adds a bubble to the array. 

function addBubble(bubbleArray) {


}

// You Try: Write a function called removeBubble that removes a bubble from the array.



// Example Add a 'keydown' event to the page. When the user presses the 'a' key, bubbles are added to the page.

document.addEventListener('keydown', keydownHandler);

function keydownHandler(event) {
  // a-key has keyCode 65


  // z-key has keyCode 90

}


// You Try: Add code so that when the user presses the 'r' key, bubbles are removed from the page.

// Extra Challenges //
// 1. Write the scrollRight function. It should take a bubble object and animate it to move to the right side of the window. When that bubble moves offscreen, 'teleport' it to the left side at a random height.

function scrollRight(bubbleObj) {

}

// 2. Add another speedUp and slowDown function that takes a bubble object and increases/decreases its speed when the ArrowUp/ArrowDown key is pressed.

function speedUp(bubbleArray) {

}

function slowDown(bubbleArray) {

}

// 3. Currently, all the bubbles pulse altogether. Stagger the pulsing of each bubble.


