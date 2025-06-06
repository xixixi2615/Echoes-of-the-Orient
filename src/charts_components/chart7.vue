<template>
  <div class="chart-container" ref="chartRef" ></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import * as echarts from 'echarts';
import 'echarts-wordcloud'; // 引入词云插件

const chartRef = ref(null);
let chartInstance = null;

onMounted(() => {
  // 初始化图表
  chartInstance = echarts.init(chartRef.value, 'white', { renderer: 'canvas' });
  
  // 图表配置
  const option = {
    "animation": true,
    "animationThreshold": 2000,
    "animationDuration": 1000,
    "animationEasing": "cubicOut",
    "animationDelay": 0,
    "animationDurationUpdate": 300,
    "animationEasingUpdate": "cubicOut",
    "animationDelayUpdate": 0,
    "aria": {
        "enabled": false
    },
    "color": [
        "#5470c6",
        "#91cc75",
        "#fac858",
        "#ee6666",
        "#73c0de",
        "#3ba272",
        "#fc8452",
        "#9a60b4",
        "#ea7ccc"
    ],
    "series": [
        {
            "type": "wordCloud",
            "name": "\u97f3\u4e50\u5267\u8bcd\u9891",
            "shape": "diamond",
            "rotationRange": [
                0,
                0
            ],
            "rotationStep": 20,
            "girdSize": 10,
            "sizeRange": [
                10,
                80
            ],
            "data": [
                {
                    "name": "\u97f3\u4e50\u5267",
                    "value": "47",
                    "textStyle": {
                        "color": "rgb(149,125,97)"
                    }
                },
                {
                    "name": "\u751f\u6d3b",
                    "value": "35",
                    "textStyle": {
                        "color": "rgb(101,66,141)"
                    }
                },
                {
                    "name": "\u6770\u514b",
                    "value": "34",
                    "textStyle": {
                        "color": "rgb(27,112,16)"
                    }
                },
                {
                    "name": "\u6545\u4e8b",
                    "value": "39",
                    "textStyle": {
                        "color": "rgb(50,45,2)"
                    }
                },
                {
                    "name": "\u8001\u677f",
                    "value": "28",
                    "textStyle": {
                        "color": "rgb(97,143,128)"
                    }
                },
                {
                    "name": "\u82ac\u5947",
                    "value": "26",
                    "textStyle": {
                        "color": "rgb(116,115,41)"
                    }
                },
                {
                    "name": "\u5510\u5a1c",
                    "value": "26",
                    "textStyle": {
                        "color": "rgb(34,84,111)"
                    }
                },
                {
                    "name": "\u7236\u4eb2",
                    "value": "25",
                    "textStyle": {
                        "color": "rgb(72,146,26)"
                    }
                },
                {
                    "name": "\u79bb\u5f00",
                    "value": "25",
                    "textStyle": {
                        "color": "rgb(29,116,100)"
                    }
                },
                {
                    "name": "\u5f00\u59cb",
                    "value": "20",
                    "textStyle": {
                        "color": "rgb(11,6,104)"
                    }
                },
                {
                    "name": "\u5a5a\u793c",
                    "value": "19",
                    "textStyle": {
                        "color": "rgb(63,39,82)"
                    }
                },
                {
                    "name": "\u51b3\u5b9a",
                    "value": "19",
                    "textStyle": {
                        "color": "rgb(98,82,10)"
                    }
                },
                {
                    "name": "\u7537\u4eba",
                    "value": "17",
                    "textStyle": {
                        "color": "rgb(72,12,45)"
                    }
                },
                {
                    "name": "\u6d77\u5fb7",
                    "value": "17",
                    "textStyle": {
                        "color": "rgb(95,159,36)"
                    }
                },
                {
                    "name": "\u5b69\u5b50",
                    "value": "16",
                    "textStyle": {
                        "color": "rgb(29,154,31)"
                    }
                },
                {
                    "name": "\u82f1\u56fd",
                    "value": "16",
                    "textStyle": {
                        "color": "rgb(0,72,64)"
                    }
                },
                {
                    "name": "\u9732\u897f",
                    "value": "16",
                    "textStyle": {
                        "color": "rgb(8,158,61)"
                    }
                },
                {
                    "name": "\u5de5\u4f5c",
                    "value": "15",
                    "textStyle": {
                        "color": "rgb(145,141,10)"
                    }
                },
                {
                    "name": "\u5c71\u59c6",
                    "value": "15",
                    "textStyle": {
                        "color": "rgb(141,96,26)"
                    }
                },
                {
                    "name": "\u97f3\u4e50",
                    "value": "14",
                    "textStyle": {
                        "color": "rgb(36,122,113)"
                    }
                },
                {
                    "name": "\u795e\u79d8",
                    "value": "14",
                    "textStyle": {
                        "color": "rgb(32,68,44)"
                    }
                },
                {
                    "name": "\u5bfb\u627e",
                    "value": "13",
                    "textStyle": {
                        "color": "rgb(142,22,23)"
                    }
                },
                {
                    "name": "\u771f\u76f8",
                    "value": "13",
                    "textStyle": {
                        "color": "rgb(82,50,114)"
                    }
                },
                {
                    "name": "\u4e2d\u6587\u7248",
                    "value": "13",
                    "textStyle": {
                        "color": "rgb(14,91,111)"
                    }
                },
                {
                    "name": "\u529e\u516c\u5ba4",
                    "value": "12",
                    "textStyle": {
                        "color": "rgb(8,102,145)"
                    }
                },
                {
                    "name": "\u6bd4\u5c14",
                    "value": "12",
                    "textStyle": {
                        "color": "rgb(147,3,11)"
                    }
                },
                {
                    "name": "\u516c\u53f8",
                    "value": "12",
                    "textStyle": {
                        "color": "rgb(64,6,70)"
                    }
                },
                {
                    "name": "\u59bb\u5b50",
                    "value": "12",
                    "textStyle": {
                        "color": "rgb(146,13,42)"
                    }
                },
                {
                    "name": "\u79d8\u5bc6",
                    "value": "12",
                    "textStyle": {
                        "color": "rgb(118,139,45)"
                    }
                },
                {
                    "name": "\u627e\u5230",
                    "value": "12",
                    "textStyle": {
                        "color": "rgb(130,142,39)"
                    }
                },
                {
                    "name": "\u5e74\u8f7b",
                    "value": "12",
                    "textStyle": {
                        "color": "rgb(106,143,13)"
                    }
                },
                {
                    "name": "\u827e\u739b",
                    "value": "12",
                    "textStyle": {
                        "color": "rgb(53,27,0)"
                    }
                },
                {
                    "name": "\u4e16\u754c",
                    "value": "11",
                    "textStyle": {
                        "color": "rgb(111,26,137)"
                    }
                },
                {
                    "name": "\u4e0a\u6d77",
                    "value": "11",
                    "textStyle": {
                        "color": "rgb(118,20,150)"
                    }
                },
                {
                    "name": "\u793e\u4f1a",
                    "value": "10",
                    "textStyle": {
                        "color": "rgb(12,25,120)"
                    }
                },
                {
                    "name": "\u6e29\u6696",
                    "value": "10",
                    "textStyle": {
                        "color": "rgb(154,12,157)"
                    }
                },
                {
                    "name": "\u533b\u751f",
                    "value": "10",
                    "textStyle": {
                        "color": "rgb(18,18,91)"
                    }
                },
                {
                    "name": "\u620f\u5267",
                    "value": "10",
                    "textStyle": {
                        "color": "rgb(96,68,144)"
                    }
                },
                {
                    "name": "\u4eba\u7c7b",
                    "value": "9",
                    "textStyle": {
                        "color": "rgb(151,63,9)"
                    }
                },
                {
                    "name": "\u4e2d\u56fd",
                    "value": "9",
                    "textStyle": {
                        "color": "rgb(119,153,159)"
                    }
                },
                {
                    "name": "\u4f26\u6566",
                    "value": "9",
                    "textStyle": {
                        "color": "rgb(156,18,141)"
                    }
                },
                {
                    "name": "\u5e2e\u52a9",
                    "value": "9",
                    "textStyle": {
                        "color": "rgb(152,160,102)"
                    }
                },
                {
                    "name": "\u6d17\u8863\u670d",
                    "value": "9",
                    "textStyle": {
                        "color": "rgb(14,115,51)"
                    }
                },
                {
                    "name": "\u7070\u59d1\u5a18",
                    "value": "9",
                    "textStyle": {
                        "color": "rgb(23,149,97)"
                    }
                },
                {
                    "name": "\u9ed1\u624b\u515a",
                    "value": "9",
                    "textStyle": {
                        "color": "rgb(102,11,150)"
                    }
                },
                {
                    "name": "\u8ba1\u5212",
                    "value": "9",
                    "textStyle": {
                        "color": "rgb(57,152,114)"
                    }
                },
                {
                    "name": "\u821e\u53f0",
                    "value": "9",
                    "textStyle": {
                        "color": "rgb(113,25,131)"
                    }
                },
                {
                    "name": "\u7231\u60c5",
                    "value": "8",
                    "textStyle": {
                        "color": "rgb(139,9,6)"
                    }
                },
                {
                    "name": "\u7f57\u897f",
                    "value": "8",
                    "textStyle": {
                        "color": "rgb(143,104,41)"
                    }
                },
                {
                    "name": "\u5317\u4eac",
                    "value": "8",
                    "textStyle": {
                        "color": "rgb(154,25,108)"
                    }
                },
                {
                    "name": "\u6bcd\u4eb2",
                    "value": "8",
                    "textStyle": {
                        "color": "rgb(125,146,138)"
                    }
                },
                {
                    "name": "\u68a6\u60f3",
                    "value": "8",
                    "textStyle": {
                        "color": "rgb(105,151,78)"
                    }
                },
                {
                    "name": "\u7ecf\u5178",
                    "value": "8",
                    "textStyle": {
                        "color": "rgb(93,26,118)"
                    }
                },
                {
                    "name": "\u4e16\u7eaa",
                    "value": "8",
                    "textStyle": {
                        "color": "rgb(60,91,65)"
                    }
                },
                {
                    "name": "\u5bb6\u5ead",
                    "value": "8",
                    "textStyle": {
                        "color": "rgb(132,130,39)"
                    }
                },
                {
                    "name": "\u57ce\u5e02",
                    "value": "8",
                    "textStyle": {
                        "color": "rgb(64,79,28)"
                    }
                },
                {
                    "name": "\u4eba\u751f",
                    "value": "8",
                    "textStyle": {
                        "color": "rgb(78,75,129)"
                    }
                },
                {
                    "name": "\u9152\u5427",
                    "value": "8",
                    "textStyle": {
                        "color": "rgb(42,65,105)"
                    }
                },
                {
                    "name": "\u7ed3\u675f",
                    "value": "8",
                    "textStyle": {
                        "color": "rgb(144,145,24)"
                    }
                },
                {
                    "name": "\u521b\u610f",
                    "value": "7",
                    "textStyle": {
                        "color": "rgb(96,16,88)"
                    }
                },
                {
                    "name": "\u963f\u52a0\u838e",
                    "value": "7",
                    "textStyle": {
                        "color": "rgb(86,10,109)"
                    }
                },
                {
                    "name": "\u6d77\u8482",
                    "value": "7",
                    "textStyle": {
                        "color": "rgb(10,87,93)"
                    }
                },
                {
                    "name": "\u5988\u5988",
                    "value": "7",
                    "textStyle": {
                        "color": "rgb(15,86,52)"
                    }
                },
                {
                    "name": "\u6e34\u671b",
                    "value": "7",
                    "textStyle": {
                        "color": "rgb(113,127,132)"
                    }
                },
                {
                    "name": "\u5973\u4eba",
                    "value": "7",
                    "textStyle": {
                        "color": "rgb(49,18,62)"
                    }
                },
                {
                    "name": "\u670b\u53cb",
                    "value": "7",
                    "textStyle": {
                        "color": "rgb(62,45,22)"
                    }
                },
                {
                    "name": "\u739b\u5229",
                    "value": "7",
                    "textStyle": {
                        "color": "rgb(115,143,157)"
                    }
                },
                {
                    "name": "\u97e9\u56fd",
                    "value": "7",
                    "textStyle": {
                        "color": "rgb(150,10,140)"
                    }
                },
                {
                    "name": "\u65f6\u4ee3",
                    "value": "7",
                    "textStyle": {
                        "color": "rgb(2,34,87)"
                    }
                },
                {
                    "name": "\u51f6\u624b",
                    "value": "7",
                    "textStyle": {
                        "color": "rgb(94,94,51)"
                    }
                },
                {
                    "name": "\u5973\u5b50",
                    "value": "7",
                    "textStyle": {
                        "color": "rgb(133,73,127)"
                    }
                },
                {
                    "name": "\u9996\u6f14",
                    "value": "7",
                    "textStyle": {
                        "color": "rgb(59,103,106)"
                    }
                },
                {
                    "name": "\u5973\u5b69",
                    "value": "7",
                    "textStyle": {
                        "color": "rgb(40,63,113)"
                    }
                },
                {
                    "name": "\u7f8e\u56fd",
                    "value": "7",
                    "textStyle": {
                        "color": "rgb(141,17,82)"
                    }
                },
                {
                    "name": "\u5148\u751f",
                    "value": "7",
                    "textStyle": {
                        "color": "rgb(49,18,64)"
                    }
                },
                {
                    "name": "\u535a\u58eb",
                    "value": "7",
                    "textStyle": {
                        "color": "rgb(92,73,0)"
                    }
                },
                {
                    "name": "\u5c0f\u5c9b",
                    "value": "7",
                    "textStyle": {
                        "color": "rgb(29,26,81)"
                    }
                },
                {
                    "name": "\u5973\u513f",
                    "value": "7",
                    "textStyle": {
                        "color": "rgb(118,76,24)"
                    }
                },
                {
                    "name": "\u5c0f\u8bf4",
                    "value": "7",
                    "textStyle": {
                        "color": "rgb(70,71,41)"
                    }
                },
                {
                    "name": "\u513f\u5b50",
                    "value": "7",
                    "textStyle": {
                        "color": "rgb(64,88,16)"
                    }
                },
                {
                    "name": "\u767e\u8001\u6c47",
                    "value": "7",
                    "textStyle": {
                        "color": "rgb(99,47,142)"
                    }
                },
                {
                    "name": "\u5fc3\u7075",
                    "value": "7",
                    "textStyle": {
                        "color": "rgb(33,3,133)"
                    }
                },
                {
                    "name": "\u6539\u53d8",
                    "value": "7",
                    "textStyle": {
                        "color": "rgb(0,94,147)"
                    }
                },
                {
                    "name": "\u547d\u8fd0",
                    "value": "7",
                    "textStyle": {
                        "color": "rgb(36,134,103)"
                    }
                },
                {
                    "name": "\u76d1\u72f1",
                    "value": "6",
                    "textStyle": {
                        "color": "rgb(111,71,61)"
                    }
                },
                {
                    "name": "\u5f1f\u5f1f",
                    "value": "6",
                    "textStyle": {
                        "color": "rgb(115,82,18)"
                    }
                },
                {
                    "name": "\u5931\u8e2a",
                    "value": "6",
                    "textStyle": {
                        "color": "rgb(4,155,1)"
                    }
                },
                {
                    "name": "\u6b7b\u4e86",
                    "value": "6",
                    "textStyle": {
                        "color": "rgb(52,79,69)"
                    }
                },
                {
                    "name": "\u58eb\u5175",
                    "value": "6",
                    "textStyle": {
                        "color": "rgb(147,40,61)"
                    }
                },
                {
                    "name": "\u5976\u5976",
                    "value": "6",
                    "textStyle": {
                        "color": "rgb(18,100,48)"
                    }
                },
                {
                    "name": "\u7236\u6bcd",
                    "value": "6",
                    "textStyle": {
                        "color": "rgb(23,151,29)"
                    }
                },
                {
                    "name": "\u4e61\u6751",
                    "value": "6",
                    "textStyle": {
                        "color": "rgb(17,111,14)"
                    }
                },
                {
                    "name": "\u6e38\u620f",
                    "value": "6",
                    "textStyle": {
                        "color": "rgb(119,75,56)"
                    }
                },
                {
                    "name": "\u56fd\u9645",
                    "value": "6",
                    "textStyle": {
                        "color": "rgb(98,27,5)"
                    }
                },
                {
                    "name": "\u7ed3\u5a5a",
                    "value": "6",
                    "textStyle": {
                        "color": "rgb(67,73,72)"
                    }
                },
                {
                    "name": "\u54c8\u91cc",
                    "value": "6",
                    "textStyle": {
                        "color": "rgb(108,150,108)"
                    }
                },
                {
                    "name": "\u54e5\u54e5",
                    "value": "5",
                    "textStyle": {
                        "color": "rgb(10,135,151)"
                    }
                },
                {
                    "name": "\u6d6e\u58eb\u5fb7",
                    "value": "5",
                    "textStyle": {
                        "color": "rgb(101,13,134)"
                    }
                },
                {
                    "name": "\u683c\u96f7",
                    "value": "5",
                    "textStyle": {
                        "color": "rgb(113,106,50)"
                    }
                },
                {
                    "name": "\u7231\u4eba",
                    "value": "5",
                    "textStyle": {
                        "color": "rgb(141,156,99)"
                    }
                }
            ],
            "drawOutOfBound": false,
            "textStyle": {
                "emphasis": {}
            },
            "label": {
                "show": true,
                "margin": 8,
                "fontSize": 14,
                "fontStyle": "italic",
                "fontWeight": "bold",
                "formatter": "{b}",
                "valueAnimation": false
            },
            "rippleEffect": {
                "show": true,
                "brushType": "stroke",
                "scale": 2.5,
                "period": 4
            }
        }
    ],
    "legend": [
        {
            "data": [],
            "selected": {},
            "show": false,
            "padding": 5,
            "itemGap": 10,
            "itemWidth": 25,
            "itemHeight": 14,
            "backgroundColor": "transparent",
            "borderColor": "#ccc",
            "borderRadius": 0,
            "pageButtonItemGap": 5,
            "pageButtonPosition": "end",
            "pageFormatter": "{current}/{total}",
            "pageIconColor": "#2f4554",
            "pageIconInactiveColor": "#aaa",
            "pageIconSize": 15,
            "animationDurationUpdate": 800,
            "selector": false,
            "selectorPosition": "auto",
            "selectorItemGap": 7,
            "selectorButtonGap": 10
        }
    ],
    "tooltip": {
        "show": true,
        "trigger": "item",
        "triggerOn": "mousemove|click",
        "axisPointer": {
            "type": "line"
        },
        "showContent": true,
        "alwaysShowContent": false,
        "showDelay": 0,
        "hideDelay": 100,
        "enterable": false,
        "confine": false,
        "appendToBody": false,
        "transitionDuration": 0.4,
        "formatter": "{b}: {c}\u6b21",
        "textStyle": {
            "color": "#fff"
        },
        "backgroundColor": "rgba(0,0,0,0.7)",
        "borderColor": "#ccc",
        "borderWidth": 0,
        "padding": 5,
        "order": "seriesAsc"
    },
    "title": [
        {
            "show": true,
            "text": "\u97f3\u4e50\u5267\u4e3b\u9898\u8bcd\u9891\u5206\u6790",
            "target": "blank",
            "subtarget": "blank",
            "padding": 5,
            "itemGap": 10,
            "textAlign": "auto",
            "textVerticalAlign": "auto",
            "triggerEvent": false,
            "textStyle": {
                "fontWeight": "bold",
                "fontFamily": "Microsoft YaHei",
                "fontSize": 26
            },
            "subtextStyle": {
                "fontFamily": "Microsoft YaHei",
                "fontSize": 18
            }
        }
    ]
  };
  
  // 设置图表选项
  chartInstance.setOption(option);
  
  // 监听窗口大小变化，调整图表尺寸
  const handleResize = () => {
    if (chartInstance) chartInstance.resize();
  };
  window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
  // 组件卸载时销毁图表实例并移除事件监听器
  if (chartInstance) {
    chartInstance.dispose();
    chartInstance = null;
  }
  window.removeEventListener('resize', handleResize);
});
</script>

<style scoped>
.chart-container {
  width: 100%;
  height: 100%;
  min-width: 300px; /* 设置最小宽度防止变形 */
}
</style>