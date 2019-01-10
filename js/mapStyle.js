function mapStyle(){
	
	var arr = [{
			"featureType": "poi",
			"elementType": "all",
			"stylers": {
				"visibility": "off"
			}
		},
		{
			"featureType": "all",
			"elementType": "labels.icon",
			"stylers": {
				"visibility": "off"
			}
		},
		{
			"featureType": "road",
			"elementType": "geometry.fill",
			"stylers": {
				"color": "#ceeef8ff"
			}
		},
		{
			"featureType": "road",
			"elementType": "all",
			"stylers": {
				"lightness": 20
			}
		},
		{
			"featureType": "highway",
			"elementType": "geometry.fill",
			"stylers": {
				"color": "#ceeef8ff"
			}
		},
		{
			"featureType": "subway",
			"elementType": "all",
			"stylers": {
				"visibility": "off"
			}
		},
		{
			"featureType": "local",
			"elementType": "labels",
			"stylers": {
				"visibility": "off"
			}
		},
		{
			"featureType": "water",
			"elementType": "all",
			"stylers": {
				"color": "#d1e5ff"
			}
		},
		{
			"featureType": "road",
			"elementType": "all",
			"stylers": {
				"lightness": 20
			}
		},
		{
			"featureType": "all",
			"elementType": "labels",
			"stylers": {
				"color": "#bebebe3b",

			}
		},
		{
			"featureType": "all",
			"elementType": "labels.text.fill",
			"stylers": {
				"color": "#2da0c6",
				"visibility": "on"
			}
		}
	];
	return arr;
}
