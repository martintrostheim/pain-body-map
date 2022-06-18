const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
 
//Resizing
canvas.height = 750;
canvas.width = 676; 

  
var background = new Image();
background.src = "Outline.png";

// Make sure the image is loaded first otherwise nothing will draw.
background.onload = function(){
	ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
	ctx.drawImage(background,0,0);
	ctx.fillStyle = "white";
    ctx.font = "30px Arial";
    ctx.fillText("Foran", 125, 30);
	ctx.fillText("Bak", 472, 30);
	ctx.fillText("Høyre", 5, 130);
    ctx.fillText("Høyre", 575, 130);
	ctx.fillText("Venstre", 280, 130);
	}


//variables  
let painting = false;
  
function startPosition(e){
	if(e.which === 1){ //e.which === 1: only left click can be used for painting
		painting = true;
		draw(e);
	}
}
function finishedPosition(){
	painting = false;
	ctx.beginPath();
}
    
function draw(e){
	if(e.which === 1){
		if(!painting) return;
		ctx.lineWidth = 10;
		ctx.lineCap = "round";
		ctx.strokeStyle = color;  
		ctx.lineTo(e.clientX, e.clientY);
		ctx.stroke();
		ctx.drawImage(background,0,0);
		if(show){
			ctx.fillStyle = "white";
			ctx.font = "30px Arial";
			ctx.fillText("Foran", 125, 30);
			ctx.fillText("Bak", 472, 30);
			ctx.fillText("Høyre", 5, 130);
			ctx.fillText("Høyre", 575, 130);
			ctx.fillText("Venstre", 280, 130);
		}
	}
}
  
// This function prevents any further drawing when the pointer is outside of the canvas.
function stopdraw(e){
	if(e.which === 1){
		painting = false;
		ctx.beginPath();
	}
}
  
//EventListeners
canvas.addEventListener("mousedown", startPosition);
canvas.addEventListener("mouseup", finishedPosition);
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseleave", stopdraw); 

//Buttons

//Draw (with red) and erase (with white)
//This part sets drawing to defaults and indicates this by making the draw button green.
//When clicking on the erase button, draw color changes to white. The draw button reverts to default color while the erase button becomes green.
var color;
color = "orange";
document.getElementById("draw").style.backgroundColor = "#A2FFA2";
document.getElementById("erase").style.backgroundColor = "";

function drawFunction(){
	color = "orange";
	document.getElementById("draw").style.backgroundColor = "#A2FFA2";
	document.getElementById("erase").style.backgroundColor = "";
}

function eraseFunction(){
	color = "white";
	document.getElementById("draw").style.backgroundColor = "";
	document.getElementById("erase").style.backgroundColor = "#A2FFA2";
}

//Clear canvas and redraw body map.
//When clicking on the clear all button, this function clears the canvas and redraws the body map.
//The function also revert the pencil back to drawing mode with orange as color and drawing button marked in green.
//The function also checks if directions should be redrawn onto the body map.
function clearFunction(){
	var background = new Image();
	background.src = "Outline.png";

	background.onload = function(){
		ctx.fillStyle = "white";
		ctx.fillRect(0, 0, canvas.width, canvas.height);
		ctx.drawImage(background,0,0);
		if(show){
			ctx.fillStyle = "white";
			ctx.font = "30px Arial";
			ctx.fillText("Foran", 125, 30);
			ctx.fillText("Bak", 472, 30);
			ctx.fillText("Høyre", 5, 130);
			ctx.fillText("Høyre", 575, 130);
			ctx.fillText("Venstre", 280, 130);
		}
	}
	color = "orange";
	document.getElementById("draw").style.backgroundColor = "#A2FFA2";
	document.getElementById("erase").style.backgroundColor = "";
}

//Toggle directions text on and off
//Directions are drawn onto the body map by default.
//Clicking on the hide button draws black rectangles over the directions text.
var show = true;


//Ask before closing tab
window.onbeforeunload = function() {
    return true;
}