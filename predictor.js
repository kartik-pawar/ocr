function predict(){
	reqPixels=scaling();

}

function scaling(){
	var canvas=document.getElementsByTagName("canvas");
	var canvasContext=canvas[1].getContext("2d");

	var cheight=canvas[1].clientHeight;
	var cwidth=canvas[1].clientHeight;
	var drawingImageData=canvasContext.getImageData(0,0,cheight,cwidth);
	
	var drawingImageDataPixels=drawingImageData.data;
	//console.log(drawingImageDataPixels);
	var reqPixels=new Array();
	var offset=0,current,incrementFactor=cheight/28;
	var offset2=112*incrementFactor;
	for(i=0;i<28;i++){
		offset=incrementFactor*i*offset2;
		for(j=0	;j<28;j++){
			current=offset+j*incrementFactor*4;
			reqPixels.push(drawingImageDataPixels[current]);
			//console.log(current+" "+drawingImageDataPixels[current]);
		}
	}
	return reqPixels;
	/*	
	var checkCanvas = document.getElementById("showimg");
	var checkCanvasContext = checkCanvas.getContext("2d");
	var checkImageData = checkCanvasContext.getImageData(0,0,28,28);
	//console.log(checkImageData);

	for (i = 0; i < checkImageData.data.length; i+=4) {
			checkImageData.data[i] = checkImageData.data[i+1] = checkImageData.data[i+2] = reqPixels[i/4];
			checkImageData.data[i+3]=255;
			console.log("value: "+checkImageData.data[i/4]+" index: "+(i/4) );	    
	}
	console.log(checkImageData.data);
	checkCanvasContext.putImageData(checkImageData, 0, 0);
	*/
}
