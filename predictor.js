function predict(){
	var reqPixels=scaling();
	var intercept=loadIntercept();
	var coef=loadCoef();
	var predictions=new Array();
	//console.log(reqPixels);
	for(i=0;i<intercept.length;i++){
		predictions.push(intercept[i]);
		for(j=0;j<coef[i].length;j++){
			predictions[i]+=reqPixels[j]*coef[i][j];
			//console.log(i+':  '+reqPixels[j]+'*'+coef[i][j]+'= '+reqPixels[i]*coef[i][j]);
		}
		console.log(predictions[i]);
	}

	maxpred=0;
	for (var i = predictions.length - 1; i >= 0; i--) {
		if(predictions[i]>predictions[maxpred]) maxpred=i;
	}
	console.log(maxpred);
	document.getElementById('prediction').value=maxpred;
}

function scaling(){
	var canvas=document.getElementsByTagName("canvas");
	var canvasContext=canvas[0].getContext("2d");

	var cheight=canvas[0].clientHeight;
	var cwidth=canvas[0].clientHeight;
	console.log(cheight+" "+cwidth);
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
	
	var egimg=reqPixels;
	console.log(egimg);
	var checkCanvas = document.getElementById("showimg");
	var checkCanvasContext = checkCanvas.getContext("2d");
	var checkImageData = checkCanvasContext.getImageData(0,0,280,280);
	//console.log(checkImageData);

	var arr=[]
	for(i=0;i<28;i++){
		for(x=0;x<10;x++){
			for(j=0;j<28;j++){
				for(y=0;y<10;y++){
					checkImageData.data[y*4+j*40+x*280*4+i*2800*4] = checkImageData.data[1+y*4+j*40+x*280*4+i*2800*4] = checkImageData.data[2+y*4+j*40+x*280*4+i*2800*4] = egimg[(i*28+j)];
					checkImageData.data[3+y*4+j*40+x*280*4+i*2800*4]=255;
					arr.push((y*4+j*40+x*280*4+i*2800*4)/4+" index: "+(i*28+j)+" val:"+egimg[(i*28+j)]);

				}
			}
		}
	}
	console.log(arr);

	checkCanvasContext.putImageData(checkImageData, 0, 0);
	*/
	return reqPixels;
	
}
