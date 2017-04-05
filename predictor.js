function predict(){
	var canvas=document.getElementsByTagName("canvas");
	console.log(canvas);
	var canvasctx=canvas[0].getContext("2d");
	console.log(canvasctx);

	var cheight=canvas[0].clientHeight;
	var cwidth=canvas[0].clientHeight;
	var imgd=canvasctx.getImageData(0,0,cheight,cwidth);
	console.log(imgd);
	
	var pix=imgd.data;
	console.log(pix);
	var pixels=new Array();
	for(i=0;i<cheight;i+=10)
		for(j=0	;j<cwidth*4;j+=40){
			pixels.push(pix[i+j]);
			console.log(i+j);
		}
	console.log(pixels);
}
