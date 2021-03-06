$.getJSON('js/shandong.json', function(data) {
			echarts.registerMap('shandong', data);
			var Liang = echarts.init(document.querySelector('.Zhong-l'));
			option = {
				title:{
						x:'center',
//					link:'http://www.baidu.com',  
//					subtext:'假的',
//					itemGap:60
				},
				textStyle:{
					
					color:'#fff',
				},
				
				tooltip:{
					trigger:'item',
				},
				legend:{
//					orient:'vertical',
				},
				
				series:[
				    {
				    	type:'map',
				    	name:'成交总额度',
				    	map:'shandong',
				    	roam:true,//滚轮缩放
				    	itemStyle:{
				    		normal:{
				    			label:{
				    				show:true,
				    				textStyle:{
				    					color:'black',
				    					fontSize:15,
				    				},
				    			},
				    			borderColor:'#8AC5DF',
				    			borderWidth:3,
				    		},
				    		emphasis:{
				    		  areaColor:'#f0ffff',
				    			label:{
				    				show:true,
				    				textStyle:{
				    					color:'rgb(255, 165, 0)',
				    					fontSize:15,
				    					fontWeight:'bold',
				    				}
				    			 },
				    		},
				    	},
				    	data:[
				        {name: '威海市',value: Math.round(Math.random()*1000)},  
                        {name: '烟台市',value: Math.round(Math.random()*1000)},  
                        {name: '东营市',value: Math.round(Math.random()*1000)},  
                        {name: '滨州市',value: Math.round(Math.random()*1000)},  
                        {name: '德州市',value: Math.round(Math.random()*1000)},  
                        {name: '济南市',value: Math.round(Math.random()*1000)},  
                        {name: '聊城市',value: Math.round(Math.random()*1000)},  
                        {name: '淄博市',value: Math.round(Math.random()*1000)},  
                        {name: '潍坊市',value: Math.round(Math.random()*1000)},  
                        {name: '青岛市',value: Math.round(Math.random()*1000)},  
                        {name: '泰安市',value: Math.round(Math.random()*1000)},  
                        {name: '莱芜市',value: Math.round(Math.random()*1000)},  
                        {name: '日照市',value: Math.round(Math.random()*1000)},  
                        {name: '临沂市',value: Math.round(Math.random()*1000)},  
                        {name: '菏泽市',value: Math.round(Math.random()*1000)},  
                        {name: '枣庄市',value: Math.round(Math.random()*1000)},  
                        {name: '济宁市',value: Math.round(Math.random()*1000)},  
				        ]
				    }
				],
			}
			Liang.setOption(option);
			Liang.on('click',function(params){
            var city = params.name;
            if( city == '威海市'){
            	window.location.href = 'HaiWei.html';
            }
            if(city == '烟台市'){
            	window.location.href = 'YanTai.html';
            }
            if(city == '东营市'){
            	window.location.href = 'DongYing.html';
            }
            if(city == '滨州市'){
            	window.location.href = 'BingZhou.html';
            }
            if(city == '德州市'){
            	window.location.href = 'DeZho.html';
            }
            if(city == '济南市'){
            	window.location.href = 'jiNan.html';
            }
            if(city == '聊城市'){
            	window.location.href = 'LiaoCheng.html';
            }
            if(city == '淄博市'){
            	window.location.href = 'ZIBo.html';
            }
            if(city == '潍坊市'){
            	window.location.href = 'WeiFang.html';
            }
            if(city == '青岛市'){
            	window.location.href = 'QingTAo.html';
            }
            if(city == '泰安市'){
            	window.location.href = 'TaiAn.html';
            }
            if(city == '莱芜市'){
            	window.location.href = 'LaiWu.html';
            }
            if(city == '日照市'){
            	window.location.href = 'RiZhao.html';
            }
            if(city == '临沂市'){
            	window.location.href = 'LinYi.html';
            }
            if(city == '菏泽市'){
            	window.location.href = 'HeZi.html';
            }
            if(city == '枣庄市'){
            	window.location.href = 'ZaoZhuang.html';
            } 
            if(city == '济宁市'){
            	window.location.href = 'jiNing.html';
            }
			})




var Ming = echarts.init(document.querySelector('.Ming'));
 optionC ={
 	textStyle:{
			color:'#fff',
			fontSize:"15",
		},
 	title:{
 		x:'top',
 		text:'2017临沂市采购趋势量',
 		textStyle:{
 			color:'#dfb050',
 			fontSize:20,
 		}
 	},
 	tooltip:{
 		trigger:'axis',
 	},
	xAxis:[{
		type:'category',
		data:['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
	}],
	yAxis:[{
		type:'value',
		min:-50,
		max:100,
		interval:50,
	}],
	series:[
	    {
	    	type:'line',
	    	itemStyle:{
	    		normal:{
	    			color:'red',
	    			label:{
	    				show:true,
	    				position:'top'
	    				

	    			}
	    		}
	    	},
	    	data:[43,60,58,72,44,36,87,94,55,72,69,88]
	    }
	   ]
};	
	Ming.setOption(optionC);
	
	
	
	
	
	
var Zha = echarts.init(document.querySelector('.Zha'));
	optionQ= {
		textStyle:{
			color:'#fff',
			fontSize:"15",
		},
		title:{
 		text:'2017临沂市成交量趋势图：',
 		textStyle:{
 			color:'#dfb050',
 			fontSize:20,
 		}
 	},
		tooltip:{
			trigger:'axis'
		},
		xAxis:[{
			type:'category',
		    data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
		}],
		yAxis:[{
			min:0,
			max:2000,
			interval:500
		}],
		series:[
		    { 
		    	type:'bar',
		     	name:'用户总数量',
		    	itemStyle:{
		    		normal:{
		    			color:'red',
		    			label:{
		    				show:true,
		    				position:'top',
		    			}
		    		},
		    	},
		    	barWidth:15,
			   data: [800, 500, 1300, 1500, 1800, 1600, 500, 1600, 1700, 1564, 1780, 1500]
		    },
		    {
		    	type:'line',
		    	name:'成交总数量',
		    	itemStyle:{
		    		normal:{
		    			color:"aqua"
		    		}
		    	},
			   data: [800, 500, 1300, 1500, 1800, 1600, 500, 1600, 1700, 1564, 1780, 1500]
		    }
		  
		]
	}
	Zha.setOption(optionQ);
	
	
	var optionA = {
		title:{
 		text:'2017山东基本数据',
 		top:'2%',
 		left:'2%',
 		textStyle:{
 			color:'#dfb050',
 			fontSize:20,
 		     }
 	        },
		    legend: {
		        align:'left',
		        left:'20%',
		        top:'30%',
		        orient:'vertical',
		        data:['GDP','成交量    ','供货量   ','供货量'],
		        textStyle:{
		        	color:'#fff',
		        },
		        tooltip: {
			        show: true
			    }
		    },
		    calculable : true,
		    series : 
		        {
		            name:'亿美元',
		            type:'pie',
		            radius : '70%',
		            center : ['60%', '50%'],
		            roseType : 'area',
		              label: {
		                normal: {
		                    show:true,
		                    textStyle:{
		                    	color:'#fff',
		                    }
		                },
		                emphasis: {
		                    show: true
		                }
		            },
		            labelLine: {
		                normal: {
		                    show: false,
		                    length:4,
		                },
		                emphasis: {
		                    show: true
		                }
		            },
		            
		            itemStyle: {
                                normal: {
							        color: function(params) {
                                        // build a color map as your need.
                                        var colorList=[{
									    type: 'linear',
									    colorStops: [{
									        offset: 0,
									        color: '#FDBC16' // 0% 处的颜色
									    }, {
									        offset: 1, 
									        color: '#879560' // 100% 处的颜色
									    }],
									},{
									    type: 'linear',
									    colorStops: [{
									        offset: 0, color: 'green' // 0% 处的颜色
									    }, {
									        offset: 1, color: 'yellow' // 100% 处的颜色
									    }],
									},{
									    type: 'linear',
									    colorStops: [{
									        offset: 0, color: 'silver' // 0% 处的颜色
									    }, {
									        offset: 1, color: 'aqua' // 100% 处的颜色
									    }],
									},{
									    colorStops: [{
									        offset: 0, color: '#005789' // 0% 处的颜色
									    }, {
									        offset: 1, color: '#399cb8' // 100% 处的颜色
									    }],
									}];
                                        return colorList[params.dataIndex]
                                    }
                               },
                            },
		            data:[
		                {value:10, name:'GDP'},
		                {value:5, name:'成交量    '},
		                {value:15, name:'供货量   '},
		                {value:25, name:'供货量'},
		            ]
		        }
	}
	
	
	$('.SASA').on('click',function(){
			$('<div class="MoMo"></div>').appendTo('.FA');
			$('.FA').animate({
				'width': '70%',
				'height': '60%',
				'background': '#2F79BE',
                'right':'15%',
				'position': 'absolute',
				'top': '25%',
				'z-index': '9999999999'
				},300,function(){
			var   MoMo =  echarts.init(document.querySelector('.MoMo'));
			MoMo.setOption(optionA);
				})
			$('.II').css('display','block')
		});
	$('.So').on('click',function(){
			$('.MoMo').remove();
			$('.FA').css('width','0');
			$('.FA').css('height','0');
			$('.II').css('display','none')
		})
})

$('.DADA').on('click',function(){
	$('<div class="GG"></div>').appendTo('.FC');
	$('.FC').animate({
		'width': '70%',
		'height': '60%',
		'background': '#2F79BE',
        'right':'15%',
		'position': 'absolute',
		'top': '25%',
		'z-index': '9999999999'
	},300,function(){
		var   Gb =  echarts.init(document.querySelector('.GG'));
			  Gb.setOption(optionC);
	})
	$('.DD').css('display','block')
})
$('.UU').on('click',function(){
			$('.GG').remove();
			$('.FC').css('width','0');
			$('.FC').css('height','0');
			$('.DD').css('display','none')
	});


$('.SXSX').on('click',function(){
	$('<div class="TU"></div>').appendTo('.FG');
	$('.FG').animate({
		'width': '70%',
		'height': '60%',
		'background': '#2F79BE',
        'right':'15%',
		'position': 'absolute',
		'top': '25%',
		'z-index': '9999999999'
	},300,function(){
		var   Yi =  echarts.init(document.querySelector('.TU'));
			  Yi.setOption(optionQ);
	})
	$('.JJ').css('display','block')
})
$('.YU').on('click',function(){
			$('.TU').remove();
			$('.FG').css('width','0');
			$('.FG').css('height','0');
			$('.JJ').css('display','none')
		})
