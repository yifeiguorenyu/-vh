
var num=0;
var elementArr=[$("#main3"),$("#main4")];
var textTitle=['9月10号','8月']
setInterval(function(){
	num++;
	if(num>1){
		num=0;
	}else{
		num=1;
	}
	elementArr[num].addClass("show").removeClass("hide").siblings().removeClass("show").addClass("hide");
	$("#time").text(textTitle[num]);
},4000)
