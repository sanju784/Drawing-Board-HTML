/**@var to access canvas by id */
var canvas = document.getElementById('myCanvas');

/**@var to store context of canvas where all drawing operations has to be performed */
var context = canvas.getContext('2d');

/**@var radius of points that are drawn on canvas, the canvas drawing is made from connecting the points */
var radius = 5;

/**@var flag to check when the mouse is dragged and when moved */
var downFlag = false;

/**@var set width and height of canvas equal to its display window */
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

/**@var to make line width equal to the diameter of the point */
context.lineWidth = radius*2;

/**
 * function to draw a point (circle) on canvas when mouse moves
 * @param Event Object e
 */
var putPoint = function(e) {
  if(downFlag) {
  	context.lineTo(e.clientX, e.clientY);
  	context.stroke();
  	context.beginPath();
	context.arc(e.clientX, e.clientY, radius, 0, Math.PI*2);
	context.fill();
	context.beginPath();
	context.moveTo(e.clientX, e.clientY);
  }
}

/**
 * function to set draw flag to true when mouse is pressed
 * @param Event Object e
 */
var engage = function(e) {
  downFlag = true;
  //to draw the point at point where mouse is pressed
  putPoint(e);
}

/**
 * to set draw flag to false when mouse is released 
 */
var disEngage = function () {
  downFlag = false;
  context.beginPath();
}

//call of corresponding function when Event of mouse press release and move has occured 
//the alternate events are onmousedown, onmousemove, onmouseup but it it not supported in Firefox and IE
canvas.addEventListener('mousedown', engage);
canvas.addEventListener('mousemove', putPoint);
canvas.addEventListener('mouseup', disEngage);
