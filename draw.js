var oldX,oldY;
function setup() {
	createCanvas(280,280);
	background(0);
	stroke(255);
	strokeWeight(20);
	//strokeJoin(ROUND);
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
	background(0);
	oldX=oldY=undefined;
}
