
///////////////////색상. 테마.////////////////
	var itemStyleType1 = {
		normal: {
			  label: {
				show: true
			  },
			  labelLine: {
				show: true
			  }
			},
			emphasis: {
			  label: {
				show: true,
				position: 'center',
				textStyle: {
				  fontSize: '14',
				  fontWeight: 'normal'
				}
			  }
			}
		  };
		  
	var itemStyleType2 =  {
	    normal : {
	        label : {
	            show : false
	        },
	        labelLine : {
	            show : false
	        }
	    },
	    emphasis : {
	        label : {
	            show : true,
	            position : 'center',
	            textStyle : {
	                fontSize : '24',
	                fontWeight : 'bold'
	            }
	        }
	    }
	};
	   	
   	

	var theme = {
	    // 默认色板
	    color: [
	    		'#009dda','#8ac43d','#f7931a','#ef5921','#01539e',	//플젝 색상
		        '#ea1d2e','#8d98b3','#e5cf0d','#97b552','#95706d',	//플젝 색상
		        '#2ec7c9','#b6a2de','#5ab1ef','#ffb980','#d87a80',	//기본 색상
				'#45B3DA','#A2C467','#F7AC57','#EB887E','#FAD650',	//추천 색상
		        '#07a2a4','#9a7fd1','#588dd5','#f5994e','#c05050',
		        '#59678c','#c9ab00','#7eb00a','#6f5553','#c14089',
		        '#a5a5a7','#017fb3','#79ae38','#f5a732','#ed5117',
		        '#65b8d8','#bce08b','#ffbe70','#fbaf92','#e4e4e4'
		],
			   /* color: [
				        '#009dda','#8ac43d','#f7931a','#ef5921','#a6a8aa',
				        '#8d98b3','#e5cf0d','#97b552','#95706d','#dc69aa',
				        '#07a2a4','#9a7fd1','#588dd5','#f5994e','#c05050',
				        '#59678c','#c9ab00','#7eb00a','#6f5553','#c14089',
				        '#a5a5a7','#017fb3','#79ae38','#f5a732','#ed5117',
				        '#65b8d8','#bce08b','#ffbe70','#fbaf92','#e4e4e4',
				        '#2ec7c9','#b6a2de','#5ab1ef','#ffb980','#d87a80'
				    ],*/
	
	    // 图表标题
	    title: {
	        textStyle: {
	            fontWeight: 'normal',
	            //color: '#008acd'          // 主标题文字颜色
            	color: '#4c5f7b'         	//#008acd에서 탑메뉴 색상을 변경 
	        }
	    },
	    
	    // 值域
	    dataRange: {
	        itemWidth: 15,
	        color: ['#5ab1ef','#e0ffff']
	    },
	
	    // 工具箱
	    toolbox: {
	        color : ['#1e90ff', '#1e90ff', '#1e90ff', '#1e90ff'],
	        effectiveColor : '#ff4500'
	    },
	
	    // 提示框
	    tooltip: {
	        backgroundColor: 'rgba(50,50,50,0.5)',     // 提示背景颜色，默认为透明度为0.7的黑色
	        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
	            type : 'line',         // 默认为直线，可选为：'line' | 'shadow'
	            lineStyle : {          // 直线指示器样式设置
	                color: '#4c5f7b'
	            },
	            crossStyle: {
	                color: '#4c5f7b'
	            },
	            shadowStyle : {                     // 阴影指示器样式设置
	                color: 'rgba(200,200,200,0.2)'
	            }
	        }
	    },
	
	    // 区域缩放控制器
	    dataZoom: {
	        dataBackgroundColor: '#efefff',            // 数据背景颜色
	        fillerColor: 'rgba(182,162,222,0.2)',   // 填充颜色
	        handleColor: '#4c5f7b'    // 手柄颜色
	    },
	
	    // 网格
	    grid: {
	        borderColor: '#eee'
	    },
	
	    // 类目轴
	    categoryAxis: {
	        axisLine: {            // 坐标轴线
	            lineStyle: {       // 属性lineStyle控制线条样式
	                color: '#4c5f7b'
	            }
	        },
	        splitLine: {           // 分隔线
	            lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
	                color: ['#eee']
	            }
	        }
	    },
	
	    // 数值型坐标轴默认参数
	    valueAxis: {
	        axisLine: {            // 坐标轴线
	            lineStyle: {       // 属性lineStyle控制线条样式
	                color: '#4c5f7b'
	            }
	        },
	        splitArea : {
	            show : true,
	            areaStyle : {
	                color: ['rgba(250,250,250,0.1)','rgba(200,200,200,0.1)']
	            }
	        },
	        splitLine: {           // 分隔线
	            lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
	                color: ['#eee']
	            }
	        }
	    },
	
	    polar : {
	        axisLine: {            // 坐标轴线
	            lineStyle: {       // 属性lineStyle控制线条样式
	                color: '#ddd'
	            }
	        },
	        splitArea : {
	            show : true,
	            areaStyle : {
	                color: ['rgba(250,250,250,0.2)','rgba(200,200,200,0.2)']
	            }
	        },
	        splitLine : {
	            lineStyle : {
	                color : '#ddd'
	            }
	        }
	    },
	
	    timeline : {
	        lineStyle : {
	            color : '#4c5f7b'
	        },
	        controlStyle : {
	            normal : { color : '#4c5f7b'},
	            emphasis : { color : '#4c5f7b'}
	        },
	        symbol : 'emptyCircle',
	        symbolSize : 3
	    },
	
	    // 柱形图默认参数
	    bar: {
	        itemStyle: {
	            normal: {
	                barBorderRadius: 5
	            },
	            emphasis: {
	                barBorderRadius: 5
	            }
	        }
	    },
	
	    // 折线图默认参数
	    line: {
	        smooth : true,
	        symbol: 'emptyCircle',  // 拐点图形类型
	        symbolSize: 3           // 拐点图形大小
	    },
	    
	    // K线图默认参数
	    k: {
	        itemStyle: {
	            normal: {
	                color: '#d87a80',       // 阳线填充颜色
	                color0: '#2ec7c9',      // 阴线填充颜色
	                lineStyle: {
	                    color: '#d87a80',   // 阳线边框颜色
	                    color0: '#2ec7c9'   // 阴线边框颜色
	                }
	            }
	        }
	    },
	    
	    // 散点图默认参数
	    scatter: {
	        symbol: 'circle',    // 图形类型
	        symbolSize: 4        // 图形大小，半宽（半径）参数，当图形为方向或菱形则总宽度为symbolSize * 2
	    },
	
	    // 雷达图默认参数
	    radar : {
	        symbol: 'emptyCircle',    // 图形类型
	        symbolSize:3
	        //symbol: null,         // 拐点图形类型
	        //symbolRotate : null,  // 图形旋转控制
	    },
	
	    map: {
	        itemStyle: {
	            normal: {
	                areaStyle: {
	                    color: '#ddd'
	                },
	                label: {
	                    textStyle: {
	                        color: '#d87a80'
	                    }
	                }
	            },
	            emphasis: {                 // 也是选中样式
	                areaStyle: {
	                    color: '#fe994e'
	                }
	            }
	        }
	    },
	    
	    force : {
	        itemStyle: {
	            normal: {
	                linkStyle : {
	                    color : '#1e90ff'
	                }
	            }
	        }
	    },
	
	    chord : {
	        itemStyle : {
	            normal : {
	                borderWidth: 1,
	                borderColor: 'rgba(128, 128, 128, 0.5)',
	                chordStyle : {
	                    lineStyle : {
	                        color : 'rgba(128, 128, 128, 0.5)'
	                    }
	                }
	            },
	            emphasis : {
	                borderWidth: 1,
	                borderColor: 'rgba(128, 128, 128, 0.5)',
	                chordStyle : {
	                    lineStyle : {
	                        color : 'rgba(128, 128, 128, 0.5)'
	                    }
	                }
	            }
	        }
	    },
	
	    gauge : {
	        axisLine: {            // 坐标轴线
	            lineStyle: {       // 属性lineStyle控制线条样式
	                color: [[0.2, '#2ec7c9'],[0.8, '#5ab1ef'],[1, '#d87a80']], 
	                width: 10
	            }
	        },
	        axisTick: {            // 坐标轴小标记
	            splitNumber: 10,   // 每份split细分多少段
	            length :15,        // 属性length控制线长
	            lineStyle: {       // 属性lineStyle控制线条样式
	                color: 'auto'
	            }
	        },
	        splitLine: {           // 分隔线
	            length :22,         // 属性length控制线长
	            lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
	                color: 'auto'
	            }
	        },
	        pointer : {
	            width : 5
	        }
	    },
	    
	    textStyle: {
	        fontFamily: '나눔고딕, NanumGothic, Malgun Gothic, 돋움, Dotum, helvetica, arial, sans-serif'
	    }
	};
	
	  
	var theme_gentelella = {
		  color: [
			  '#26B99A', '#34495E', '#BDC3C7', '#3498DB',
			  '#9B59B6', '#8abb6f', '#759c6a', '#bfd3b7'
		  ],

		  title: {
			  itemGap: 8,
			  textStyle: {
				  fontWeight: 'normal',
				  color: '#408829'
			  }
		  },

		  dataRange: {
			  color: ['#1f610a', '#97b58d']
		  },

		  toolbox: {
			  color: ['#408829', '#408829', '#408829', '#408829']
		  },

		  tooltip: {
			  backgroundColor: 'rgba(0,0,0,0.5)',
			  axisPointer: {
				  type: 'line',
				  lineStyle: {
					  color: '#408829',
					  type: 'dashed'
				  },
				  crossStyle: {
					  color: '#408829'
				  },
				  shadowStyle: {
					  color: 'rgba(200,200,200,0.3)'
				  }
			  }
		  },

		  dataZoom: {
			  dataBackgroundColor: '#eee',
			  fillerColor: 'rgba(64,136,41,0.2)',
			  handleColor: '#408829'
		  },
		  grid: {
			  borderWidth: 0
		  },

		  categoryAxis: {
			  axisLine: {
				  lineStyle: {
					  color: '#408829'
				  }
			  },
			  splitLine: {
				  lineStyle: {
					  color: ['#eee']
				  }
			  }
		  },

		  valueAxis: {
			  axisLine: {
				  lineStyle: {
					  color: '#408829'
				  }
			  },
			  splitArea: {
				  show: true,
				  areaStyle: {
					  color: ['rgba(250,250,250,0.1)', 'rgba(200,200,200,0.1)']
				  }
			  },
			  splitLine: {
				  lineStyle: {
					  color: ['#eee']
				  }
			  }
		  },
		  timeline: {
			  lineStyle: {
				  color: '#408829'
			  },
			  controlStyle: {
				  normal: {color: '#408829'},
				  emphasis: {color: '#408829'}
			  }
		  },

		  k: {
			  itemStyle: {
				  normal: {
					  color: '#68a54a',
					  color0: '#a9cba2',
					  lineStyle: {
						  width: 1,
						  color: '#408829',
						  color0: '#86b379'
					  }
				  }
			  }
		  },
		  map: {
			  itemStyle: {
				  normal: {
					  areaStyle: {
						  color: '#ddd'
					  },
					  label: {
						  textStyle: {
							  color: '#c12e34'
						  }
					  }
				  },
				  emphasis: {
					  areaStyle: {
						  color: '#99d2dd'
					  },
					  label: {
						  textStyle: {
							  color: '#c12e34'
						  }
					  }
				  }
			  }
		  },
		  force: {
			  itemStyle: {
				  normal: {
					  linkStyle: {
						  strokeColor: '#408829'
					  }
				  }
			  }
		  },
		  chord: {
			  padding: 4,
			  itemStyle: {
				  normal: {
					  lineStyle: {
						  width: 1,
						  color: 'rgba(128, 128, 128, 0.5)'
					  },
					  chordStyle: {
						  lineStyle: {
							  width: 1,
							  color: 'rgba(128, 128, 128, 0.5)'
						  }
					  }
				  },
				  emphasis: {
					  lineStyle: {
						  width: 1,
						  color: 'rgba(128, 128, 128, 0.5)'
					  },
					  chordStyle: {
						  lineStyle: {
							  width: 1,
							  color: 'rgba(128, 128, 128, 0.5)'
						  }
					  }
				  }
			  }
		  },
		  gauge: {
			  startAngle: 225,
			  endAngle: -45,
			  axisLine: {
				  show: true,
				  lineStyle: {
					  color: [[0.2, '#86b379'], [0.8, '#68a54a'], [1, '#408829']],
					  width: 8
				  }
			  },
			  axisTick: {
				  splitNumber: 10,
				  length: 12,
				  lineStyle: {
					  color: 'auto'
				  }
			  },
			  axisLabel: {
				  textStyle: {
					  color: 'auto'
				  }
			  },
			  splitLine: {
				  length: 18,
				  lineStyle: {
					  color: 'auto'
				  }
			  },
			  pointer: {
				  length: '90%',
				  color: 'auto'
			  },
			  title: {
				  textStyle: {
					  color: '#333'
				  }
			  },
			  detail: {
				  textStyle: {
					  color: 'auto'
				  }
			  }
		  },
		  textStyle: {
			  fontFamily: 'Arial, Verdana, sans-serif'
		  }
	  };
	

	var theme_red = {

		    // 默认色板
		    color: [
		        '#d8361b','#f16b4c','#f7b4a9','#d26666',
		        '#99311c','#c42703','#d07e75'
		    ],

		    // 图表标题
		    title: {
		        textStyle: {
		            fontWeight: 'normal',
		            color: '#d8361b'
		        }
		    },
		    
		    // 值域
		    dataRange: {
		        color:['#bd0707','#ffd2d2']
		    },

		    // 工具箱
		    toolbox: {
		        color : ['#d8361b','#d8361b','#d8361b','#d8361b']
		    },

		    // 提示框
		    tooltip: {
		        backgroundColor: 'rgba(0,0,0,0.5)',
		        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
		            type : 'line',         // 默认为直线，可选为：'line' | 'shadow'
		            lineStyle : {          // 直线指示器样式设置
		                color: '#d8361b',
		                type: 'dashed'
		            },
		            crossStyle: {
		                color: '#d8361b'
		            },
		            shadowStyle : {                     // 阴影指示器样式设置
		                color: 'rgba(200,200,200,0.3)'
		            }
		        }
		    },

		    // 区域缩放控制器
		    dataZoom: {
		        dataBackgroundColor: '#eee',            // 数据背景颜色
		        fillerColor: 'rgba(216,54,27,0.2)',   // 填充颜色
		        handleColor: '#d8361b'     // 手柄颜色
		    },
		    
		    // 网格
		    grid: {
		        borderWidth: 0
		    },

		    // 类目轴
		    categoryAxis: {
		        axisLine: {            // 坐标轴线
		            lineStyle: {       // 属性lineStyle控制线条样式
		                color: '#d8361b'
		            }
		        },
		        splitLine: {           // 分隔线
		            lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
		                color: ['#eee']
		            }
		        }
		    },

		    // 数值型坐标轴默认参数
		    valueAxis: {
		        axisLine: {            // 坐标轴线
		            lineStyle: {       // 属性lineStyle控制线条样式
		                color: '#d8361b'
		            }
		        },
		        splitArea : {
		            show : true,
		            areaStyle : {
		                color: ['rgba(250,250,250,0.1)','rgba(200,200,200,0.1)']
		            }
		        },
		        splitLine: {           // 分隔线
		            lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
		                color: ['#eee']
		            }
		        }
		    },

		    timeline : {
		        lineStyle : {
		            color : '#d8361b'
		        },
		        controlStyle : {
		            normal : { color : '#d8361b'},
		            emphasis : { color : '#d8361b'}
		        }
		    },

		    // K线图默认参数
		    k: {
		        itemStyle: {
		            normal: {
		                color: '#f16b4c',          // 阳线填充颜色
		                color0: '#f7b4a9',      // 阴线填充颜色
		                lineStyle: {
		                    width: 1,
		                    color: '#d8361b',   // 阳线边框颜色
		                    color0: '#d26666'   // 阴线边框颜色
		                }
		            }
		        }
		    },
		    
		    map: {
		        itemStyle: {
		            normal: {
		                areaStyle: {
		                    color: '#ddd'
		                },
		                label: {
		                    textStyle: {
		                        color: '#c12e34'
		                    }
		                }
		            },
		            emphasis: {                 // 也是选中样式
		                areaStyle: {
		                    color: '#99d2dd'
		                },
		                label: {
		                    textStyle: {
		                        color: '#c12e34'
		                    }
		                }
		            }
		        }
		    },
		    
		    force : {
		        itemStyle: {
		            normal: {
		                linkStyle : {
		                    color : '#d8361b'
		                }
		            }
		        }
		    },
		    
		    chord : {
		        padding : 4,
		        itemStyle : {
		            normal : {
		                borderWidth: 1,
		                borderColor: 'rgba(128, 128, 128, 0.5)',
		                chordStyle : {
		                    lineStyle : {
		                        color : 'rgba(128, 128, 128, 0.5)'
		                    }
		                }
		            },
		            emphasis : {
		                borderWidth: 1,
		                borderColor: 'rgba(128, 128, 128, 0.5)',
		                chordStyle : {
		                    lineStyle : {
		                        color : 'rgba(128, 128, 128, 0.5)'
		                    }
		                }
		            }
		        }
		    },
		    
		    gauge : {
		        axisLine: {            // 坐标轴线
		            show: true,        // 默认显示，属性show控制显示与否
		            lineStyle: {       // 属性lineStyle控制线条样式
		                color: [[0.2, '#f16b4c'],[0.8, '#d8361b'],[1, '#99311c']], 
		                width: 8
		            }
		        },
		        axisTick: {            // 坐标轴小标记
		            splitNumber: 10,   // 每份split细分多少段
		            length :12,        // 属性length控制线长
		            lineStyle: {       // 属性lineStyle控制线条样式
		                color: 'auto'
		            }
		        },
		        axisLabel: {           // 坐标轴文本标签，详见axis.axisLabel
		            textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
		                color: 'auto'
		            }
		        },
		        splitLine: {           // 分隔线
		            length : 18,         // 属性length控制线长
		            lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
		                color: 'auto'
		            }
		        },
		        pointer : {
		            length : '90%',
		            color : 'auto'
		        },
		        title : {
		            textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
		                color: '#333'
		            }
		        },
		        detail : {
		            textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
		                color: 'auto'
		            }
		        }
		    },
		    
		    textStyle: {
		        fontFamily: '微软雅黑, Arial, Verdana, sans-serif'
		    }
	};

	var theme_green = {
	    // 默认色板
	    color: [
	        '#408829','#68a54a','#a9cba2','#86b379',
	        '#397b29','#8abb6f','#759c6a','#bfd3b7'
	    ],

	    // 图表标题
	    title: {
	        textStyle: {
	            fontWeight: 'normal',
	            color: '#408829'
	        }
	    },
	    
	    // 值域
	    dataRange: {
	        color:['#1f610a','#97b58d']
	    },

	    // 工具箱
	    toolbox: {
	        color : ['#408829','#408829','#408829','#408829']
	    },

	    // 提示框
	    tooltip: {
	        backgroundColor: 'rgba(0,0,0,0.5)',
	        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
	            type : 'line',         // 默认为直线，可选为：'line' | 'shadow'
	            lineStyle : {          // 直线指示器样式设置
	                color: '#408829',
	                type: 'dashed'
	            },
	            crossStyle: {
	                color: '#408829'
	            },
	            shadowStyle : {                     // 阴影指示器样式设置
	                color: 'rgba(200,200,200,0.3)'
	            }
	        }
	    },

	    // 区域缩放控制器
	    dataZoom: {
	        dataBackgroundColor: '#eee',            // 数据背景颜色
	        fillerColor: 'rgba(64,136,41,0.2)',   // 填充颜色
	        handleColor: '#408829'     // 手柄颜色
	    },
	    
	    // 网格
	    grid: {
	        borderWidth: 0
	    },

	    // 类目轴
	    categoryAxis: {
	        axisLine: {            // 坐标轴线
	            lineStyle: {       // 属性lineStyle控制线条样式
	                color: '#408829'
	            }
	        },
	        splitLine: {           // 分隔线
	            lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
	                color: ['#eee']
	            }
	        }
	    },

	    // 数值型坐标轴默认参数
	    valueAxis: {
	        axisLine: {            // 坐标轴线
	            lineStyle: {       // 属性lineStyle控制线条样式
	                color: '#408829'
	            }
	        },
	        splitArea : {
	            show : true,
	            areaStyle : {
	                color: ['rgba(250,250,250,0.1)','rgba(200,200,200,0.1)']
	            }
	        },
	        splitLine: {           // 分隔线
	            lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
	                color: ['#eee']
	            }
	        }
	    },

	    timeline : {
	        lineStyle : {
	            color : '#408829'
	        },
	        controlStyle : {
	            normal : { color : '#408829'},
	            emphasis : { color : '#408829'}
	        }
	    },

	    // K线图默认参数
	    k: {
	        itemStyle: {
	            normal: {
	                color: '#68a54a',          // 阳线填充颜色
	                color0: '#a9cba2',      // 阴线填充颜色
	                lineStyle: {
	                    width: 1,
	                    color: '#408829',   // 阳线边框颜色
	                    color0: '#86b379'   // 阴线边框颜色
	                }
	            }
	        }
	    },
	    
	    map: {
	        itemStyle: {
	            normal: {
	                areaStyle: {
	                    color: '#ddd'
	                },
	                label: {
	                    textStyle: {
	                        color: '#c12e34'
	                    }
	                }
	            },
	            emphasis: {                 // 也是选中样式
	                areaStyle: {
	                    color: '#99d2dd'
	                },
	                label: {
	                    textStyle: {
	                        color: '#c12e34'
	                    }
	                }
	            }
	        }
	    },
	    
	    force : {
	        itemStyle: {
	            normal: {
	                linkStyle : {
	                    color : '#408829'
	                }
	            }
	        }
	    },
	    
	    chord : {
	        padding : 4,
	        itemStyle : {
	            normal : {
	                borderWidth: 1,
	                borderColor: 'rgba(128, 128, 128, 0.5)',
	                chordStyle : {
	                    lineStyle : {
	                        color : 'rgba(128, 128, 128, 0.5)'
	                    }
	                }
	            },
	            emphasis : {
	                borderWidth: 1,
	                borderColor: 'rgba(128, 128, 128, 0.5)',
	                chordStyle : {
	                    lineStyle : {
	                        color : 'rgba(128, 128, 128, 0.5)'
	                    }
	                }
	            }
	        }
	    },
	    
	    gauge : {
	        axisLine: {            // 坐标轴线
	            show: true,        // 默认显示，属性show控制显示与否
	            lineStyle: {       // 属性lineStyle控制线条样式
	                color: [[0.2, '#86b379'],[0.8, '#68a54a'],[1, '#408829']], 
	                width: 8
	            }
	        },
	        axisTick: {            // 坐标轴小标记
	            splitNumber: 10,   // 每份split细分多少段
	            length :12,        // 属性length控制线长
	            lineStyle: {       // 属性lineStyle控制线条样式
	                color: 'auto'
	            }
	        },
	        axisLabel: {           // 坐标轴文本标签，详见axis.axisLabel
	            textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
	                color: 'auto'
	            }
	        },
	        splitLine: {           // 分隔线
	            length : 18,         // 属性length控制线长
	            lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
	                color: 'auto'
	            }
	        },
	        pointer : {
	            length : '90%',
	            color : 'auto'
	        },
	        title : {
	            textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
	                color: '#333'
	            }
	        },
	        detail : {
	            textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
	                color: 'auto'
	            }
	        }
	    },
	    
	    textStyle: {
	        fontFamily: '微软雅黑, Arial, Verdana, sans-serif'
	    }
	};


	var theme_blue = {
	    // 默认色板
	    color: [
	        '#1790cf','#1bb2d8','#99d2dd','#88b0bb',
	        '#1c7099','#038cc4','#75abd0','#afd6dd'
	    ],

	    // 图表标题
	    title: {
	        textStyle: {
	            fontWeight: 'normal',
	            color: '#1790cf'
	        }
	    },
	    
	    // 值域
	    dataRange: {
	        color:['#1178ad','#72bbd0']
	    },

	    // 工具箱
	    toolbox: {
	        color : ['#1790cf','#1790cf','#1790cf','#1790cf']
	    },

	    // 提示框
	    tooltip: {
	        backgroundColor: 'rgba(0,0,0,0.5)',
	        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
	            type : 'line',         // 默认为直线，可选为：'line' | 'shadow'
	            lineStyle : {          // 直线指示器样式设置
	                color: '#1790cf',
	                type: 'dashed'
	            },
	            crossStyle: {
	                color: '#1790cf'
	            },
	            shadowStyle : {                     // 阴影指示器样式设置
	                color: 'rgba(200,200,200,0.3)'
	            }
	        }
	    },

	    // 区域缩放控制器
	    dataZoom: {
	        dataBackgroundColor: '#eee',            // 数据背景颜色
	        fillerColor: 'rgba(144,197,237,0.2)',   // 填充颜色
	        handleColor: '#1790cf'     // 手柄颜色
	    },
	    
	    // 网格
	    grid: {
	        borderWidth: 0
	    },

	    // 类目轴
	    categoryAxis: {
	        axisLine: {            // 坐标轴线
	            lineStyle: {       // 属性lineStyle控制线条样式
	                color: '#1790cf'
	            }
	        },
	        splitLine: {           // 分隔线
	            lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
	                color: ['#eee']
	            }
	        }
	    },

	    // 数值型坐标轴默认参数
	    valueAxis: {
	        axisLine: {            // 坐标轴线
	            lineStyle: {       // 属性lineStyle控制线条样式
	                color: '#1790cf'
	            }
	        },
	        splitArea : {
	            show : true,
	            areaStyle : {
	                color: ['rgba(250,250,250,0.1)','rgba(200,200,200,0.1)']
	            }
	        },
	        splitLine: {           // 分隔线
	            lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
	                color: ['#eee']
	            }
	        }
	    },

	    timeline : {
	        lineStyle : {
	            color : '#1790cf'
	        },
	        controlStyle : {
	            normal : { color : '#1790cf'},
	            emphasis : { color : '#1790cf'}
	        }
	    },

	    // K线图默认参数
	    k: {
	        itemStyle: {
	            normal: {
	                color: '#1bb2d8',          // 阳线填充颜色
	                color0: '#99d2dd',      // 阴线填充颜色
	                lineStyle: {
	                    width: 1,
	                    color: '#1c7099',   // 阳线边框颜色
	                    color0: '#88b0bb'   // 阴线边框颜色
	                }
	            }
	        }
	    },
	    
	    map: {
	        itemStyle: {
	            normal: {
	                areaStyle: {
	                    color: '#ddd'
	                },
	                label: {
	                    textStyle: {
	                        color: '#c12e34'
	                    }
	                }
	            },
	            emphasis: {                 // 也是选中样式
	                areaStyle: {
	                    color: '#99d2dd'
	                },
	                label: {
	                    textStyle: {
	                        color: '#c12e34'
	                    }
	                }
	            }
	        }
	    },
	    
	    force : {
	        itemStyle: {
	            normal: {
	                linkStyle : {
	                    color : '#1790cf'
	                }
	            }
	        }
	    },
	    
	    chord : {
	        padding : 4,
	        itemStyle : {
	            normal : {
	                borderWidth: 1,
	                borderColor: 'rgba(128, 128, 128, 0.5)',
	                chordStyle : {
	                    lineStyle : {
	                        color : 'rgba(128, 128, 128, 0.5)'
	                    }
	                }
	            },
	            emphasis : {
	                borderWidth: 1,
	                borderColor: 'rgba(128, 128, 128, 0.5)',
	                chordStyle : {
	                    lineStyle : {
	                        color : 'rgba(128, 128, 128, 0.5)'
	                    }
	                }
	            }
	        }
	    },
	    
	    gauge : {
	        axisLine: {            // 坐标轴线
	            show: true,        // 默认显示，属性show控制显示与否
	            lineStyle: {       // 属性lineStyle控制线条样式
	                color: [[0.2, '#1bb2d8'],[0.8, '#1790cf'],[1, '#1c7099']], 
	                width: 8
	            }
	        },
	        axisTick: {            // 坐标轴小标记
	            splitNumber: 10,   // 每份split细分多少段
	            length :12,        // 属性length控制线长
	            lineStyle: {       // 属性lineStyle控制线条样式
	                color: 'auto'
	            }
	        },
	        axisLabel: {           // 坐标轴文本标签，详见axis.axisLabel
	            textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
	                color: 'auto'
	            }
	        },
	        splitLine: {           // 分隔线
	            length : 18,         // 属性length控制线长
	            lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
	                color: 'auto'
	            }
	        },
	        pointer : {
	            length : '90%',
	            color : 'auto'
	        },
	        title : {
	            textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
	                color: '#333'
	            }
	        },
	        detail : {
	            textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
	                color: 'auto'
	            }
	        } 
	    },
	    
	    textStyle: {
	        fontFamily: '微软雅黑, Arial, Verdana, sans-serif'
	    }
	};

	

	var theme_sttus = {
	    // 默认色板
	    color: [
		        '#cccccc','#1cbfd7','#2b5f90','#f1130f','#5cb85c','#485f71','#f0ad4e',
		        '#009dda','#8ac43d','#f7931a','#ef5921','#01539e',
		        '#ea1d2e','#8d98b3','#e5cf0d','#97b552','#95706d',
		        '#07a2a4','#9a7fd1','#588dd5','#f5994e','#c05050',
		        '#59678c','#c9ab00','#7eb00a','#6f5553','#c14089',
		        '#a5a5a7','#017fb3','#79ae38','#f5a732','#ed5117',
		        '#65b8d8','#bce08b','#ffbe70','#fbaf92','#e4e4e4',
		        '#2ec7c9','#b6a2de','#5ab1ef','#ffb980','#d87a80',
		    ],
	
	    // 图表标题
	    title: {
	        textStyle: {
	            fontWeight: 'normal',
	            //color: '#008acd'          // 主标题文字颜色
            	color: '#4c5f7b'         	//#008acd에서 탑메뉴 색상을 변경 
	        }
	    },
	    
	    // 值域
	    dataRange: {
	        itemWidth: 15,
	        color: ['#5ab1ef','#e0ffff']
	    },
	
	    // 工具箱
	    toolbox: {
	        color : ['#1e90ff', '#1e90ff', '#1e90ff', '#1e90ff'],
	        effectiveColor : '#ff4500'
	    },
	
	    // 提示框
	    tooltip: {
	        backgroundColor: 'rgba(50,50,50,0.5)',     // 提示背景颜色，默认为透明度为0.7的黑色
	        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
	            type : 'line',         // 默认为直线，可选为：'line' | 'shadow'
	            lineStyle : {          // 直线指示器样式设置
	                color: '#4c5f7b'
	            },
	            crossStyle: {
	                color: '#4c5f7b'
	            },
	            shadowStyle : {                     // 阴影指示器样式设置
	                color: 'rgba(200,200,200,0.2)'
	            }
	        }
	    },
	
	    // 区域缩放控制器
	    dataZoom: {
	        dataBackgroundColor: '#efefff',            // 数据背景颜色
	        fillerColor: 'rgba(182,162,222,0.2)',   // 填充颜色
	        handleColor: '#4c5f7b'    // 手柄颜色
	    },
	
	    // 网格
	    grid: {
	        borderColor: '#eee'
	    },
	
	    // 类目轴
	    categoryAxis: {
	        axisLine: {            // 坐标轴线
	            lineStyle: {       // 属性lineStyle控制线条样式
	                color: '#4c5f7b'
	            }
	        },
	        splitLine: {           // 分隔线
	            lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
	                color: ['#eee']
	            }
	        }
	    },
	
	    // 数值型坐标轴默认参数
	    valueAxis: {
	        axisLine: {            // 坐标轴线
	            lineStyle: {       // 属性lineStyle控制线条样式
	                color: '#4c5f7b'
	            }
	        },
	        splitArea : {
	            show : true,
	            areaStyle : {
	                color: ['rgba(250,250,250,0.1)','rgba(200,200,200,0.1)']
	            }
	        },
	        splitLine: {           // 分隔线
	            lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
	                color: ['#eee']
	            }
	        }
	    },
	
	    polar : {
	        axisLine: {            // 坐标轴线
	            lineStyle: {       // 属性lineStyle控制线条样式
	                color: '#ddd'
	            }
	        },
	        splitArea : {
	            show : true,
	            areaStyle : {
	                color: ['rgba(250,250,250,0.2)','rgba(200,200,200,0.2)']
	            }
	        },
	        splitLine : {
	            lineStyle : {
	                color : '#ddd'
	            }
	        }
	    },
	
	    timeline : {
	        lineStyle : {
	            color : '#4c5f7b'
	        },
	        controlStyle : {
	            normal : { color : '#4c5f7b'},
	            emphasis : { color : '#4c5f7b'}
	        },
	        symbol : 'emptyCircle',
	        symbolSize : 3
	    },
	
	    // 柱形图默认参数
	    bar: {
	        itemStyle: {
	            normal: {
	                barBorderRadius: 5
	            },
	            emphasis: {
	                barBorderRadius: 5
	            }
	        }
	    },
	
	    // 折线图默认参数
	    line: {
	        smooth : true,
	        symbol: 'emptyCircle',  // 拐点图形类型
	        symbolSize: 3           // 拐点图形大小
	    },
	    
	    // K线图默认参数
	    k: {
	        itemStyle: {
	            normal: {
	                color: '#d87a80',       // 阳线填充颜色
	                color0: '#2ec7c9',      // 阴线填充颜色
	                lineStyle: {
	                    color: '#d87a80',   // 阳线边框颜色
	                    color0: '#2ec7c9'   // 阴线边框颜色
	                }
	            }
	        }
	    },
	    
	    // 散点图默认参数
	    scatter: {
	        symbol: 'circle',    // 图形类型
	        symbolSize: 4        // 图形大小，半宽（半径）参数，当图形为方向或菱形则总宽度为symbolSize * 2
	    },
	
	    // 雷达图默认参数
	    radar : {
	        symbol: 'emptyCircle',    // 图形类型
	        symbolSize:3
	        //symbol: null,         // 拐点图形类型
	        //symbolRotate : null,  // 图形旋转控制
	    },
	
	    map: {
	        itemStyle: {
	            normal: {
	                areaStyle: {
	                    color: '#ddd'
	                },
	                label: {
	                    textStyle: {
	                        color: '#d87a80'
	                    }
	                }
	            },
	            emphasis: {                 // 也是选中样式
	                areaStyle: {
	                    color: '#fe994e'
	                }
	            }
	        }
	    },
	    
	    force : {
	        itemStyle: {
	            normal: {
	                linkStyle : {
	                    color : '#1e90ff'
	                }
	            }
	        }
	    },
	
	    chord : {
	        itemStyle : {
	            normal : {
	                borderWidth: 1,
	                borderColor: 'rgba(128, 128, 128, 0.5)',
	                chordStyle : {
	                    lineStyle : {
	                        color : 'rgba(128, 128, 128, 0.5)'
	                    }
	                }
	            },
	            emphasis : {
	                borderWidth: 1,
	                borderColor: 'rgba(128, 128, 128, 0.5)',
	                chordStyle : {
	                    lineStyle : {
	                        color : 'rgba(128, 128, 128, 0.5)'
	                    }
	                }
	            }
	        }
	    },
	
	    gauge : {
	        axisLine: {            // 坐标轴线
	            lineStyle: {       // 属性lineStyle控制线条样式
	                color: [[0.2, '#2ec7c9'],[0.8, '#5ab1ef'],[1, '#d87a80']], 
	                width: 10
	            }
	        },
	        axisTick: {            // 坐标轴小标记
	            splitNumber: 10,   // 每份split细分多少段
	            length :15,        // 属性length控制线长
	            lineStyle: {       // 属性lineStyle控制线条样式
	                color: 'auto'
	            }
	        },
	        splitLine: {           // 分隔线
	            length :22,         // 属性length控制线长
	            lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
	                color: 'auto'
	            }
	        },
	        pointer : {
	            width : 5
	        }
	    },
	    
	    textStyle: {
	        fontFamily: '나눔고딕, NanumGothic, Malgun Gothic, 돋움, Dotum, helvetica, arial, sans-serif'
	    }
	};
	