function drawUniverse(){
	var randomStar;
	for (var i=0; i<((2000/winConst)/winConst); i++){
		randomStar=Math.random()*1000;
		if (randomStar<450)
			drawStar(backgroundstars[0], 4, 4);
		else if (randomStar<650)
			drawStar(backgroundstars[1], 4, 4);
		else if (randomStar<800)
			drawStar(backgroundstars[2], 4, 3);
		else if (randomStar<900)
			drawStar(backgroundstars[3], 3, 4);
		else if (randomStar<960)
			drawStar(backgroundstars[4], 4, 4);
		else if (randomStar<975)
			drawStar(backgroundstars[5], 3, 4);
		else if (randomStar<995)
			drawStar(backgroundstars[6], 5, 4);
		else if (randomStar<1001)
			drawStar(backgroundstars[7], 7, 8);
		
	}
}
function drawStar(starimg, width, height){
	universe.drawImage(starimg,Math.random()*winWidth, Math.random()*winHeight, width,height);
	
	universe.fillStyle="#CCCCCC";
	universe.font="italic "+15/winConst+"px times new roman";
	universe.shadowOffsetX=1;
	universe.shadowOffsetY=1;
	universe.shadowBlur=1;
	universe.shadowColor="#222222";
	universe.fillText("By Xavier Montamat", winWidth-140/winConst, winHeight-10/winConst);
	universe.shadowOffsetX=0;
	universe.shadowOffsetY=0;
	universe.shadowBlur=0;
	
}