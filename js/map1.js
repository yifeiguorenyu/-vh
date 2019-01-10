var info = mapData();
var arr = mapStyle();
var num = 0;
var map;
try{
	init();
}catch(e){
	alert("无法请求位置")
}

//	setInterval(init, 3000);

function init() {
	$("#huliyuan").text("护理员" + info[num].name + "服务轨迹")
	num++;

	if(num == info.length) {
		num = 0;
	}
	map = new BMap.Map("collapse-panel-44", {
		enableMapClick: false
	});
	var point = new BMap.Point(info[num].oldman[3].x, info[num].oldman[3].y);
	map.centerAndZoom(point, 13); // 编写自定义函数，创建标注   
	map.enableScrollWheelZoom(true);

	var pois1 = [
		new BMap.Point(info[num].oldman[0].x, info[num].oldman[0].y),
		new BMap.Point(info[num].oldman[1].x, info[num].oldman[1].y),
		new BMap.Point(info[num].oldman[2].x, info[num].oldman[2].y),
		new BMap.Point(info[num].oldman[3].x, info[num].oldman[3].y),
		new BMap.Point(info[num].oldman[4].x, info[num].oldman[4].y),
		new BMap.Point(info[num].oldman[5].x, info[num].oldman[5].y),
		new BMap.Point(info[num].oldman[6].x, info[num].oldman[6].y)
	];
	addline();
	addMarkers();
	///////// 调用添加标记方法        ///////////////
	function addMarkers() {
		addline();
		for(var i = 0; i < pois1.length; i++) {
			var point = new BMap.Point(pois1[i].lng, pois1[i].lat);
			addMarker(point, i);
		}

	}
	/////////////添加标记   方法     ///////////////////
	function addMarker(point, index) { // 创建图标对象  
		var image;

		image = "img/marker251.png"
		var title = [info[num].oldman[0].name, info[num].oldman[1].name, info[num].oldman[2].name, info[num].oldman[3].name, info[num].oldman[4].name, info[num].oldman[5].name, info[num].oldman[6].name];
		var myIcon = new BMap.Icon(image, new BMap.Size(40, 40), {
			//			anchor: new BMap.Size(10, 25),
			//			imageOffset: new BMap.Size(0, 0 - index * 25) // 设置图片偏移    
			anchor: new BMap.Size(14, 22),
			imageOffset: new BMap.Size(0, 0)
		});

		var marker = new BMap.Marker(point, { // 创建标注对象并添加到地图   
			icon: myIcon
		});
		//		marker.addEventListener('click', function(event) {
		//			alert(1)
		//			this.openInfoWindow(new BMap.InfoWindow());
		//		});

		var label = new BMap.Label(title[index], {
			offset: new BMap.Size(-5, 30),
			border: "none"
		});
		marker.setLabel(label);
		map.addOverlay(marker);
		//		markers.push(marker);
	}
	/////////////添加连线          ///////////////////
	function addline() {
		var sy = new BMap.Symbol(BMap_Symbol_SHAPE_BACKWARD_OPEN_ARROW, {
			scale: 0.5, //图标缩放大小
			strokeColor: 'rgba(0,0,0,0)', //设置矢量图标的线填充颜色
			strokeWeight: '2', //设置线宽
		});
		var icons = new BMap.IconSequence(sy, '10', '18'); // 创建polyline对象

		var polyline = new BMap.Polyline(pois1, {
			enableEditing: false, //是否启用线编辑，默认为false
			enableClicking: true, //是否响应点击事件，默认为true
			icons: [icons],
			strokeWeight: '3', //折线的宽度，以像素为单位
			strokeOpacity: 1, //折线的透明度，取值范围0 - 1
			strokeColor: "#2993f5" //折线颜色
		});

		map.addOverlay(polyline); //增加折线

	}
}
/////////////// 添加地图控件           //////////////////////

//function ZoomControl() {
//	this.defaultAnchor = BMAP_ANCHOR_TOP_RIGHT; // 默认停靠位置和偏移量
//	this.defaultOffset = new BMap.Size(10, 10);
//}
//ZoomControl.prototype = new BMap.Control(); // 通过JavaScript的prototype属性继承于BMap.Control		
//ZoomControl.prototype.initialize = function(map) { // 自定义控件必须实现自己的initialize方法,并且将控件的DOM元素返回// 在本方法中创建个div元素作为控件的容器,并将其添加到地图容器中
//	var div = document.createElement("div"); // 创建一个DOM元素
//	var img = $("<img src='./img/quanpin.png' style='width: 30px;height: 30px;'/>")
//	$(div).append(img)
//	div.style.cursor = "pointer"; // 设置样式
//	map.getContainer().appendChild(div);
//	return div; // 将DOM元素返回
//}
//// 创建控件	
//var twoZoomCtrl = new ZoomControl();
//// 添加到地图当中
//map.addControl(twoZoomCtrl);
/////////设置地图风格/    //////////
map.setMapStyle({
	styleJson: arr
});