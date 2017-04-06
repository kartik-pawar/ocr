function predict(){
	var canvas=document.getElementsByTagName("canvas");
	console.log(canvas);
	var canvasctx=canvas[1].getContext("2d");
	console.log(canvasctx);

	var cheight=canvas[1].clientHeight;
	var cwidth=canvas[1].clientHeight;
	var imgd=canvasctx.getImageData(0,0,cheight,cwidth);
	console.log(imgd);
	
	var pix=imgd.data;
	console.log(pix);
	var pixels=new Array();
	var offset=0,current,incrementFactor=cheight/28;
	var of2=112*incrementFactor;
	for(i=0;i<28;i++){
		offset=incrementFactor*i*of2;
		for(j=0	;j<28;j++){
			current=offset+j*incrementFactor*4;
			pixels.push(pix[current]);
			console.log(current);
		}
	}
		

	// canvasctx2=canvas[0].getContext("2d");
	// var id = canvasctx2.createImageData(28,28); // only do this once per page
	// var d  = id.data;                        // only do this once per page
	// for(i=0;i<28;i++){
	// 	for(j=0	;j<28;j++){
	// 		index = (i + j * 28) * 4;
	// 		d[index+0]=d[index+1]=d[index+2]=d[index+3]=pixels[i*28+j]  ;
	//  	}

	//  	canvasctx2.putImageData( id, i,j );
	// }

	var c = document.getElementById("showimg");
	var ctx = c.getContext("2d");
	var imgData = ctx.createImageData(100, 100);

	var i;
	for (i = 0; i < 28; i ++) {
		for(j=0; j<28; j+=4){
			imgData.data[i+0] = imgData.data[i+1] =	imgData.data[i+2] = pixels[i*28+j];
			console.log("value: "+pixels[i*28+j]+" index: "+(i*28+j) );
	    	imgData.data[i+3] = 1;
		}
	    
	}

	ctx.putImageData(imgData, 10, 10);

	console.log(pixels);
}
