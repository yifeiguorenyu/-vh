var myChart = echarts.init(document.getElementById('main1'));
	option = {
		backgroundColor: '#02123b',

		title: {
			text: '老人等级分析',
			left: 'center',
			top: 15,
			textStyle: {
				color: '#02b4df',
				fontSize: 14
			}
		},

		tooltip: {
			trigger: 'item',
			formatter: "{a} <br/>{b} : {c} ({d}%)"
		},

		visualMap: {
			show: false,
			min: 80,
			max: 600,
			inRange: {
				colorLightness: [0, 1]
			}
		},
		series: [{
			type: 'pie',
			radius: '50%',
			center: ['50%', '55%'],
			data: [{
					value: 89,
					name: '二级  89人'
				},
				{
					value: 120,
					name: '三级  120人'
				},
				{
					value: 150,
					name: '四级  150人'
				},
				{
					value: 91,
					name: '五级  91人'
				},
				{
					value: 100,
					name: '六级  100人'
				}
			].sort(function(a, b) {
				return a.value - b.value;
			}),
			roseType: 'radius',
			label: {
				normal: {
					textStyle: {
						fontSize: 11,
						color: '#69d4f5',
						fontWeight:"700"
					}
				}
			},
			labelLine: {
				normal: {
					lineStyle: {
						color: '#4ccff7'
					},
					smooth: 0.2,
					length: 4,
					length2: 4
				}
			},
			itemStyle: {
				normal: {
					color: '#c23531',
					shadowBlur: 200,
					shadowColor: 'rgba(0, 0, 0, 0.5)'
				}
			},

			animationType: 'scale',
			animationEasing: 'elasticOut',
			animationDelay: function(idx) {
				return Math.random() * 200;
			}
		}]
	};

myChart.setOption(option);

