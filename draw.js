var oldX,oldY;
function setup() {
	createCanvas(280,280);
	background(255);
	strokeWeight(10);
	strokeJoin(ROUND);
}

function draw() {
	fill(0);
	if(mouseIsPressed){
		if(oldX=='undefined'){
			oldX=mouseX;
			oldY=mouseY;
			return;
		}
		line(mouseX,mouseY,oldX,oldY);
		oldX=mouseX;
		oldY=mouseY;
	}
		
}

function mouseReleased(){
	oldX=oldY=undefined;
}

function clearCanvas(){
	clear();
	oldX=oldY=undefined;
}
