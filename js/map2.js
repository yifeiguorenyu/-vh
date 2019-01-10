var arr = mapStyle();
try {
	var map1 = new BMap.Map("collapse-panel-43", {
		enableMapClick: false
	});
	var point = new BMap.Point(121.64774877382584, 31.11664190007911);
	map1.centerAndZoom(point, 12); // 编写自定义函数，创建标注   
	map1.enableScrollWheelZoom(true);
} catch(e) {
	console.log(e)
	alert("无法请求位置")
}
var pois2 = [
	new BMap.Point(121.506894, 31.156206),
	new BMap.Point(121.547139, 31.134448),
	new BMap.Point(121.593132, 31.1112),
	new BMap.Point(121.647749, 31.114663),
	new BMap.Point(121.745484, 31.145327),
	new BMap.Point(121.644874, 31.063204),
	new BMap.Point(121.706965, 31.051325),
	new BMap.Point(121.760432, 31.109716),
	new BMap.Point(121.594282, 31.217497),
	new BMap.Point(121.474124, 31.072607)
];
addMarkers2();

function addMarkers2() {
	for(var i = 0; i < pois2.length; i++) {
		var point = new BMap.Point(pois2[i].lng, pois2[i].lat);
		addMarker2(point, i);
		//			var markerClusterer = new BMapLib.MarkerClusterer(map1, {
		//				markers: markers2
		//			});
	}

}

function addMarker2(point, index) { // 创建图标对象  
	var image = "img/marker252.png";
	var myIcon = new BMap.Icon(image, new BMap.Size(40, 40), {
		//			anchor: new BMap.Size(10, 25),
		//			imageOffset: new BMap.Size(0, 0 - index * 25) // 设置图片偏移    
		anchor: new BMap.Size(14, 22),
		imageOffset: new BMap.Size(0, 0)
	});
	var sContent =
		"<div style='width:60px;float:left;margin-right:10px;text-align: center;'><img style='margin: 0 4px;display:block;' src='img/woman.png' width='50' height='50' /><h6 style='margin:0 0 5px 0;text-align: center;'>" + info[index].oldman[0].name + "</h6><h4 style='color:#58ceea;;text-align: center;'>服务中</h4></div>" +
		"<div style='float:left;width:220px;padding-left: 10px; border-left: 1px solid #cccc;'><p style='margin:3px 0;line-height:1.5;font-size:13px;'>服务时间:xxxxx</p>" +
		"<p style='margin:3px 0;line-height:1.5;font-size:13px;'>服务地址:xxxxxxxxxxxx</p>" +
		"<p style='margin:3px 0;line-height:1.5;font-size:13px;'>服务项目:xxxxxxxxxxxx</p>" +
		"<p style='margin:3px 0;line-height:1.5;font-size:13px;'>护理员姓名:" + info[index].name + "</p>" +
		"<p style='margin:3px 0;line-height:1.5;font-size:13px;'>签到时间:2018-09-10 15:30:12</p>" +
		"</div></div>";
	var infoWindow = new BMap.InfoWindow(sContent);
	var marker = new BMap.Marker(point, { // 创建标注对象并添加到地图   
		icon: myIcon
	});
	marker.addEventListener('click', function(event) {
		this.openInfoWindow(infoWindow);
		//			this.openInfoWindow(new BMap.InfoWindow(index.toString()));
	});

	var label = new BMap.Label(info[index].name, {
		offset: new BMap.Size(-5, 25)
	});
	marker.setLabel(label);
	map1.addOverlay(marker);
}

map1.setMapStyle({
	styleJson: arr
});

/////////////// 添加地图控件           //////////////////////

function ZoomControl() {
	this.defaultAnchor = BMAP_ANCHOR_TOP_RIGHT; // 默认停靠位置和偏移量
	this.defaultOffset = new BMap.Size(10, 10);
}
ZoomControl.prototype = new BMap.Control(); // 通过JavaScript的prototype属性继承于BMap.Control		
ZoomControl.prototype.initialize = function(map) { // 自定义控件必须实现自己的initialize方法,并且将控件的DOM元素返回// 在本方法中创建个div元素作为控件的容器,并将其添加到地图容器中
	var div = document.createElement("div"); // 创建一个DOM元素
	var img = $("<img src='./img/quanpin.png' style='width: 30px;height: 30px;'/>")
	$(div).append(img)
	div.style.cursor = "pointer"; // 设置样式
	map.getContainer().appendChild(div);
	(function($) {
		$.support.fullscreen = supportFullScreen();
		$.fn.fullScreen = function(props) {
			if(!$.support.fullscreen || this.length != 1) {
				return this;
			}
			if(fullScreenStatus()) {
				cancelFullScreen();
				return this;
			}
			var options = $.extend({
				'background': '#111',
				'callback': function() {}
			}, props);
			var fs = $('<div>', {
				'css': {
					'overflow-y': 'auto',
					'background': options.background,
					'width': '100%',
					'height': '100%',
					'align': 'center'
				}
			});
			var elem = this;
			elem.addClass('fullScreen');
			fs.insertBefore(elem);
			fs.append(elem);
			requestFullScreen(fs.get(0));
			fs.click(function(e) {
				if(e.target == this) {
					cancelFullScreen();
				}
			});
			elem.cancel = function() {
				cancelFullScreen();
				return elem;
			};
			onFullScreenEvent(function(fullScreen) {
				if(!fullScreen) {
					elem.removeClass('fullScreen').insertBefore(fs);
					fs.remove();
				}
				options.callback(fullScreen);
			});
			return elem;
		};

		function supportFullScreen() {
			var doc = document.documentElement;
			return('requestFullscreen' in doc) ||
				('mozRequestFullScreen' in doc && document.mozFullScreenEnabled) ||
				('webkitRequestFullScreen' in doc);
		}

		function requestFullScreen(elem) {
			if(elem.requestFullscreen) {
				elem.requestFullscreen();
			} else if(elem.mozRequestFullScreen) {
				elem.mozRequestFullScreen();
			} else if(elem.webkitRequestFullScreen) {
				elem.webkitRequestFullScreen();
			}
		}

		function fullScreenStatus() {
			return document.fullscreen ||
				document.mozFullScreen ||
				document.webkitIsFullScreen;
		}

		function cancelFullScreen() {
			if(document.exitFullscreen) {
				document.exitFullscreen();
			} else if(document.mozCancelFullScreen) {
				document.mozCancelFullScreen();
			} else if(document.webkitCancelFullScreen) {
				document.webkitCancelFullScreen();
			}
		}

		function onFullScreenEvent(callback) {
			$(document).on("fullscreenchange mozfullscreenchange webkitfullscreenchange", function() {
				callback(fullScreenStatus());
			});
		}
	})(jQuery);
	$(function() {
		div.addEventListener("click", function() {
			$("#collapse-panel-43").fullScreen();
		});
	});
	return div; // 将DOM元素返回
}
// 创建控件	
var twoZoomCtrl = new ZoomControl();
// 添加到地图当中
map1.addControl(twoZoomCtrl);
/////////设置地图风格/    //////////