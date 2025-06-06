<template>
  <div class="chart-container" ref="chartRef" ></div>
</template>

<script>
import * as echarts from 'echarts';

export default {
  name: 'MusicImportTimeline',
  data() {
    return {
      chartInstance: null,
      option: {
           "baseOption": {
        "series": [
            {
                "type": "bar",
                "name": "\u5f15\u8fdb\u6570\u91cf",
                "legendHoverLink": true,
                "data": [
                    {
                        "name": "\u97e9\u56fd",
                        "value": 0
                    },
                    {
                        "name": "\u7f8e\u56fd",
                        "value": 3
                    },
                    {
                        "name": "\u82f1\u56fd",
                        "value": 0
                    },
                    {
                        "name": "\u5fb7\u56fd",
                        "value": 0
                    },
                    {
                        "name": "\u65e5\u672c",
                        "value": 0
                    },
                    {
                        "name": "\u6cd5\u56fd",
                        "value": 0
                    },
                    {
                        "name": "\u4fc4\u7f57\u65af",
                        "value": 0
                    },
                    {
                        "name": "\u6cf0\u56fd",
                        "value": 0
                    },
                    {
                        "name": "\u82ac\u5170",
                        "value": 0
                    }
                ],
                "realtimeSort": false,
                "showBackground": false,
                "stackStrategy": "samesign",
                "cursor": "pointer",
                "barMinHeight": 0,
                "barCategoryGap": "20%",
                "barGap": "30%",
                "large": false,
                "largeThreshold": 400,
                "seriesLayoutBy": "column",
                "datasetIndex": 0,
                "clip": true,
                "zlevel": 0,
                "z": 2,
                "label": {
                    "show": false,
                    "margin": 8,
                    "valueAnimation": false
                },
                "itemStyle": {
                    "color": "#5793f3"
                }
            },
            {
                "type": "pie",
                "name": "\u5360\u6bd4",
                "colorBy": "data",
                "legendHoverLink": true,
                "selectedMode": false,
                "selectedOffset": 10,
                "clockwise": true,
                "startAngle": 90,
                "minAngle": 0,
                "minShowLabelAngle": 0,
                "avoidLabelOverlap": true,
                "stillShowZeroSum": true,
                "percentPrecision": 2,
                "showEmptyCircle": true,
                "emptyCircleStyle": {
                    "color": "lightgray",
                    "borderColor": "#000",
                    "borderWidth": 0,
                    "borderType": "solid",
                    "borderDashOffset": 0,
                    "borderCap": "butt",
                    "borderJoin": "bevel",
                    "borderMiterLimit": 10,
                    "opacity": 1
                },
                "data": [
                    {
                        "name": "\u7f8e\u56fd",
                        "value": 3
                    }
                ],
                "radius": "28%",
                "center": [
                    "75%",
                    "35%"
                ],
                "label": {
                    "show": true,
                    "margin": 8,
                    "formatter": "{b}: {d}%",
                    "valueAnimation": false
                },
                "labelLine": {
                    "show": true,
                    "showAbove": false,
                    "length": 15,
                    "length2": 15,
                    "smooth": false,
                    "minTurnAngle": 90,
                    "maxSurfaceAngle": 90
                },
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
                    "formatter": "{a}<br/>{b}: {c}\u90e8 ({d}%)",
                    "textStyle": {
                        "fontSize": 14
                    },
                    "borderWidth": 0,
                    "padding": 5,
                    "order": "seriesAsc"
                },
                "rippleEffect": {
                    "show": true,
                    "brushType": "stroke",
                    "scale": 2.5,
                    "period": 4
                }
            }
        ],
        "timeline": {
            "axisType": "category",
            "currentIndex": 0,
            "orient": "horizontal",
            "autoPlay": true,
            "controlPosition": "left",
            "loop": true,
            "rewind": false,
            "show": true,
            "inverse": false,
            "playInterval": 2000,
            "left": "50",
            "right": "50",
            "bottom": "0",
            "width": "80%",
            "label": {
                "show": true,
                "color": "#333",
                "margin": 8,
                "valueAnimation": false
            },
            "progress": {},
            "data": [
                "2024",
                "2023",
                "2022",
                "2021",
                "2020",
                "2019",
                "2018",
                "2017",
                "2016",
                "2015",
                "2014",
                "2013",
                "2012",
                "2011",
                "2008",
                "2006",
                "2002",
                "1996",
                "1987"
            ]
        },
        "xAxis": [
            {
                "show": true,
                "scale": false,
                "nameLocation": "end",
                "nameGap": 15,
                "gridIndex": 0,
                "inverse": false,
                "offset": 0,
                "splitNumber": 5,
                "minInterval": 0,
                "splitLine": {
                    "show": true,
                    "lineStyle": {
                        "show": true,
                        "width": 1,
                        "opacity": 1,
                        "curveness": 0,
                        "type": "solid"
                    }
                },
                "animation": true,
                "animationThreshold": 2000,
                "animationDuration": 1000,
                "animationEasing": "cubicOut",
                "animationDelay": 0,
                "animationDurationUpdate": 300,
                "animationEasingUpdate": "cubicOut",
                "animationDelayUpdate": 0,
                "data": [
                    "\u97e9\u56fd",
                    "\u7f8e\u56fd",
                    "\u82f1\u56fd",
                    "\u5fb7\u56fd",
                    "\u65e5\u672c",
                    "\u6cd5\u56fd",
                    "\u4fc4\u7f57\u65af",
                    "\u6cf0\u56fd",
                    "\u82ac\u5170"
                ]
            }
        ],
        "yAxis": [
            {
                "show": true,
                "scale": false,
                "nameLocation": "end",
                "nameGap": 15,
                "gridIndex": 0,
                "inverse": false,
                "offset": 0,
                "splitNumber": 5,
                "max": 4,
                "minInterval": 0,
                "splitLine": {
                    "show": true,
                    "lineStyle": {
                        "show": true,
                        "width": 1,
                        "opacity": 1,
                        "curveness": 0,
                        "type": "solid"
                    }
                },
                "animation": true,
                "animationThreshold": 2000,
                "animationDuration": 1000,
                "animationEasing": "cubicOut",
                "animationDelay": 0,
                "animationDurationUpdate": 300,
                "animationEasingUpdate": "cubicOut",
                "animationDelayUpdate": 0
            }
        ],
        "legend": [
            {
                "data": [
                    "\u5f15\u8fdb\u6570\u91cf",
                    "\u7f8e\u56fd"
                ],
                "selected": {},
                "show": true,
                "top": "5%",
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
        ]
    },
    "options": [
        {
            "legend": [
                {
                    "data": [
                        "\u5f15\u8fdb\u6570\u91cf",
                        "\u97e9\u56fd",
                        "\u5fb7\u56fd"
                    ],
                    "selected": {},
                    "show": true,
                    "top": "5%",
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
            "series": [
                {
                    "type": "bar",
                    "name": "\u5f15\u8fdb\u6570\u91cf",
                    "legendHoverLink": true,
                    "data": [
                        {
                            "name": "\u97e9\u56fd",
                            "value": 7
                        },
                        {
                            "name": "\u7f8e\u56fd",
                            "value": 0
                        },
                        {
                            "name": "\u82f1\u56fd",
                            "value": 0
                        },
                        {
                            "name": "\u5fb7\u56fd",
                            "value": 1
                        },
                        {
                            "name": "\u65e5\u672c",
                            "value": 0
                        },
                        {
                            "name": "\u6cd5\u56fd",
                            "value": 0
                        },
                        {
                            "name": "\u4fc4\u7f57\u65af",
                            "value": 0
                        },
                        {
                            "name": "\u6cf0\u56fd",
                            "value": 0
                        },
                        {
                            "name": "\u82ac\u5170",
                            "value": 0
                        }
                    ],
                    "realtimeSort": false,
                    "showBackground": false,
                    "stackStrategy": "samesign",
                    "cursor": "pointer",
                    "barMinHeight": 0,
                    "barCategoryGap": "20%",
                    "barGap": "30%",
                    "large": false,
                    "largeThreshold": 400,
                    "seriesLayoutBy": "column",
                    "datasetIndex": 0,
                    "clip": true,
                    "zlevel": 0,
                    "z": 2,
                    "label": {
                        "show": false,
                        "margin": 8,
                        "valueAnimation": false
                    },
                    "itemStyle": {
                        "color": "#5793f3"
                    }
                },
                {
                    "type": "pie",
                    "name": "\u5360\u6bd4",
                    "colorBy": "data",
                    "legendHoverLink": true,
                    "selectedMode": false,
                    "selectedOffset": 10,
                    "clockwise": true,
                    "startAngle": 90,
                    "minAngle": 0,
                    "minShowLabelAngle": 0,
                    "avoidLabelOverlap": true,
                    "stillShowZeroSum": true,
                    "percentPrecision": 2,
                    "showEmptyCircle": true,
                    "emptyCircleStyle": {
                        "color": "lightgray",
                        "borderColor": "#000",
                        "borderWidth": 0,
                        "borderType": "solid",
                        "borderDashOffset": 0,
                        "borderCap": "butt",
                        "borderJoin": "bevel",
                        "borderMiterLimit": 10,
                        "opacity": 1
                    },
                    "data": [
                        {
                            "name": "\u97e9\u56fd",
                            "value": 7
                        },
                        {
                            "name": "\u5fb7\u56fd",
                            "value": 1
                        }
                    ],
                    "radius": "28%",
                    "center": [
                        "75%",
                        "35%"
                    ],
                    "label": {
                        "show": true,
                        "margin": 8,
                        "formatter": "{b}: {d}%",
                        "valueAnimation": false
                    },
                    "labelLine": {
                        "show": true,
                        "showAbove": false,
                        "length": 15,
                        "length2": 15,
                        "smooth": false,
                        "minTurnAngle": 90,
                        "maxSurfaceAngle": 90
                    },
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
                        "formatter": "{a}<br/>{b}: {c}\u90e8 ({d}%)",
                        "textStyle": {
                            "fontSize": 14
                        },
                        "borderWidth": 0,
                        "padding": 5,
                        "order": "seriesAsc"
                    },
                    "rippleEffect": {
                        "show": true,
                        "brushType": "stroke",
                        "scale": 2.5,
                        "period": 4
                    }
                }
            ],
            "xAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    },
                    "animation": true,
                    "animationThreshold": 2000,
                    "animationDuration": 1000,
                    "animationEasing": "cubicOut",
                    "animationDelay": 0,
                    "animationDurationUpdate": 300,
                    "animationEasingUpdate": "cubicOut",
                    "animationDelayUpdate": 0,
                    "data": [
                        "\u97e9\u56fd",
                        "\u7f8e\u56fd",
                        "\u82f1\u56fd",
                        "\u5fb7\u56fd",
                        "\u65e5\u672c",
                        "\u6cd5\u56fd",
                        "\u4fc4\u7f57\u65af",
                        "\u6cf0\u56fd",
                        "\u82ac\u5170"
                    ]
                }
            ],
            "yAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "max": 8,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    },
                    "animation": true,
                    "animationThreshold": 2000,
                    "animationDuration": 1000,
                    "animationEasing": "cubicOut",
                    "animationDelay": 0,
                    "animationDurationUpdate": 300,
                    "animationEasingUpdate": "cubicOut",
                    "animationDelayUpdate": 0
                }
            ],
            "title": [
                {
                    "show": true,
                    "text": "2024\u5e74\u97f3\u4e50\u5267\u5f15\u8fdb\u56fd\u5bb6\u5206\u5e03",
                    "target": "blank",
                    "subtext": "\u6570\u636e\u6765\u6e90\uff1a\u97f3\u4e50\u5267\u5f15\u8fdb\u7edf\u8ba1",
                    "subtarget": "blank",
                    "padding": 5,
                    "itemGap": 10,
                    "textAlign": "auto",
                    "textVerticalAlign": "auto",
                    "triggerEvent": false
                }
            ],
            "tooltip": {
                "show": true,
                "trigger": "axis",
                "triggerOn": "mousemove|click",
                "axisPointer": {
                    "type": "shadow"
                },
                "showContent": true,
                "alwaysShowContent": false,
                "showDelay": 0,
                "hideDelay": 100,
                "enterable": false,
                "confine": false,
                "appendToBody": false,
                "transitionDuration": 0.4,
                "formatter": "{b}: {c}\u90e8",
                "textStyle": {
                    "fontSize": 14
                },
                "borderWidth": 0,
                "padding": 5,
                "order": "seriesAsc"
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
            ]
        },
        {
            "legend": [
                {
                    "data": [
                        "\u5f15\u8fdb\u6570\u91cf",
                        "\u97e9\u56fd",
                        "\u7f8e\u56fd",
                        "\u82f1\u56fd",
                        "\u6cd5\u56fd",
                        "\u6cf0\u56fd"
                    ],
                    "selected": {},
                    "show": true,
                    "top": "5%",
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
            "series": [
                {
                    "type": "bar",
                    "name": "\u5f15\u8fdb\u6570\u91cf",
                    "legendHoverLink": true,
                    "data": [
                        {
                            "name": "\u97e9\u56fd",
                            "value": 10
                        },
                        {
                            "name": "\u7f8e\u56fd",
                            "value": 6
                        },
                        {
                            "name": "\u82f1\u56fd",
                            "value": 2
                        },
                        {
                            "name": "\u5fb7\u56fd",
                            "value": 0
                        },
                        {
                            "name": "\u65e5\u672c",
                            "value": 0
                        },
                        {
                            "name": "\u6cd5\u56fd",
                            "value": 1
                        },
                        {
                            "name": "\u4fc4\u7f57\u65af",
                            "value": 0
                        },
                        {
                            "name": "\u6cf0\u56fd",
                            "value": 1
                        },
                        {
                            "name": "\u82ac\u5170",
                            "value": 0
                        }
                    ],
                    "realtimeSort": false,
                    "showBackground": false,
                    "stackStrategy": "samesign",
                    "cursor": "pointer",
                    "barMinHeight": 0,
                    "barCategoryGap": "20%",
                    "barGap": "30%",
                    "large": false,
                    "largeThreshold": 400,
                    "seriesLayoutBy": "column",
                    "datasetIndex": 0,
                    "clip": true,
                    "zlevel": 0,
                    "z": 2,
                    "label": {
                        "show": false,
                        "margin": 8,
                        "valueAnimation": false
                    },
                    "itemStyle": {
                        "color": "#5793f3"
                    }
                },
                {
                    "type": "pie",
                    "name": "\u5360\u6bd4",
                    "colorBy": "data",
                    "legendHoverLink": true,
                    "selectedMode": false,
                    "selectedOffset": 10,
                    "clockwise": true,
                    "startAngle": 90,
                    "minAngle": 0,
                    "minShowLabelAngle": 0,
                    "avoidLabelOverlap": true,
                    "stillShowZeroSum": true,
                    "percentPrecision": 2,
                    "showEmptyCircle": true,
                    "emptyCircleStyle": {
                        "color": "lightgray",
                        "borderColor": "#000",
                        "borderWidth": 0,
                        "borderType": "solid",
                        "borderDashOffset": 0,
                        "borderCap": "butt",
                        "borderJoin": "bevel",
                        "borderMiterLimit": 10,
                        "opacity": 1
                    },
                    "data": [
                        {
                            "name": "\u97e9\u56fd",
                            "value": 10
                        },
                        {
                            "name": "\u7f8e\u56fd",
                            "value": 6
                        },
                        {
                            "name": "\u82f1\u56fd",
                            "value": 2
                        },
                        {
                            "name": "\u6cd5\u56fd",
                            "value": 1
                        },
                        {
                            "name": "\u6cf0\u56fd",
                            "value": 1
                        }
                    ],
                    "radius": "28%",
                    "center": [
                        "75%",
                        "35%"
                    ],
                    "label": {
                        "show": true,
                        "margin": 8,
                        "formatter": "{b}: {d}%",
                        "valueAnimation": false
                    },
                    "labelLine": {
                        "show": true,
                        "showAbove": false,
                        "length": 15,
                        "length2": 15,
                        "smooth": false,
                        "minTurnAngle": 90,
                        "maxSurfaceAngle": 90
                    },
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
                        "formatter": "{a}<br/>{b}: {c}\u90e8 ({d}%)",
                        "textStyle": {
                            "fontSize": 14
                        },
                        "borderWidth": 0,
                        "padding": 5,
                        "order": "seriesAsc"
                    },
                    "rippleEffect": {
                        "show": true,
                        "brushType": "stroke",
                        "scale": 2.5,
                        "period": 4
                    }
                }
            ],
            "xAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    },
                    "animation": true,
                    "animationThreshold": 2000,
                    "animationDuration": 1000,
                    "animationEasing": "cubicOut",
                    "animationDelay": 0,
                    "animationDurationUpdate": 300,
                    "animationEasingUpdate": "cubicOut",
                    "animationDelayUpdate": 0,
                    "data": [
                        "\u97e9\u56fd",
                        "\u7f8e\u56fd",
                        "\u82f1\u56fd",
                        "\u5fb7\u56fd",
                        "\u65e5\u672c",
                        "\u6cd5\u56fd",
                        "\u4fc4\u7f57\u65af",
                        "\u6cf0\u56fd",
                        "\u82ac\u5170"
                    ]
                }
            ],
            "yAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "max": 11,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    },
                    "animation": true,
                    "animationThreshold": 2000,
                    "animationDuration": 1000,
                    "animationEasing": "cubicOut",
                    "animationDelay": 0,
                    "animationDurationUpdate": 300,
                    "animationEasingUpdate": "cubicOut",
                    "animationDelayUpdate": 0
                }
            ],
            "title": [
                {
                    "show": true,
                    "text": "2023\u5e74\u97f3\u4e50\u5267\u5f15\u8fdb\u56fd\u5bb6\u5206\u5e03",
                    "target": "blank",
                    "subtext": "\u6570\u636e\u6765\u6e90\uff1a\u97f3\u4e50\u5267\u5f15\u8fdb\u7edf\u8ba1",
                    "subtarget": "blank",
                    "padding": 5,
                    "itemGap": 10,
                    "textAlign": "auto",
                    "textVerticalAlign": "auto",
                    "triggerEvent": false
                }
            ],
            "tooltip": {
                "show": true,
                "trigger": "axis",
                "triggerOn": "mousemove|click",
                "axisPointer": {
                    "type": "shadow"
                },
                "showContent": true,
                "alwaysShowContent": false,
                "showDelay": 0,
                "hideDelay": 100,
                "enterable": false,
                "confine": false,
                "appendToBody": false,
                "transitionDuration": 0.4,
                "formatter": "{b}: {c}\u90e8",
                "textStyle": {
                    "fontSize": 14
                },
                "borderWidth": 0,
                "padding": 5,
                "order": "seriesAsc"
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
            ]
        },
        {
            "legend": [
                {
                    "data": [
                        "\u5f15\u8fdb\u6570\u91cf",
                        "\u97e9\u56fd",
                        "\u4fc4\u7f57\u65af"
                    ],
                    "selected": {},
                    "show": true,
                    "top": "5%",
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
            "series": [
                {
                    "type": "bar",
                    "name": "\u5f15\u8fdb\u6570\u91cf",
                    "legendHoverLink": true,
                    "data": [
                        {
                            "name": "\u97e9\u56fd",
                            "value": 10
                        },
                        {
                            "name": "\u7f8e\u56fd",
                            "value": 0
                        },
                        {
                            "name": "\u82f1\u56fd",
                            "value": 0
                        },
                        {
                            "name": "\u5fb7\u56fd",
                            "value": 0
                        },
                        {
                            "name": "\u65e5\u672c",
                            "value": 0
                        },
                        {
                            "name": "\u6cd5\u56fd",
                            "value": 0
                        },
                        {
                            "name": "\u4fc4\u7f57\u65af",
                            "value": 2
                        },
                        {
                            "name": "\u6cf0\u56fd",
                            "value": 0
                        },
                        {
                            "name": "\u82ac\u5170",
                            "value": 0
                        }
                    ],
                    "realtimeSort": false,
                    "showBackground": false,
                    "stackStrategy": "samesign",
                    "cursor": "pointer",
                    "barMinHeight": 0,
                    "barCategoryGap": "20%",
                    "barGap": "30%",
                    "large": false,
                    "largeThreshold": 400,
                    "seriesLayoutBy": "column",
                    "datasetIndex": 0,
                    "clip": true,
                    "zlevel": 0,
                    "z": 2,
                    "label": {
                        "show": false,
                        "margin": 8,
                        "valueAnimation": false
                    },
                    "itemStyle": {
                        "color": "#5793f3"
                    }
                },
                {
                    "type": "pie",
                    "name": "\u5360\u6bd4",
                    "colorBy": "data",
                    "legendHoverLink": true,
                    "selectedMode": false,
                    "selectedOffset": 10,
                    "clockwise": true,
                    "startAngle": 90,
                    "minAngle": 0,
                    "minShowLabelAngle": 0,
                    "avoidLabelOverlap": true,
                    "stillShowZeroSum": true,
                    "percentPrecision": 2,
                    "showEmptyCircle": true,
                    "emptyCircleStyle": {
                        "color": "lightgray",
                        "borderColor": "#000",
                        "borderWidth": 0,
                        "borderType": "solid",
                        "borderDashOffset": 0,
                        "borderCap": "butt",
                        "borderJoin": "bevel",
                        "borderMiterLimit": 10,
                        "opacity": 1
                    },
                    "data": [
                        {
                            "name": "\u97e9\u56fd",
                            "value": 10
                        },
                        {
                            "name": "\u4fc4\u7f57\u65af",
                            "value": 2
                        }
                    ],
                    "radius": "28%",
                    "center": [
                        "75%",
                        "35%"
                    ],
                    "label": {
                        "show": true,
                        "margin": 8,
                        "formatter": "{b}: {d}%",
                        "valueAnimation": false
                    },
                    "labelLine": {
                        "show": true,
                        "showAbove": false,
                        "length": 15,
                        "length2": 15,
                        "smooth": false,
                        "minTurnAngle": 90,
                        "maxSurfaceAngle": 90
                    },
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
                        "formatter": "{a}<br/>{b}: {c}\u90e8 ({d}%)",
                        "textStyle": {
                            "fontSize": 14
                        },
                        "borderWidth": 0,
                        "padding": 5,
                        "order": "seriesAsc"
                    },
                    "rippleEffect": {
                        "show": true,
                        "brushType": "stroke",
                        "scale": 2.5,
                        "period": 4
                    }
                }
            ],
            "xAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    },
                    "animation": true,
                    "animationThreshold": 2000,
                    "animationDuration": 1000,
                    "animationEasing": "cubicOut",
                    "animationDelay": 0,
                    "animationDurationUpdate": 300,
                    "animationEasingUpdate": "cubicOut",
                    "animationDelayUpdate": 0,
                    "data": [
                        "\u97e9\u56fd",
                        "\u7f8e\u56fd",
                        "\u82f1\u56fd",
                        "\u5fb7\u56fd",
                        "\u65e5\u672c",
                        "\u6cd5\u56fd",
                        "\u4fc4\u7f57\u65af",
                        "\u6cf0\u56fd",
                        "\u82ac\u5170"
                    ]
                }
            ],
            "yAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "max": 11,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    },
                    "animation": true,
                    "animationThreshold": 2000,
                    "animationDuration": 1000,
                    "animationEasing": "cubicOut",
                    "animationDelay": 0,
                    "animationDurationUpdate": 300,
                    "animationEasingUpdate": "cubicOut",
                    "animationDelayUpdate": 0
                }
            ],
            "title": [
                {
                    "show": true,
                    "text": "2022\u5e74\u97f3\u4e50\u5267\u5f15\u8fdb\u56fd\u5bb6\u5206\u5e03",
                    "target": "blank",
                    "subtext": "\u6570\u636e\u6765\u6e90\uff1a\u97f3\u4e50\u5267\u5f15\u8fdb\u7edf\u8ba1",
                    "subtarget": "blank",
                    "padding": 5,
                    "itemGap": 10,
                    "textAlign": "auto",
                    "textVerticalAlign": "auto",
                    "triggerEvent": false
                }
            ],
            "tooltip": {
                "show": true,
                "trigger": "axis",
                "triggerOn": "mousemove|click",
                "axisPointer": {
                    "type": "shadow"
                },
                "showContent": true,
                "alwaysShowContent": false,
                "showDelay": 0,
                "hideDelay": 100,
                "enterable": false,
                "confine": false,
                "appendToBody": false,
                "transitionDuration": 0.4,
                "formatter": "{b}: {c}\u90e8",
                "textStyle": {
                    "fontSize": 14
                },
                "borderWidth": 0,
                "padding": 5,
                "order": "seriesAsc"
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
            ]
        },
        {
            "legend": [
                {
                    "data": [
                        "\u5f15\u8fdb\u6570\u91cf",
                        "\u97e9\u56fd",
                        "\u7f8e\u56fd",
                        "\u65e5\u672c"
                    ],
                    "selected": {},
                    "show": true,
                    "top": "5%",
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
            "series": [
                {
                    "type": "bar",
                    "name": "\u5f15\u8fdb\u6570\u91cf",
                    "legendHoverLink": true,
                    "data": [
                        {
                            "name": "\u97e9\u56fd",
                            "value": 10
                        },
                        {
                            "name": "\u7f8e\u56fd",
                            "value": 2
                        },
                        {
                            "name": "\u82f1\u56fd",
                            "value": 0
                        },
                        {
                            "name": "\u5fb7\u56fd",
                            "value": 0
                        },
                        {
                            "name": "\u65e5\u672c",
                            "value": 1
                        },
                        {
                            "name": "\u6cd5\u56fd",
                            "value": 0
                        },
                        {
                            "name": "\u4fc4\u7f57\u65af",
                            "value": 0
                        },
                        {
                            "name": "\u6cf0\u56fd",
                            "value": 0
                        },
                        {
                            "name": "\u82ac\u5170",
                            "value": 0
                        }
                    ],
                    "realtimeSort": false,
                    "showBackground": false,
                    "stackStrategy": "samesign",
                    "cursor": "pointer",
                    "barMinHeight": 0,
                    "barCategoryGap": "20%",
                    "barGap": "30%",
                    "large": false,
                    "largeThreshold": 400,
                    "seriesLayoutBy": "column",
                    "datasetIndex": 0,
                    "clip": true,
                    "zlevel": 0,
                    "z": 2,
                    "label": {
                        "show": false,
                        "margin": 8,
                        "valueAnimation": false
                    },
                    "itemStyle": {
                        "color": "#5793f3"
                    }
                },
                {
                    "type": "pie",
                    "name": "\u5360\u6bd4",
                    "colorBy": "data",
                    "legendHoverLink": true,
                    "selectedMode": false,
                    "selectedOffset": 10,
                    "clockwise": true,
                    "startAngle": 90,
                    "minAngle": 0,
                    "minShowLabelAngle": 0,
                    "avoidLabelOverlap": true,
                    "stillShowZeroSum": true,
                    "percentPrecision": 2,
                    "showEmptyCircle": true,
                    "emptyCircleStyle": {
                        "color": "lightgray",
                        "borderColor": "#000",
                        "borderWidth": 0,
                        "borderType": "solid",
                        "borderDashOffset": 0,
                        "borderCap": "butt",
                        "borderJoin": "bevel",
                        "borderMiterLimit": 10,
                        "opacity": 1
                    },
                    "data": [
                        {
                            "name": "\u97e9\u56fd",
                            "value": 10
                        },
                        {
                            "name": "\u7f8e\u56fd",
                            "value": 2
                        },
                        {
                            "name": "\u65e5\u672c",
                            "value": 1
                        }
                    ],
                    "radius": "28%",
                    "center": [
                        "75%",
                        "35%"
                    ],
                    "label": {
                        "show": true,
                        "margin": 8,
                        "formatter": "{b}: {d}%",
                        "valueAnimation": false
                    },
                    "labelLine": {
                        "show": true,
                        "showAbove": false,
                        "length": 15,
                        "length2": 15,
                        "smooth": false,
                        "minTurnAngle": 90,
                        "maxSurfaceAngle": 90
                    },
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
                        "formatter": "{a}<br/>{b}: {c}\u90e8 ({d}%)",
                        "textStyle": {
                            "fontSize": 14
                        },
                        "borderWidth": 0,
                        "padding": 5,
                        "order": "seriesAsc"
                    },
                    "rippleEffect": {
                        "show": true,
                        "brushType": "stroke",
                        "scale": 2.5,
                        "period": 4
                    }
                }
            ],
            "xAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    },
                    "animation": true,
                    "animationThreshold": 2000,
                    "animationDuration": 1000,
                    "animationEasing": "cubicOut",
                    "animationDelay": 0,
                    "animationDurationUpdate": 300,
                    "animationEasingUpdate": "cubicOut",
                    "animationDelayUpdate": 0,
                    "data": [
                        "\u97e9\u56fd",
                        "\u7f8e\u56fd",
                        "\u82f1\u56fd",
                        "\u5fb7\u56fd",
                        "\u65e5\u672c",
                        "\u6cd5\u56fd",
                        "\u4fc4\u7f57\u65af",
                        "\u6cf0\u56fd",
                        "\u82ac\u5170"
                    ]
                }
            ],
            "yAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "max": 11,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    },
                    "animation": true,
                    "animationThreshold": 2000,
                    "animationDuration": 1000,
                    "animationEasing": "cubicOut",
                    "animationDelay": 0,
                    "animationDurationUpdate": 300,
                    "animationEasingUpdate": "cubicOut",
                    "animationDelayUpdate": 0
                }
            ],
            "title": [
                {
                    "show": true,
                    "text": "2021\u5e74\u97f3\u4e50\u5267\u5f15\u8fdb\u56fd\u5bb6\u5206\u5e03",
                    "target": "blank",
                    "subtext": "\u6570\u636e\u6765\u6e90\uff1a\u97f3\u4e50\u5267\u5f15\u8fdb\u7edf\u8ba1",
                    "subtarget": "blank",
                    "padding": 5,
                    "itemGap": 10,
                    "textAlign": "auto",
                    "textVerticalAlign": "auto",
                    "triggerEvent": false
                }
            ],
            "tooltip": {
                "show": true,
                "trigger": "axis",
                "triggerOn": "mousemove|click",
                "axisPointer": {
                    "type": "shadow"
                },
                "showContent": true,
                "alwaysShowContent": false,
                "showDelay": 0,
                "hideDelay": 100,
                "enterable": false,
                "confine": false,
                "appendToBody": false,
                "transitionDuration": 0.4,
                "formatter": "{b}: {c}\u90e8",
                "textStyle": {
                    "fontSize": 14
                },
                "borderWidth": 0,
                "padding": 5,
                "order": "seriesAsc"
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
            ]
        },
        {
            "legend": [
                {
                    "data": [
                        "\u5f15\u8fdb\u6570\u91cf",
                        "\u97e9\u56fd",
                        "\u7f8e\u56fd"
                    ],
                    "selected": {},
                    "show": true,
                    "top": "5%",
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
            "series": [
                {
                    "type": "bar",
                    "name": "\u5f15\u8fdb\u6570\u91cf",
                    "legendHoverLink": true,
                    "data": [
                        {
                            "name": "\u97e9\u56fd",
                            "value": 3
                        },
                        {
                            "name": "\u7f8e\u56fd",
                            "value": 3
                        },
                        {
                            "name": "\u82f1\u56fd",
                            "value": 0
                        },
                        {
                            "name": "\u5fb7\u56fd",
                            "value": 0
                        },
                        {
                            "name": "\u65e5\u672c",
                            "value": 0
                        },
                        {
                            "name": "\u6cd5\u56fd",
                            "value": 0
                        },
                        {
                            "name": "\u4fc4\u7f57\u65af",
                            "value": 0
                        },
                        {
                            "name": "\u6cf0\u56fd",
                            "value": 0
                        },
                        {
                            "name": "\u82ac\u5170",
                            "value": 0
                        }
                    ],
                    "realtimeSort": false,
                    "showBackground": false,
                    "stackStrategy": "samesign",
                    "cursor": "pointer",
                    "barMinHeight": 0,
                    "barCategoryGap": "20%",
                    "barGap": "30%",
                    "large": false,
                    "largeThreshold": 400,
                    "seriesLayoutBy": "column",
                    "datasetIndex": 0,
                    "clip": true,
                    "zlevel": 0,
                    "z": 2,
                    "label": {
                        "show": false,
                        "margin": 8,
                        "valueAnimation": false
                    },
                    "itemStyle": {
                        "color": "#5793f3"
                    }
                },
                {
                    "type": "pie",
                    "name": "\u5360\u6bd4",
                    "colorBy": "data",
                    "legendHoverLink": true,
                    "selectedMode": false,
                    "selectedOffset": 10,
                    "clockwise": true,
                    "startAngle": 90,
                    "minAngle": 0,
                    "minShowLabelAngle": 0,
                    "avoidLabelOverlap": true,
                    "stillShowZeroSum": true,
                    "percentPrecision": 2,
                    "showEmptyCircle": true,
                    "emptyCircleStyle": {
                        "color": "lightgray",
                        "borderColor": "#000",
                        "borderWidth": 0,
                        "borderType": "solid",
                        "borderDashOffset": 0,
                        "borderCap": "butt",
                        "borderJoin": "bevel",
                        "borderMiterLimit": 10,
                        "opacity": 1
                    },
                    "data": [
                        {
                            "name": "\u97e9\u56fd",
                            "value": 3
                        },
                        {
                            "name": "\u7f8e\u56fd",
                            "value": 3
                        }
                    ],
                    "radius": "28%",
                    "center": [
                        "75%",
                        "35%"
                    ],
                    "label": {
                        "show": true,
                        "margin": 8,
                        "formatter": "{b}: {d}%",
                        "valueAnimation": false
                    },
                    "labelLine": {
                        "show": true,
                        "showAbove": false,
                        "length": 15,
                        "length2": 15,
                        "smooth": false,
                        "minTurnAngle": 90,
                        "maxSurfaceAngle": 90
                    },
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
                        "formatter": "{a}<br/>{b}: {c}\u90e8 ({d}%)",
                        "textStyle": {
                            "fontSize": 14
                        },
                        "borderWidth": 0,
                        "padding": 5,
                        "order": "seriesAsc"
                    },
                    "rippleEffect": {
                        "show": true,
                        "brushType": "stroke",
                        "scale": 2.5,
                        "period": 4
                    }
                }
            ],
            "xAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    },
                    "animation": true,
                    "animationThreshold": 2000,
                    "animationDuration": 1000,
                    "animationEasing": "cubicOut",
                    "animationDelay": 0,
                    "animationDurationUpdate": 300,
                    "animationEasingUpdate": "cubicOut",
                    "animationDelayUpdate": 0,
                    "data": [
                        "\u97e9\u56fd",
                        "\u7f8e\u56fd",
                        "\u82f1\u56fd",
                        "\u5fb7\u56fd",
                        "\u65e5\u672c",
                        "\u6cd5\u56fd",
                        "\u4fc4\u7f57\u65af",
                        "\u6cf0\u56fd",
                        "\u82ac\u5170"
                    ]
                }
            ],
            "yAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "max": 4,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    },
                    "animation": true,
                    "animationThreshold": 2000,
                    "animationDuration": 1000,
                    "animationEasing": "cubicOut",
                    "animationDelay": 0,
                    "animationDurationUpdate": 300,
                    "animationEasingUpdate": "cubicOut",
                    "animationDelayUpdate": 0
                }
            ],
            "title": [
                {
                    "show": true,
                    "text": "2020\u5e74\u97f3\u4e50\u5267\u5f15\u8fdb\u56fd\u5bb6\u5206\u5e03",
                    "target": "blank",
                    "subtext": "\u6570\u636e\u6765\u6e90\uff1a\u97f3\u4e50\u5267\u5f15\u8fdb\u7edf\u8ba1",
                    "subtarget": "blank",
                    "padding": 5,
                    "itemGap": 10,
                    "textAlign": "auto",
                    "textVerticalAlign": "auto",
                    "triggerEvent": false
                }
            ],
            "tooltip": {
                "show": true,
                "trigger": "axis",
                "triggerOn": "mousemove|click",
                "axisPointer": {
                    "type": "shadow"
                },
                "showContent": true,
                "alwaysShowContent": false,
                "showDelay": 0,
                "hideDelay": 100,
                "enterable": false,
                "confine": false,
                "appendToBody": false,
                "transitionDuration": 0.4,
                "formatter": "{b}: {c}\u90e8",
                "textStyle": {
                    "fontSize": 14
                },
                "borderWidth": 0,
                "padding": 5,
                "order": "seriesAsc"
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
            ]
        },
        {
            "legend": [
                {
                    "data": [
                        "\u5f15\u8fdb\u6570\u91cf",
                        "\u97e9\u56fd",
                        "\u7f8e\u56fd",
                        "\u82f1\u56fd"
                    ],
                    "selected": {},
                    "show": true,
                    "top": "5%",
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
            "series": [
                {
                    "type": "bar",
                    "name": "\u5f15\u8fdb\u6570\u91cf",
                    "legendHoverLink": true,
                    "data": [
                        {
                            "name": "\u97e9\u56fd",
                            "value": 3
                        },
                        {
                            "name": "\u7f8e\u56fd",
                            "value": 1
                        },
                        {
                            "name": "\u82f1\u56fd",
                            "value": 1
                        },
                        {
                            "name": "\u5fb7\u56fd",
                            "value": 0
                        },
                        {
                            "name": "\u65e5\u672c",
                            "value": 0
                        },
                        {
                            "name": "\u6cd5\u56fd",
                            "value": 0
                        },
                        {
                            "name": "\u4fc4\u7f57\u65af",
                            "value": 0
                        },
                        {
                            "name": "\u6cf0\u56fd",
                            "value": 0
                        },
                        {
                            "name": "\u82ac\u5170",
                            "value": 0
                        }
                    ],
                    "realtimeSort": false,
                    "showBackground": false,
                    "stackStrategy": "samesign",
                    "cursor": "pointer",
                    "barMinHeight": 0,
                    "barCategoryGap": "20%",
                    "barGap": "30%",
                    "large": false,
                    "largeThreshold": 400,
                    "seriesLayoutBy": "column",
                    "datasetIndex": 0,
                    "clip": true,
                    "zlevel": 0,
                    "z": 2,
                    "label": {
                        "show": false,
                        "margin": 8,
                        "valueAnimation": false
                    },
                    "itemStyle": {
                        "color": "#5793f3"
                    }
                },
                {
                    "type": "pie",
                    "name": "\u5360\u6bd4",
                    "colorBy": "data",
                    "legendHoverLink": true,
                    "selectedMode": false,
                    "selectedOffset": 10,
                    "clockwise": true,
                    "startAngle": 90,
                    "minAngle": 0,
                    "minShowLabelAngle": 0,
                    "avoidLabelOverlap": true,
                    "stillShowZeroSum": true,
                    "percentPrecision": 2,
                    "showEmptyCircle": true,
                    "emptyCircleStyle": {
                        "color": "lightgray",
                        "borderColor": "#000",
                        "borderWidth": 0,
                        "borderType": "solid",
                        "borderDashOffset": 0,
                        "borderCap": "butt",
                        "borderJoin": "bevel",
                        "borderMiterLimit": 10,
                        "opacity": 1
                    },
                    "data": [
                        {
                            "name": "\u97e9\u56fd",
                            "value": 3
                        },
                        {
                            "name": "\u7f8e\u56fd",
                            "value": 1
                        },
                        {
                            "name": "\u82f1\u56fd",
                            "value": 1
                        }
                    ],
                    "radius": "28%",
                    "center": [
                        "75%",
                        "35%"
                    ],
                    "label": {
                        "show": true,
                        "margin": 8,
                        "formatter": "{b}: {d}%",
                        "valueAnimation": false
                    },
                    "labelLine": {
                        "show": true,
                        "showAbove": false,
                        "length": 15,
                        "length2": 15,
                        "smooth": false,
                        "minTurnAngle": 90,
                        "maxSurfaceAngle": 90
                    },
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
                        "formatter": "{a}<br/>{b}: {c}\u90e8 ({d}%)",
                        "textStyle": {
                            "fontSize": 14
                        },
                        "borderWidth": 0,
                        "padding": 5,
                        "order": "seriesAsc"
                    },
                    "rippleEffect": {
                        "show": true,
                        "brushType": "stroke",
                        "scale": 2.5,
                        "period": 4
                    }
                }
            ],
            "xAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    },
                    "animation": true,
                    "animationThreshold": 2000,
                    "animationDuration": 1000,
                    "animationEasing": "cubicOut",
                    "animationDelay": 0,
                    "animationDurationUpdate": 300,
                    "animationEasingUpdate": "cubicOut",
                    "animationDelayUpdate": 0,
                    "data": [
                        "\u97e9\u56fd",
                        "\u7f8e\u56fd",
                        "\u82f1\u56fd",
                        "\u5fb7\u56fd",
                        "\u65e5\u672c",
                        "\u6cd5\u56fd",
                        "\u4fc4\u7f57\u65af",
                        "\u6cf0\u56fd",
                        "\u82ac\u5170"
                    ]
                }
            ],
            "yAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "max": 4,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    },
                    "animation": true,
                    "animationThreshold": 2000,
                    "animationDuration": 1000,
                    "animationEasing": "cubicOut",
                    "animationDelay": 0,
                    "animationDurationUpdate": 300,
                    "animationEasingUpdate": "cubicOut",
                    "animationDelayUpdate": 0
                }
            ],
            "title": [
                {
                    "show": true,
                    "text": "2019\u5e74\u97f3\u4e50\u5267\u5f15\u8fdb\u56fd\u5bb6\u5206\u5e03",
                    "target": "blank",
                    "subtext": "\u6570\u636e\u6765\u6e90\uff1a\u97f3\u4e50\u5267\u5f15\u8fdb\u7edf\u8ba1",
                    "subtarget": "blank",
                    "padding": 5,
                    "itemGap": 10,
                    "textAlign": "auto",
                    "textVerticalAlign": "auto",
                    "triggerEvent": false
                }
            ],
            "tooltip": {
                "show": true,
                "trigger": "axis",
                "triggerOn": "mousemove|click",
                "axisPointer": {
                    "type": "shadow"
                },
                "showContent": true,
                "alwaysShowContent": false,
                "showDelay": 0,
                "hideDelay": 100,
                "enterable": false,
                "confine": false,
                "appendToBody": false,
                "transitionDuration": 0.4,
                "formatter": "{b}: {c}\u90e8",
                "textStyle": {
                    "fontSize": 14
                },
                "borderWidth": 0,
                "padding": 5,
                "order": "seriesAsc"
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
            ]
        },
        {
            "legend": [
                {
                    "data": [
                        "\u5f15\u8fdb\u6570\u91cf",
                        "\u97e9\u56fd",
                        "\u7f8e\u56fd",
                        "\u82f1\u56fd",
                        "\u65e5\u672c"
                    ],
                    "selected": {},
                    "show": true,
                    "top": "5%",
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
            "series": [
                {
                    "type": "bar",
                    "name": "\u5f15\u8fdb\u6570\u91cf",
                    "legendHoverLink": true,
                    "data": [
                        {
                            "name": "\u97e9\u56fd",
                            "value": 3
                        },
                        {
                            "name": "\u7f8e\u56fd",
                            "value": 6
                        },
                        {
                            "name": "\u82f1\u56fd",
                            "value": 1
                        },
                        {
                            "name": "\u5fb7\u56fd",
                            "value": 0
                        },
                        {
                            "name": "\u65e5\u672c",
                            "value": 1
                        },
                        {
                            "name": "\u6cd5\u56fd",
                            "value": 0
                        },
                        {
                            "name": "\u4fc4\u7f57\u65af",
                            "value": 0
                        },
                        {
                            "name": "\u6cf0\u56fd",
                            "value": 0
                        },
                        {
                            "name": "\u82ac\u5170",
                            "value": 0
                        }
                    ],
                    "realtimeSort": false,
                    "showBackground": false,
                    "stackStrategy": "samesign",
                    "cursor": "pointer",
                    "barMinHeight": 0,
                    "barCategoryGap": "20%",
                    "barGap": "30%",
                    "large": false,
                    "largeThreshold": 400,
                    "seriesLayoutBy": "column",
                    "datasetIndex": 0,
                    "clip": true,
                    "zlevel": 0,
                    "z": 2,
                    "label": {
                        "show": false,
                        "margin": 8,
                        "valueAnimation": false
                    },
                    "itemStyle": {
                        "color": "#5793f3"
                    }
                },
                {
                    "type": "pie",
                    "name": "\u5360\u6bd4",
                    "colorBy": "data",
                    "legendHoverLink": true,
                    "selectedMode": false,
                    "selectedOffset": 10,
                    "clockwise": true,
                    "startAngle": 90,
                    "minAngle": 0,
                    "minShowLabelAngle": 0,
                    "avoidLabelOverlap": true,
                    "stillShowZeroSum": true,
                    "percentPrecision": 2,
                    "showEmptyCircle": true,
                    "emptyCircleStyle": {
                        "color": "lightgray",
                        "borderColor": "#000",
                        "borderWidth": 0,
                        "borderType": "solid",
                        "borderDashOffset": 0,
                        "borderCap": "butt",
                        "borderJoin": "bevel",
                        "borderMiterLimit": 10,
                        "opacity": 1
                    },
                    "data": [
                        {
                            "name": "\u97e9\u56fd",
                            "value": 3
                        },
                        {
                            "name": "\u7f8e\u56fd",
                            "value": 6
                        },
                        {
                            "name": "\u82f1\u56fd",
                            "value": 1
                        },
                        {
                            "name": "\u65e5\u672c",
                            "value": 1
                        }
                    ],
                    "radius": "28%",
                    "center": [
                        "75%",
                        "35%"
                    ],
                    "label": {
                        "show": true,
                        "margin": 8,
                        "formatter": "{b}: {d}%",
                        "valueAnimation": false
                    },
                    "labelLine": {
                        "show": true,
                        "showAbove": false,
                        "length": 15,
                        "length2": 15,
                        "smooth": false,
                        "minTurnAngle": 90,
                        "maxSurfaceAngle": 90
                    },
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
                        "formatter": "{a}<br/>{b}: {c}\u90e8 ({d}%)",
                        "textStyle": {
                            "fontSize": 14
                        },
                        "borderWidth": 0,
                        "padding": 5,
                        "order": "seriesAsc"
                    },
                    "rippleEffect": {
                        "show": true,
                        "brushType": "stroke",
                        "scale": 2.5,
                        "period": 4
                    }
                }
            ],
            "xAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    },
                    "animation": true,
                    "animationThreshold": 2000,
                    "animationDuration": 1000,
                    "animationEasing": "cubicOut",
                    "animationDelay": 0,
                    "animationDurationUpdate": 300,
                    "animationEasingUpdate": "cubicOut",
                    "animationDelayUpdate": 0,
                    "data": [
                        "\u97e9\u56fd",
                        "\u7f8e\u56fd",
                        "\u82f1\u56fd",
                        "\u5fb7\u56fd",
                        "\u65e5\u672c",
                        "\u6cd5\u56fd",
                        "\u4fc4\u7f57\u65af",
                        "\u6cf0\u56fd",
                        "\u82ac\u5170"
                    ]
                }
            ],
            "yAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "max": 7,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    },
                    "animation": true,
                    "animationThreshold": 2000,
                    "animationDuration": 1000,
                    "animationEasing": "cubicOut",
                    "animationDelay": 0,
                    "animationDurationUpdate": 300,
                    "animationEasingUpdate": "cubicOut",
                    "animationDelayUpdate": 0
                }
            ],
            "title": [
                {
                    "show": true,
                    "text": "2018\u5e74\u97f3\u4e50\u5267\u5f15\u8fdb\u56fd\u5bb6\u5206\u5e03",
                    "target": "blank",
                    "subtext": "\u6570\u636e\u6765\u6e90\uff1a\u97f3\u4e50\u5267\u5f15\u8fdb\u7edf\u8ba1",
                    "subtarget": "blank",
                    "padding": 5,
                    "itemGap": 10,
                    "textAlign": "auto",
                    "textVerticalAlign": "auto",
                    "triggerEvent": false
                }
            ],
            "tooltip": {
                "show": true,
                "trigger": "axis",
                "triggerOn": "mousemove|click",
                "axisPointer": {
                    "type": "shadow"
                },
                "showContent": true,
                "alwaysShowContent": false,
                "showDelay": 0,
                "hideDelay": 100,
                "enterable": false,
                "confine": false,
                "appendToBody": false,
                "transitionDuration": 0.4,
                "formatter": "{b}: {c}\u90e8",
                "textStyle": {
                    "fontSize": 14
                },
                "borderWidth": 0,
                "padding": 5,
                "order": "seriesAsc"
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
            ]
        },
        {
            "legend": [
                {
                    "data": [
                        "\u5f15\u8fdb\u6570\u91cf",
                        "\u97e9\u56fd",
                        "\u7f8e\u56fd"
                    ],
                    "selected": {},
                    "show": true,
                    "top": "5%",
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
            "series": [
                {
                    "type": "bar",
                    "name": "\u5f15\u8fdb\u6570\u91cf",
                    "legendHoverLink": true,
                    "data": [
                        {
                            "name": "\u97e9\u56fd",
                            "value": 2
                        },
                        {
                            "name": "\u7f8e\u56fd",
                            "value": 3
                        },
                        {
                            "name": "\u82f1\u56fd",
                            "value": 0
                        },
                        {
                            "name": "\u5fb7\u56fd",
                            "value": 0
                        },
                        {
                            "name": "\u65e5\u672c",
                            "value": 0
                        },
                        {
                            "name": "\u6cd5\u56fd",
                            "value": 0
                        },
                        {
                            "name": "\u4fc4\u7f57\u65af",
                            "value": 0
                        },
                        {
                            "name": "\u6cf0\u56fd",
                            "value": 0
                        },
                        {
                            "name": "\u82ac\u5170",
                            "value": 0
                        }
                    ],
                    "realtimeSort": false,
                    "showBackground": false,
                    "stackStrategy": "samesign",
                    "cursor": "pointer",
                    "barMinHeight": 0,
                    "barCategoryGap": "20%",
                    "barGap": "30%",
                    "large": false,
                    "largeThreshold": 400,
                    "seriesLayoutBy": "column",
                    "datasetIndex": 0,
                    "clip": true,
                    "zlevel": 0,
                    "z": 2,
                    "label": {
                        "show": false,
                        "margin": 8,
                        "valueAnimation": false
                    },
                    "itemStyle": {
                        "color": "#5793f3"
                    }
                },
                {
                    "type": "pie",
                    "name": "\u5360\u6bd4",
                    "colorBy": "data",
                    "legendHoverLink": true,
                    "selectedMode": false,
                    "selectedOffset": 10,
                    "clockwise": true,
                    "startAngle": 90,
                    "minAngle": 0,
                    "minShowLabelAngle": 0,
                    "avoidLabelOverlap": true,
                    "stillShowZeroSum": true,
                    "percentPrecision": 2,
                    "showEmptyCircle": true,
                    "emptyCircleStyle": {
                        "color": "lightgray",
                        "borderColor": "#000",
                        "borderWidth": 0,
                        "borderType": "solid",
                        "borderDashOffset": 0,
                        "borderCap": "butt",
                        "borderJoin": "bevel",
                        "borderMiterLimit": 10,
                        "opacity": 1
                    },
                    "data": [
                        {
                            "name": "\u97e9\u56fd",
                            "value": 2
                        },
                        {
                            "name": "\u7f8e\u56fd",
                            "value": 3
                        }
                    ],
                    "radius": "28%",
                    "center": [
                        "75%",
                        "35%"
                    ],
                    "label": {
                        "show": true,
                        "margin": 8,
                        "formatter": "{b}: {d}%",
                        "valueAnimation": false
                    },
                    "labelLine": {
                        "show": true,
                        "showAbove": false,
                        "length": 15,
                        "length2": 15,
                        "smooth": false,
                        "minTurnAngle": 90,
                        "maxSurfaceAngle": 90
                    },
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
                        "formatter": "{a}<br/>{b}: {c}\u90e8 ({d}%)",
                        "textStyle": {
                            "fontSize": 14
                        },
                        "borderWidth": 0,
                        "padding": 5,
                        "order": "seriesAsc"
                    },
                    "rippleEffect": {
                        "show": true,
                        "brushType": "stroke",
                        "scale": 2.5,
                        "period": 4
                    }
                }
            ],
            "xAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    },
                    "animation": true,
                    "animationThreshold": 2000,
                    "animationDuration": 1000,
                    "animationEasing": "cubicOut",
                    "animationDelay": 0,
                    "animationDurationUpdate": 300,
                    "animationEasingUpdate": "cubicOut",
                    "animationDelayUpdate": 0,
                    "data": [
                        "\u97e9\u56fd",
                        "\u7f8e\u56fd",
                        "\u82f1\u56fd",
                        "\u5fb7\u56fd",
                        "\u65e5\u672c",
                        "\u6cd5\u56fd",
                        "\u4fc4\u7f57\u65af",
                        "\u6cf0\u56fd",
                        "\u82ac\u5170"
                    ]
                }
            ],
            "yAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "max": 4,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    },
                    "animation": true,
                    "animationThreshold": 2000,
                    "animationDuration": 1000,
                    "animationEasing": "cubicOut",
                    "animationDelay": 0,
                    "animationDurationUpdate": 300,
                    "animationEasingUpdate": "cubicOut",
                    "animationDelayUpdate": 0
                }
            ],
            "title": [
                {
                    "show": true,
                    "text": "2017\u5e74\u97f3\u4e50\u5267\u5f15\u8fdb\u56fd\u5bb6\u5206\u5e03",
                    "target": "blank",
                    "subtext": "\u6570\u636e\u6765\u6e90\uff1a\u97f3\u4e50\u5267\u5f15\u8fdb\u7edf\u8ba1",
                    "subtarget": "blank",
                    "padding": 5,
                    "itemGap": 10,
                    "textAlign": "auto",
                    "textVerticalAlign": "auto",
                    "triggerEvent": false
                }
            ],
            "tooltip": {
                "show": true,
                "trigger": "axis",
                "triggerOn": "mousemove|click",
                "axisPointer": {
                    "type": "shadow"
                },
                "showContent": true,
                "alwaysShowContent": false,
                "showDelay": 0,
                "hideDelay": 100,
                "enterable": false,
                "confine": false,
                "appendToBody": false,
                "transitionDuration": 0.4,
                "formatter": "{b}: {c}\u90e8",
                "textStyle": {
                    "fontSize": 14
                },
                "borderWidth": 0,
                "padding": 5,
                "order": "seriesAsc"
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
            ]
        },
        {
            "legend": [
                {
                    "data": [
                        "\u5f15\u8fdb\u6570\u91cf",
                        "\u97e9\u56fd",
                        "\u7f8e\u56fd"
                    ],
                    "selected": {},
                    "show": true,
                    "top": "5%",
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
            "series": [
                {
                    "type": "bar",
                    "name": "\u5f15\u8fdb\u6570\u91cf",
                    "legendHoverLink": true,
                    "data": [
                        {
                            "name": "\u97e9\u56fd",
                            "value": 1
                        },
                        {
                            "name": "\u7f8e\u56fd",
                            "value": 2
                        },
                        {
                            "name": "\u82f1\u56fd",
                            "value": 0
                        },
                        {
                            "name": "\u5fb7\u56fd",
                            "value": 0
                        },
                        {
                            "name": "\u65e5\u672c",
                            "value": 0
                        },
                        {
                            "name": "\u6cd5\u56fd",
                            "value": 0
                        },
                        {
                            "name": "\u4fc4\u7f57\u65af",
                            "value": 0
                        },
                        {
                            "name": "\u6cf0\u56fd",
                            "value": 0
                        },
                        {
                            "name": "\u82ac\u5170",
                            "value": 0
                        }
                    ],
                    "realtimeSort": false,
                    "showBackground": false,
                    "stackStrategy": "samesign",
                    "cursor": "pointer",
                    "barMinHeight": 0,
                    "barCategoryGap": "20%",
                    "barGap": "30%",
                    "large": false,
                    "largeThreshold": 400,
                    "seriesLayoutBy": "column",
                    "datasetIndex": 0,
                    "clip": true,
                    "zlevel": 0,
                    "z": 2,
                    "label": {
                        "show": false,
                        "margin": 8,
                        "valueAnimation": false
                    },
                    "itemStyle": {
                        "color": "#5793f3"
                    }
                },
                {
                    "type": "pie",
                    "name": "\u5360\u6bd4",
                    "colorBy": "data",
                    "legendHoverLink": true,
                    "selectedMode": false,
                    "selectedOffset": 10,
                    "clockwise": true,
                    "startAngle": 90,
                    "minAngle": 0,
                    "minShowLabelAngle": 0,
                    "avoidLabelOverlap": true,
                    "stillShowZeroSum": true,
                    "percentPrecision": 2,
                    "showEmptyCircle": true,
                    "emptyCircleStyle": {
                        "color": "lightgray",
                        "borderColor": "#000",
                        "borderWidth": 0,
                        "borderType": "solid",
                        "borderDashOffset": 0,
                        "borderCap": "butt",
                        "borderJoin": "bevel",
                        "borderMiterLimit": 10,
                        "opacity": 1
                    },
                    "data": [
                        {
                            "name": "\u97e9\u56fd",
                            "value": 1
                        },
                        {
                            "name": "\u7f8e\u56fd",
                            "value": 2
                        }
                    ],
                    "radius": "28%",
                    "center": [
                        "75%",
                        "35%"
                    ],
                    "label": {
                        "show": true,
                        "margin": 8,
                        "formatter": "{b}: {d}%",
                        "valueAnimation": false
                    },
                    "labelLine": {
                        "show": true,
                        "showAbove": false,
                        "length": 15,
                        "length2": 15,
                        "smooth": false,
                        "minTurnAngle": 90,
                        "maxSurfaceAngle": 90
                    },
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
                        "formatter": "{a}<br/>{b}: {c}\u90e8 ({d}%)",
                        "textStyle": {
                            "fontSize": 14
                        },
                        "borderWidth": 0,
                        "padding": 5,
                        "order": "seriesAsc"
                    },
                    "rippleEffect": {
                        "show": true,
                        "brushType": "stroke",
                        "scale": 2.5,
                        "period": 4
                    }
                }
            ],
            "xAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    },
                    "animation": true,
                    "animationThreshold": 2000,
                    "animationDuration": 1000,
                    "animationEasing": "cubicOut",
                    "animationDelay": 0,
                    "animationDurationUpdate": 300,
                    "animationEasingUpdate": "cubicOut",
                    "animationDelayUpdate": 0,
                    "data": [
                        "\u97e9\u56fd",
                        "\u7f8e\u56fd",
                        "\u82f1\u56fd",
                        "\u5fb7\u56fd",
                        "\u65e5\u672c",
                        "\u6cd5\u56fd",
                        "\u4fc4\u7f57\u65af",
                        "\u6cf0\u56fd",
                        "\u82ac\u5170"
                    ]
                }
            ],
            "yAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "max": 3,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    },
                    "animation": true,
                    "animationThreshold": 2000,
                    "animationDuration": 1000,
                    "animationEasing": "cubicOut",
                    "animationDelay": 0,
                    "animationDurationUpdate": 300,
                    "animationEasingUpdate": "cubicOut",
                    "animationDelayUpdate": 0
                }
            ],
            "title": [
                {
                    "show": true,
                    "text": "2016\u5e74\u97f3\u4e50\u5267\u5f15\u8fdb\u56fd\u5bb6\u5206\u5e03",
                    "target": "blank",
                    "subtext": "\u6570\u636e\u6765\u6e90\uff1a\u97f3\u4e50\u5267\u5f15\u8fdb\u7edf\u8ba1",
                    "subtarget": "blank",
                    "padding": 5,
                    "itemGap": 10,
                    "textAlign": "auto",
                    "textVerticalAlign": "auto",
                    "triggerEvent": false
                }
            ],
            "tooltip": {
                "show": true,
                "trigger": "axis",
                "triggerOn": "mousemove|click",
                "axisPointer": {
                    "type": "shadow"
                },
                "showContent": true,
                "alwaysShowContent": false,
                "showDelay": 0,
                "hideDelay": 100,
                "enterable": false,
                "confine": false,
                "appendToBody": false,
                "transitionDuration": 0.4,
                "formatter": "{b}: {c}\u90e8",
                "textStyle": {
                    "fontSize": 14
                },
                "borderWidth": 0,
                "padding": 5,
                "order": "seriesAsc"
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
            ]
        },
        {
            "legend": [
                {
                    "data": [
                        "\u5f15\u8fdb\u6570\u91cf",
                        "\u7f8e\u56fd"
                    ],
                    "selected": {},
                    "show": true,
                    "top": "5%",
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
            "series": [
                {
                    "type": "bar",
                    "name": "\u5f15\u8fdb\u6570\u91cf",
                    "legendHoverLink": true,
                    "data": [
                        {
                            "name": "\u97e9\u56fd",
                            "value": 0
                        },
                        {
                            "name": "\u7f8e\u56fd",
                            "value": 2
                        },
                        {
                            "name": "\u82f1\u56fd",
                            "value": 0
                        },
                        {
                            "name": "\u5fb7\u56fd",
                            "value": 0
                        },
                        {
                            "name": "\u65e5\u672c",
                            "value": 0
                        },
                        {
                            "name": "\u6cd5\u56fd",
                            "value": 0
                        },
                        {
                            "name": "\u4fc4\u7f57\u65af",
                            "value": 0
                        },
                        {
                            "name": "\u6cf0\u56fd",
                            "value": 0
                        },
                        {
                            "name": "\u82ac\u5170",
                            "value": 0
                        }
                    ],
                    "realtimeSort": false,
                    "showBackground": false,
                    "stackStrategy": "samesign",
                    "cursor": "pointer",
                    "barMinHeight": 0,
                    "barCategoryGap": "20%",
                    "barGap": "30%",
                    "large": false,
                    "largeThreshold": 400,
                    "seriesLayoutBy": "column",
                    "datasetIndex": 0,
                    "clip": true,
                    "zlevel": 0,
                    "z": 2,
                    "label": {
                        "show": false,
                        "margin": 8,
                        "valueAnimation": false
                    },
                    "itemStyle": {
                        "color": "#5793f3"
                    }
                },
                {
                    "type": "pie",
                    "name": "\u5360\u6bd4",
                    "colorBy": "data",
                    "legendHoverLink": true,
                    "selectedMode": false,
                    "selectedOffset": 10,
                    "clockwise": true,
                    "startAngle": 90,
                    "minAngle": 0,
                    "minShowLabelAngle": 0,
                    "avoidLabelOverlap": true,
                    "stillShowZeroSum": true,
                    "percentPrecision": 2,
                    "showEmptyCircle": true,
                    "emptyCircleStyle": {
                        "color": "lightgray",
                        "borderColor": "#000",
                        "borderWidth": 0,
                        "borderType": "solid",
                        "borderDashOffset": 0,
                        "borderCap": "butt",
                        "borderJoin": "bevel",
                        "borderMiterLimit": 10,
                        "opacity": 1
                    },
                    "data": [
                        {
                            "name": "\u7f8e\u56fd",
                            "value": 2
                        }
                    ],
                    "radius": "28%",
                    "center": [
                        "75%",
                        "35%"
                    ],
                    "label": {
                        "show": true,
                        "margin": 8,
                        "formatter": "{b}: {d}%",
                        "valueAnimation": false
                    },
                    "labelLine": {
                        "show": true,
                        "showAbove": false,
                        "length": 15,
                        "length2": 15,
                        "smooth": false,
                        "minTurnAngle": 90,
                        "maxSurfaceAngle": 90
                    },
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
                        "formatter": "{a}<br/>{b}: {c}\u90e8 ({d}%)",
                        "textStyle": {
                            "fontSize": 14
                        },
                        "borderWidth": 0,
                        "padding": 5,
                        "order": "seriesAsc"
                    },
                    "rippleEffect": {
                        "show": true,
                        "brushType": "stroke",
                        "scale": 2.5,
                        "period": 4
                    }
                }
            ],
            "xAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    },
                    "animation": true,
                    "animationThreshold": 2000,
                    "animationDuration": 1000,
                    "animationEasing": "cubicOut",
                    "animationDelay": 0,
                    "animationDurationUpdate": 300,
                    "animationEasingUpdate": "cubicOut",
                    "animationDelayUpdate": 0,
                    "data": [
                        "\u97e9\u56fd",
                        "\u7f8e\u56fd",
                        "\u82f1\u56fd",
                        "\u5fb7\u56fd",
                        "\u65e5\u672c",
                        "\u6cd5\u56fd",
                        "\u4fc4\u7f57\u65af",
                        "\u6cf0\u56fd",
                        "\u82ac\u5170"
                    ]
                }
            ],
            "yAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "max": 3,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    },
                    "animation": true,
                    "animationThreshold": 2000,
                    "animationDuration": 1000,
                    "animationEasing": "cubicOut",
                    "animationDelay": 0,
                    "animationDurationUpdate": 300,
                    "animationEasingUpdate": "cubicOut",
                    "animationDelayUpdate": 0
                }
            ],
            "title": [
                {
                    "show": true,
                    "text": "2015\u5e74\u97f3\u4e50\u5267\u5f15\u8fdb\u56fd\u5bb6\u5206\u5e03",
                    "target": "blank",
                    "subtext": "\u6570\u636e\u6765\u6e90\uff1a\u97f3\u4e50\u5267\u5f15\u8fdb\u7edf\u8ba1",
                    "subtarget": "blank",
                    "padding": 5,
                    "itemGap": 10,
                    "textAlign": "auto",
                    "textVerticalAlign": "auto",
                    "triggerEvent": false
                }
            ],
            "tooltip": {
                "show": true,
                "trigger": "axis",
                "triggerOn": "mousemove|click",
                "axisPointer": {
                    "type": "shadow"
                },
                "showContent": true,
                "alwaysShowContent": false,
                "showDelay": 0,
                "hideDelay": 100,
                "enterable": false,
                "confine": false,
                "appendToBody": false,
                "transitionDuration": 0.4,
                "formatter": "{b}: {c}\u90e8",
                "textStyle": {
                    "fontSize": 14
                },
                "borderWidth": 0,
                "padding": 5,
                "order": "seriesAsc"
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
            ]
        },
        {
            "legend": [
                {
                    "data": [
                        "\u5f15\u8fdb\u6570\u91cf",
                        "\u97e9\u56fd",
                        "\u7f8e\u56fd"
                    ],
                    "selected": {},
                    "show": true,
                    "top": "5%",
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
            "series": [
                {
                    "type": "bar",
                    "name": "\u5f15\u8fdb\u6570\u91cf",
                    "legendHoverLink": true,
                    "data": [
                        {
                            "name": "\u97e9\u56fd",
                            "value": 1
                        },
                        {
                            "name": "\u7f8e\u56fd",
                            "value": 1
                        },
                        {
                            "name": "\u82f1\u56fd",
                            "value": 0
                        },
                        {
                            "name": "\u5fb7\u56fd",
                            "value": 0
                        },
                        {
                            "name": "\u65e5\u672c",
                            "value": 0
                        },
                        {
                            "name": "\u6cd5\u56fd",
                            "value": 0
                        },
                        {
                            "name": "\u4fc4\u7f57\u65af",
                            "value": 0
                        },
                        {
                            "name": "\u6cf0\u56fd",
                            "value": 0
                        },
                        {
                            "name": "\u82ac\u5170",
                            "value": 0
                        }
                    ],
                    "realtimeSort": false,
                    "showBackground": false,
                    "stackStrategy": "samesign",
                    "cursor": "pointer",
                    "barMinHeight": 0,
                    "barCategoryGap": "20%",
                    "barGap": "30%",
                    "large": false,
                    "largeThreshold": 400,
                    "seriesLayoutBy": "column",
                    "datasetIndex": 0,
                    "clip": true,
                    "zlevel": 0,
                    "z": 2,
                    "label": {
                        "show": false,
                        "margin": 8,
                        "valueAnimation": false
                    },
                    "itemStyle": {
                        "color": "#5793f3"
                    }
                },
                {
                    "type": "pie",
                    "name": "\u5360\u6bd4",
                    "colorBy": "data",
                    "legendHoverLink": true,
                    "selectedMode": false,
                    "selectedOffset": 10,
                    "clockwise": true,
                    "startAngle": 90,
                    "minAngle": 0,
                    "minShowLabelAngle": 0,
                    "avoidLabelOverlap": true,
                    "stillShowZeroSum": true,
                    "percentPrecision": 2,
                    "showEmptyCircle": true,
                    "emptyCircleStyle": {
                        "color": "lightgray",
                        "borderColor": "#000",
                        "borderWidth": 0,
                        "borderType": "solid",
                        "borderDashOffset": 0,
                        "borderCap": "butt",
                        "borderJoin": "bevel",
                        "borderMiterLimit": 10,
                        "opacity": 1
                    },
                    "data": [
                        {
                            "name": "\u97e9\u56fd",
                            "value": 1
                        },
                        {
                            "name": "\u7f8e\u56fd",
                            "value": 1
                        }
                    ],
                    "radius": "28%",
                    "center": [
                        "75%",
                        "35%"
                    ],
                    "label": {
                        "show": true,
                        "margin": 8,
                        "formatter": "{b}: {d}%",
                        "valueAnimation": false
                    },
                    "labelLine": {
                        "show": true,
                        "showAbove": false,
                        "length": 15,
                        "length2": 15,
                        "smooth": false,
                        "minTurnAngle": 90,
                        "maxSurfaceAngle": 90
                    },
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
                        "formatter": "{a}<br/>{b}: {c}\u90e8 ({d}%)",
                        "textStyle": {
                            "fontSize": 14
                        },
                        "borderWidth": 0,
                        "padding": 5,
                        "order": "seriesAsc"
                    },
                    "rippleEffect": {
                        "show": true,
                        "brushType": "stroke",
                        "scale": 2.5,
                        "period": 4
                    }
                }
            ],
            "xAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    },
                    "animation": true,
                    "animationThreshold": 2000,
                    "animationDuration": 1000,
                    "animationEasing": "cubicOut",
                    "animationDelay": 0,
                    "animationDurationUpdate": 300,
                    "animationEasingUpdate": "cubicOut",
                    "animationDelayUpdate": 0,
                    "data": [
                        "\u97e9\u56fd",
                        "\u7f8e\u56fd",
                        "\u82f1\u56fd",
                        "\u5fb7\u56fd",
                        "\u65e5\u672c",
                        "\u6cd5\u56fd",
                        "\u4fc4\u7f57\u65af",
                        "\u6cf0\u56fd",
                        "\u82ac\u5170"
                    ]
                }
            ],
            "yAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "max": 2,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    },
                    "animation": true,
                    "animationThreshold": 2000,
                    "animationDuration": 1000,
                    "animationEasing": "cubicOut",
                    "animationDelay": 0,
                    "animationDurationUpdate": 300,
                    "animationEasingUpdate": "cubicOut",
                    "animationDelayUpdate": 0
                }
            ],
            "title": [
                {
                    "show": true,
                    "text": "2014\u5e74\u97f3\u4e50\u5267\u5f15\u8fdb\u56fd\u5bb6\u5206\u5e03",
                    "target": "blank",
                    "subtext": "\u6570\u636e\u6765\u6e90\uff1a\u97f3\u4e50\u5267\u5f15\u8fdb\u7edf\u8ba1",
                    "subtarget": "blank",
                    "padding": 5,
                    "itemGap": 10,
                    "textAlign": "auto",
                    "textVerticalAlign": "auto",
                    "triggerEvent": false
                }
            ],
            "tooltip": {
                "show": true,
                "trigger": "axis",
                "triggerOn": "mousemove|click",
                "axisPointer": {
                    "type": "shadow"
                },
                "showContent": true,
                "alwaysShowContent": false,
                "showDelay": 0,
                "hideDelay": 100,
                "enterable": false,
                "confine": false,
                "appendToBody": false,
                "transitionDuration": 0.4,
                "formatter": "{b}: {c}\u90e8",
                "textStyle": {
                    "fontSize": 14
                },
                "borderWidth": 0,
                "padding": 5,
                "order": "seriesAsc"
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
            ]
        },
        {
            "legend": [
                {
                    "data": [
                        "\u5f15\u8fdb\u6570\u91cf",
                        "\u97e9\u56fd",
                        "\u7f8e\u56fd",
                        "\u6cf0\u56fd"
                    ],
                    "selected": {},
                    "show": true,
                    "top": "5%",
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
            "series": [
                {
                    "type": "bar",
                    "name": "\u5f15\u8fdb\u6570\u91cf",
                    "legendHoverLink": true,
                    "data": [
                        {
                            "name": "\u97e9\u56fd",
                            "value": 1
                        },
                        {
                            "name": "\u7f8e\u56fd",
                            "value": 1
                        },
                        {
                            "name": "\u82f1\u56fd",
                            "value": 0
                        },
                        {
                            "name": "\u5fb7\u56fd",
                            "value": 0
                        },
                        {
                            "name": "\u65e5\u672c",
                            "value": 0
                        },
                        {
                            "name": "\u6cd5\u56fd",
                            "value": 0
                        },
                        {
                            "name": "\u4fc4\u7f57\u65af",
                            "value": 0
                        },
                        {
                            "name": "\u6cf0\u56fd",
                            "value": 1
                        },
                        {
                            "name": "\u82ac\u5170",
                            "value": 0
                        }
                    ],
                    "realtimeSort": false,
                    "showBackground": false,
                    "stackStrategy": "samesign",
                    "cursor": "pointer",
                    "barMinHeight": 0,
                    "barCategoryGap": "20%",
                    "barGap": "30%",
                    "large": false,
                    "largeThreshold": 400,
                    "seriesLayoutBy": "column",
                    "datasetIndex": 0,
                    "clip": true,
                    "zlevel": 0,
                    "z": 2,
                    "label": {
                        "show": false,
                        "margin": 8,
                        "valueAnimation": false
                    },
                    "itemStyle": {
                        "color": "#5793f3"
                    }
                },
                {
                    "type": "pie",
                    "name": "\u5360\u6bd4",
                    "colorBy": "data",
                    "legendHoverLink": true,
                    "selectedMode": false,
                    "selectedOffset": 10,
                    "clockwise": true,
                    "startAngle": 90,
                    "minAngle": 0,
                    "minShowLabelAngle": 0,
                    "avoidLabelOverlap": true,
                    "stillShowZeroSum": true,
                    "percentPrecision": 2,
                    "showEmptyCircle": true,
                    "emptyCircleStyle": {
                        "color": "lightgray",
                        "borderColor": "#000",
                        "borderWidth": 0,
                        "borderType": "solid",
                        "borderDashOffset": 0,
                        "borderCap": "butt",
                        "borderJoin": "bevel",
                        "borderMiterLimit": 10,
                        "opacity": 1
                    },
                    "data": [
                        {
                            "name": "\u97e9\u56fd",
                            "value": 1
                        },
                        {
                            "name": "\u7f8e\u56fd",
                            "value": 1
                        },
                        {
                            "name": "\u6cf0\u56fd",
                            "value": 1
                        }
                    ],
                    "radius": "28%",
                    "center": [
                        "75%",
                        "35%"
                    ],
                    "label": {
                        "show": true,
                        "margin": 8,
                        "formatter": "{b}: {d}%",
                        "valueAnimation": false
                    },
                    "labelLine": {
                        "show": true,
                        "showAbove": false,
                        "length": 15,
                        "length2": 15,
                        "smooth": false,
                        "minTurnAngle": 90,
                        "maxSurfaceAngle": 90
                    },
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
                        "formatter": "{a}<br/>{b}: {c}\u90e8 ({d}%)",
                        "textStyle": {
                            "fontSize": 14
                        },
                        "borderWidth": 0,
                        "padding": 5,
                        "order": "seriesAsc"
                    },
                    "rippleEffect": {
                        "show": true,
                        "brushType": "stroke",
                        "scale": 2.5,
                        "period": 4
                    }
                }
            ],
            "xAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    },
                    "animation": true,
                    "animationThreshold": 2000,
                    "animationDuration": 1000,
                    "animationEasing": "cubicOut",
                    "animationDelay": 0,
                    "animationDurationUpdate": 300,
                    "animationEasingUpdate": "cubicOut",
                    "animationDelayUpdate": 0,
                    "data": [
                        "\u97e9\u56fd",
                        "\u7f8e\u56fd",
                        "\u82f1\u56fd",
                        "\u5fb7\u56fd",
                        "\u65e5\u672c",
                        "\u6cd5\u56fd",
                        "\u4fc4\u7f57\u65af",
                        "\u6cf0\u56fd",
                        "\u82ac\u5170"
                    ]
                }
            ],
            "yAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "max": 2,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    },
                    "animation": true,
                    "animationThreshold": 2000,
                    "animationDuration": 1000,
                    "animationEasing": "cubicOut",
                    "animationDelay": 0,
                    "animationDurationUpdate": 300,
                    "animationEasingUpdate": "cubicOut",
                    "animationDelayUpdate": 0
                }
            ],
            "title": [
                {
                    "show": true,
                    "text": "2013\u5e74\u97f3\u4e50\u5267\u5f15\u8fdb\u56fd\u5bb6\u5206\u5e03",
                    "target": "blank",
                    "subtext": "\u6570\u636e\u6765\u6e90\uff1a\u97f3\u4e50\u5267\u5f15\u8fdb\u7edf\u8ba1",
                    "subtarget": "blank",
                    "padding": 5,
                    "itemGap": 10,
                    "textAlign": "auto",
                    "textVerticalAlign": "auto",
                    "triggerEvent": false
                }
            ],
            "tooltip": {
                "show": true,
                "trigger": "axis",
                "triggerOn": "mousemove|click",
                "axisPointer": {
                    "type": "shadow"
                },
                "showContent": true,
                "alwaysShowContent": false,
                "showDelay": 0,
                "hideDelay": 100,
                "enterable": false,
                "confine": false,
                "appendToBody": false,
                "transitionDuration": 0.4,
                "formatter": "{b}: {c}\u90e8",
                "textStyle": {
                    "fontSize": 14
                },
                "borderWidth": 0,
                "padding": 5,
                "order": "seriesAsc"
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
            ]
        },
        {
            "legend": [
                {
                    "data": [
                        "\u5f15\u8fdb\u6570\u91cf",
                        "\u82f1\u56fd"
                    ],
                    "selected": {},
                    "show": true,
                    "top": "5%",
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
            "series": [
                {
                    "type": "bar",
                    "name": "\u5f15\u8fdb\u6570\u91cf",
                    "legendHoverLink": true,
                    "data": [
                        {
                            "name": "\u97e9\u56fd",
                            "value": 0
                        },
                        {
                            "name": "\u7f8e\u56fd",
                            "value": 0
                        },
                        {
                            "name": "\u82f1\u56fd",
                            "value": 1
                        },
                        {
                            "name": "\u5fb7\u56fd",
                            "value": 0
                        },
                        {
                            "name": "\u65e5\u672c",
                            "value": 0
                        },
                        {
                            "name": "\u6cd5\u56fd",
                            "value": 0
                        },
                        {
                            "name": "\u4fc4\u7f57\u65af",
                            "value": 0
                        },
                        {
                            "name": "\u6cf0\u56fd",
                            "value": 0
                        },
                        {
                            "name": "\u82ac\u5170",
                            "value": 0
                        }
                    ],
                    "realtimeSort": false,
                    "showBackground": false,
                    "stackStrategy": "samesign",
                    "cursor": "pointer",
                    "barMinHeight": 0,
                    "barCategoryGap": "20%",
                    "barGap": "30%",
                    "large": false,
                    "largeThreshold": 400,
                    "seriesLayoutBy": "column",
                    "datasetIndex": 0,
                    "clip": true,
                    "zlevel": 0,
                    "z": 2,
                    "label": {
                        "show": false,
                        "margin": 8,
                        "valueAnimation": false
                    },
                    "itemStyle": {
                        "color": "#5793f3"
                    }
                },
                {
                    "type": "pie",
                    "name": "\u5360\u6bd4",
                    "colorBy": "data",
                    "legendHoverLink": true,
                    "selectedMode": false,
                    "selectedOffset": 10,
                    "clockwise": true,
                    "startAngle": 90,
                    "minAngle": 0,
                    "minShowLabelAngle": 0,
                    "avoidLabelOverlap": true,
                    "stillShowZeroSum": true,
                    "percentPrecision": 2,
                    "showEmptyCircle": true,
                    "emptyCircleStyle": {
                        "color": "lightgray",
                        "borderColor": "#000",
                        "borderWidth": 0,
                        "borderType": "solid",
                        "borderDashOffset": 0,
                        "borderCap": "butt",
                        "borderJoin": "bevel",
                        "borderMiterLimit": 10,
                        "opacity": 1
                    },
                    "data": [
                        {
                            "name": "\u82f1\u56fd",
                            "value": 1
                        }
                    ],
                    "radius": "28%",
                    "center": [
                        "75%",
                        "35%"
                    ],
                    "label": {
                        "show": true,
                        "margin": 8,
                        "formatter": "{b}: {d}%",
                        "valueAnimation": false
                    },
                    "labelLine": {
                        "show": true,
                        "showAbove": false,
                        "length": 15,
                        "length2": 15,
                        "smooth": false,
                        "minTurnAngle": 90,
                        "maxSurfaceAngle": 90
                    },
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
                        "formatter": "{a}<br/>{b}: {c}\u90e8 ({d}%)",
                        "textStyle": {
                            "fontSize": 14
                        },
                        "borderWidth": 0,
                        "padding": 5,
                        "order": "seriesAsc"
                    },
                    "rippleEffect": {
                        "show": true,
                        "brushType": "stroke",
                        "scale": 2.5,
                        "period": 4
                    }
                }
            ],
            "xAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    },
                    "animation": true,
                    "animationThreshold": 2000,
                    "animationDuration": 1000,
                    "animationEasing": "cubicOut",
                    "animationDelay": 0,
                    "animationDurationUpdate": 300,
                    "animationEasingUpdate": "cubicOut",
                    "animationDelayUpdate": 0,
                    "data": [
                        "\u97e9\u56fd",
                        "\u7f8e\u56fd",
                        "\u82f1\u56fd",
                        "\u5fb7\u56fd",
                        "\u65e5\u672c",
                        "\u6cd5\u56fd",
                        "\u4fc4\u7f57\u65af",
                        "\u6cf0\u56fd",
                        "\u82ac\u5170"
                    ]
                }
            ],
            "yAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "max": 2,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    },
                    "animation": true,
                    "animationThreshold": 2000,
                    "animationDuration": 1000,
                    "animationEasing": "cubicOut",
                    "animationDelay": 0,
                    "animationDurationUpdate": 300,
                    "animationEasingUpdate": "cubicOut",
                    "animationDelayUpdate": 0
                }
            ],
            "title": [
                {
                    "show": true,
                    "text": "2012\u5e74\u97f3\u4e50\u5267\u5f15\u8fdb\u56fd\u5bb6\u5206\u5e03",
                    "target": "blank",
                    "subtext": "\u6570\u636e\u6765\u6e90\uff1a\u97f3\u4e50\u5267\u5f15\u8fdb\u7edf\u8ba1",
                    "subtarget": "blank",
                    "padding": 5,
                    "itemGap": 10,
                    "textAlign": "auto",
                    "textVerticalAlign": "auto",
                    "triggerEvent": false
                }
            ],
            "tooltip": {
                "show": true,
                "trigger": "axis",
                "triggerOn": "mousemove|click",
                "axisPointer": {
                    "type": "shadow"
                },
                "showContent": true,
                "alwaysShowContent": false,
                "showDelay": 0,
                "hideDelay": 100,
                "enterable": false,
                "confine": false,
                "appendToBody": false,
                "transitionDuration": 0.4,
                "formatter": "{b}: {c}\u90e8",
                "textStyle": {
                    "fontSize": 14
                },
                "borderWidth": 0,
                "padding": 5,
                "order": "seriesAsc"
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
            ]
        },
        {
            "legend": [
                {
                    "data": [
                        "\u5f15\u8fdb\u6570\u91cf",
                        "\u82f1\u56fd"
                    ],
                    "selected": {},
                    "show": true,
                    "top": "5%",
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
            "series": [
                {
                    "type": "bar",
                    "name": "\u5f15\u8fdb\u6570\u91cf",
                    "legendHoverLink": true,
                    "data": [
                        {
                            "name": "\u97e9\u56fd",
                            "value": 0
                        },
                        {
                            "name": "\u7f8e\u56fd",
                            "value": 0
                        },
                        {
                            "name": "\u82f1\u56fd",
                            "value": 1
                        },
                        {
                            "name": "\u5fb7\u56fd",
                            "value": 0
                        },
                        {
                            "name": "\u65e5\u672c",
                            "value": 0
                        },
                        {
                            "name": "\u6cd5\u56fd",
                            "value": 0
                        },
                        {
                            "name": "\u4fc4\u7f57\u65af",
                            "value": 0
                        },
                        {
                            "name": "\u6cf0\u56fd",
                            "value": 0
                        },
                        {
                            "name": "\u82ac\u5170",
                            "value": 0
                        }
                    ],
                    "realtimeSort": false,
                    "showBackground": false,
                    "stackStrategy": "samesign",
                    "cursor": "pointer",
                    "barMinHeight": 0,
                    "barCategoryGap": "20%",
                    "barGap": "30%",
                    "large": false,
                    "largeThreshold": 400,
                    "seriesLayoutBy": "column",
                    "datasetIndex": 0,
                    "clip": true,
                    "zlevel": 0,
                    "z": 2,
                    "label": {
                        "show": false,
                        "margin": 8,
                        "valueAnimation": false
                    },
                    "itemStyle": {
                        "color": "#5793f3"
                    }
                },
                {
                    "type": "pie",
                    "name": "\u5360\u6bd4",
                    "colorBy": "data",
                    "legendHoverLink": true,
                    "selectedMode": false,
                    "selectedOffset": 10,
                    "clockwise": true,
                    "startAngle": 90,
                    "minAngle": 0,
                    "minShowLabelAngle": 0,
                    "avoidLabelOverlap": true,
                    "stillShowZeroSum": true,
                    "percentPrecision": 2,
                    "showEmptyCircle": true,
                    "emptyCircleStyle": {
                        "color": "lightgray",
                        "borderColor": "#000",
                        "borderWidth": 0,
                        "borderType": "solid",
                        "borderDashOffset": 0,
                        "borderCap": "butt",
                        "borderJoin": "bevel",
                        "borderMiterLimit": 10,
                        "opacity": 1
                    },
                    "data": [
                        {
                            "name": "\u82f1\u56fd",
                            "value": 1
                        }
                    ],
                    "radius": "28%",
                    "center": [
                        "75%",
                        "35%"
                    ],
                    "label": {
                        "show": true,
                        "margin": 8,
                        "formatter": "{b}: {d}%",
                        "valueAnimation": false
                    },
                    "labelLine": {
                        "show": true,
                        "showAbove": false,
                        "length": 15,
                        "length2": 15,
                        "smooth": false,
                        "minTurnAngle": 90,
                        "maxSurfaceAngle": 90
                    },
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
                        "formatter": "{a}<br/>{b}: {c}\u90e8 ({d}%)",
                        "textStyle": {
                            "fontSize": 14
                        },
                        "borderWidth": 0,
                        "padding": 5,
                        "order": "seriesAsc"
                    },
                    "rippleEffect": {
                        "show": true,
                        "brushType": "stroke",
                        "scale": 2.5,
                        "period": 4
                    }
                }
            ],
            "xAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    },
                    "animation": true,
                    "animationThreshold": 2000,
                    "animationDuration": 1000,
                    "animationEasing": "cubicOut",
                    "animationDelay": 0,
                    "animationDurationUpdate": 300,
                    "animationEasingUpdate": "cubicOut",
                    "animationDelayUpdate": 0,
                    "data": [
                        "\u97e9\u56fd",
                        "\u7f8e\u56fd",
                        "\u82f1\u56fd",
                        "\u5fb7\u56fd",
                        "\u65e5\u672c",
                        "\u6cd5\u56fd",
                        "\u4fc4\u7f57\u65af",
                        "\u6cf0\u56fd",
                        "\u82ac\u5170"
                    ]
                }
            ],
            "yAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "max": 2,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    },
                    "animation": true,
                    "animationThreshold": 2000,
                    "animationDuration": 1000,
                    "animationEasing": "cubicOut",
                    "animationDelay": 0,
                    "animationDurationUpdate": 300,
                    "animationEasingUpdate": "cubicOut",
                    "animationDelayUpdate": 0
                }
            ],
            "title": [
                {
                    "show": true,
                    "text": "2011\u5e74\u97f3\u4e50\u5267\u5f15\u8fdb\u56fd\u5bb6\u5206\u5e03",
                    "target": "blank",
                    "subtext": "\u6570\u636e\u6765\u6e90\uff1a\u97f3\u4e50\u5267\u5f15\u8fdb\u7edf\u8ba1",
                    "subtarget": "blank",
                    "padding": 5,
                    "itemGap": 10,
                    "textAlign": "auto",
                    "textVerticalAlign": "auto",
                    "triggerEvent": false
                }
            ],
            "tooltip": {
                "show": true,
                "trigger": "axis",
                "triggerOn": "mousemove|click",
                "axisPointer": {
                    "type": "shadow"
                },
                "showContent": true,
                "alwaysShowContent": false,
                "showDelay": 0,
                "hideDelay": 100,
                "enterable": false,
                "confine": false,
                "appendToBody": false,
                "transitionDuration": 0.4,
                "formatter": "{b}: {c}\u90e8",
                "textStyle": {
                    "fontSize": 14
                },
                "borderWidth": 0,
                "padding": 5,
                "order": "seriesAsc"
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
            ]
        },
        {
            "legend": [
                {
                    "data": [
                        "\u5f15\u8fdb\u6570\u91cf",
                        "\u7f8e\u56fd",
                        "\u5fb7\u56fd"
                    ],
                    "selected": {},
                    "show": true,
                    "top": "5%",
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
            "series": [
                {
                    "type": "bar",
                    "name": "\u5f15\u8fdb\u6570\u91cf",
                    "legendHoverLink": true,
                    "data": [
                        {
                            "name": "\u97e9\u56fd",
                            "value": 0
                        },
                        {
                            "name": "\u7f8e\u56fd",
                            "value": 1
                        },
                        {
                            "name": "\u82f1\u56fd",
                            "value": 0
                        },
                        {
                            "name": "\u5fb7\u56fd",
                            "value": 1
                        },
                        {
                            "name": "\u65e5\u672c",
                            "value": 0
                        },
                        {
                            "name": "\u6cd5\u56fd",
                            "value": 0
                        },
                        {
                            "name": "\u4fc4\u7f57\u65af",
                            "value": 0
                        },
                        {
                            "name": "\u6cf0\u56fd",
                            "value": 0
                        },
                        {
                            "name": "\u82ac\u5170",
                            "value": 0
                        }
                    ],
                    "realtimeSort": false,
                    "showBackground": false,
                    "stackStrategy": "samesign",
                    "cursor": "pointer",
                    "barMinHeight": 0,
                    "barCategoryGap": "20%",
                    "barGap": "30%",
                    "large": false,
                    "largeThreshold": 400,
                    "seriesLayoutBy": "column",
                    "datasetIndex": 0,
                    "clip": true,
                    "zlevel": 0,
                    "z": 2,
                    "label": {
                        "show": false,
                        "margin": 8,
                        "valueAnimation": false
                    },
                    "itemStyle": {
                        "color": "#5793f3"
                    }
                },
                {
                    "type": "pie",
                    "name": "\u5360\u6bd4",
                    "colorBy": "data",
                    "legendHoverLink": true,
                    "selectedMode": false,
                    "selectedOffset": 10,
                    "clockwise": true,
                    "startAngle": 90,
                    "minAngle": 0,
                    "minShowLabelAngle": 0,
                    "avoidLabelOverlap": true,
                    "stillShowZeroSum": true,
                    "percentPrecision": 2,
                    "showEmptyCircle": true,
                    "emptyCircleStyle": {
                        "color": "lightgray",
                        "borderColor": "#000",
                        "borderWidth": 0,
                        "borderType": "solid",
                        "borderDashOffset": 0,
                        "borderCap": "butt",
                        "borderJoin": "bevel",
                        "borderMiterLimit": 10,
                        "opacity": 1
                    },
                    "data": [
                        {
                            "name": "\u7f8e\u56fd",
                            "value": 1
                        },
                        {
                            "name": "\u5fb7\u56fd",
                            "value": 1
                        }
                    ],
                    "radius": "28%",
                    "center": [
                        "75%",
                        "35%"
                    ],
                    "label": {
                        "show": true,
                        "margin": 8,
                        "formatter": "{b}: {d}%",
                        "valueAnimation": false
                    },
                    "labelLine": {
                        "show": true,
                        "showAbove": false,
                        "length": 15,
                        "length2": 15,
                        "smooth": false,
                        "minTurnAngle": 90,
                        "maxSurfaceAngle": 90
                    },
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
                        "formatter": "{a}<br/>{b}: {c}\u90e8 ({d}%)",
                        "textStyle": {
                            "fontSize": 14
                        },
                        "borderWidth": 0,
                        "padding": 5,
                        "order": "seriesAsc"
                    },
                    "rippleEffect": {
                        "show": true,
                        "brushType": "stroke",
                        "scale": 2.5,
                        "period": 4
                    }
                }
            ],
            "xAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    },
                    "animation": true,
                    "animationThreshold": 2000,
                    "animationDuration": 1000,
                    "animationEasing": "cubicOut",
                    "animationDelay": 0,
                    "animationDurationUpdate": 300,
                    "animationEasingUpdate": "cubicOut",
                    "animationDelayUpdate": 0,
                    "data": [
                        "\u97e9\u56fd",
                        "\u7f8e\u56fd",
                        "\u82f1\u56fd",
                        "\u5fb7\u56fd",
                        "\u65e5\u672c",
                        "\u6cd5\u56fd",
                        "\u4fc4\u7f57\u65af",
                        "\u6cf0\u56fd",
                        "\u82ac\u5170"
                    ]
                }
            ],
            "yAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "max": 2,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    },
                    "animation": true,
                    "animationThreshold": 2000,
                    "animationDuration": 1000,
                    "animationEasing": "cubicOut",
                    "animationDelay": 0,
                    "animationDurationUpdate": 300,
                    "animationEasingUpdate": "cubicOut",
                    "animationDelayUpdate": 0
                }
            ],
            "title": [
                {
                    "show": true,
                    "text": "2008\u5e74\u97f3\u4e50\u5267\u5f15\u8fdb\u56fd\u5bb6\u5206\u5e03",
                    "target": "blank",
                    "subtext": "\u6570\u636e\u6765\u6e90\uff1a\u97f3\u4e50\u5267\u5f15\u8fdb\u7edf\u8ba1",
                    "subtarget": "blank",
                    "padding": 5,
                    "itemGap": 10,
                    "textAlign": "auto",
                    "textVerticalAlign": "auto",
                    "triggerEvent": false
                }
            ],
            "tooltip": {
                "show": true,
                "trigger": "axis",
                "triggerOn": "mousemove|click",
                "axisPointer": {
                    "type": "shadow"
                },
                "showContent": true,
                "alwaysShowContent": false,
                "showDelay": 0,
                "hideDelay": 100,
                "enterable": false,
                "confine": false,
                "appendToBody": false,
                "transitionDuration": 0.4,
                "formatter": "{b}: {c}\u90e8",
                "textStyle": {
                    "fontSize": 14
                },
                "borderWidth": 0,
                "padding": 5,
                "order": "seriesAsc"
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
            ]
        },
        {
            "legend": [
                {
                    "data": [
                        "\u5f15\u8fdb\u6570\u91cf",
                        "\u7f8e\u56fd"
                    ],
                    "selected": {},
                    "show": true,
                    "top": "5%",
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
            "series": [
                {
                    "type": "bar",
                    "name": "\u5f15\u8fdb\u6570\u91cf",
                    "legendHoverLink": true,
                    "data": [
                        {
                            "name": "\u97e9\u56fd",
                            "value": 0
                        },
                        {
                            "name": "\u7f8e\u56fd",
                            "value": 1
                        },
                        {
                            "name": "\u82f1\u56fd",
                            "value": 0
                        },
                        {
                            "name": "\u5fb7\u56fd",
                            "value": 0
                        },
                        {
                            "name": "\u65e5\u672c",
                            "value": 0
                        },
                        {
                            "name": "\u6cd5\u56fd",
                            "value": 0
                        },
                        {
                            "name": "\u4fc4\u7f57\u65af",
                            "value": 0
                        },
                        {
                            "name": "\u6cf0\u56fd",
                            "value": 0
                        },
                        {
                            "name": "\u82ac\u5170",
                            "value": 0
                        }
                    ],
                    "realtimeSort": false,
                    "showBackground": false,
                    "stackStrategy": "samesign",
                    "cursor": "pointer",
                    "barMinHeight": 0,
                    "barCategoryGap": "20%",
                    "barGap": "30%",
                    "large": false,
                    "largeThreshold": 400,
                    "seriesLayoutBy": "column",
                    "datasetIndex": 0,
                    "clip": true,
                    "zlevel": 0,
                    "z": 2,
                    "label": {
                        "show": false,
                        "margin": 8,
                        "valueAnimation": false
                    },
                    "itemStyle": {
                        "color": "#5793f3"
                    }
                },
                {
                    "type": "pie",
                    "name": "\u5360\u6bd4",
                    "colorBy": "data",
                    "legendHoverLink": true,
                    "selectedMode": false,
                    "selectedOffset": 10,
                    "clockwise": true,
                    "startAngle": 90,
                    "minAngle": 0,
                    "minShowLabelAngle": 0,
                    "avoidLabelOverlap": true,
                    "stillShowZeroSum": true,
                    "percentPrecision": 2,
                    "showEmptyCircle": true,
                    "emptyCircleStyle": {
                        "color": "lightgray",
                        "borderColor": "#000",
                        "borderWidth": 0,
                        "borderType": "solid",
                        "borderDashOffset": 0,
                        "borderCap": "butt",
                        "borderJoin": "bevel",
                        "borderMiterLimit": 10,
                        "opacity": 1
                    },
                    "data": [
                        {
                            "name": "\u7f8e\u56fd",
                            "value": 1
                        }
                    ],
                    "radius": "28%",
                    "center": [
                        "75%",
                        "35%"
                    ],
                    "label": {
                        "show": true,
                        "margin": 8,
                        "formatter": "{b}: {d}%",
                        "valueAnimation": false
                    },
                    "labelLine": {
                        "show": true,
                        "showAbove": false,
                        "length": 15,
                        "length2": 15,
                        "smooth": false,
                        "minTurnAngle": 90,
                        "maxSurfaceAngle": 90
                    },
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
                        "formatter": "{a}<br/>{b}: {c}\u90e8 ({d}%)",
                        "textStyle": {
                            "fontSize": 14
                        },
                        "borderWidth": 0,
                        "padding": 5,
                        "order": "seriesAsc"
                    },
                    "rippleEffect": {
                        "show": true,
                        "brushType": "stroke",
                        "scale": 2.5,
                        "period": 4
                    }
                }
            ],
            "xAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    },
                    "animation": true,
                    "animationThreshold": 2000,
                    "animationDuration": 1000,
                    "animationEasing": "cubicOut",
                    "animationDelay": 0,
                    "animationDurationUpdate": 300,
                    "animationEasingUpdate": "cubicOut",
                    "animationDelayUpdate": 0,
                    "data": [
                        "\u97e9\u56fd",
                        "\u7f8e\u56fd",
                        "\u82f1\u56fd",
                        "\u5fb7\u56fd",
                        "\u65e5\u672c",
                        "\u6cd5\u56fd",
                        "\u4fc4\u7f57\u65af",
                        "\u6cf0\u56fd",
                        "\u82ac\u5170"
                    ]
                }
            ],
            "yAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "max": 2,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    },
                    "animation": true,
                    "animationThreshold": 2000,
                    "animationDuration": 1000,
                    "animationEasing": "cubicOut",
                    "animationDelay": 0,
                    "animationDurationUpdate": 300,
                    "animationEasingUpdate": "cubicOut",
                    "animationDelayUpdate": 0
                }
            ],
            "title": [
                {
                    "show": true,
                    "text": "2006\u5e74\u97f3\u4e50\u5267\u5f15\u8fdb\u56fd\u5bb6\u5206\u5e03",
                    "target": "blank",
                    "subtext": "\u6570\u636e\u6765\u6e90\uff1a\u97f3\u4e50\u5267\u5f15\u8fdb\u7edf\u8ba1",
                    "subtarget": "blank",
                    "padding": 5,
                    "itemGap": 10,
                    "textAlign": "auto",
                    "textVerticalAlign": "auto",
                    "triggerEvent": false
                }
            ],
            "tooltip": {
                "show": true,
                "trigger": "axis",
                "triggerOn": "mousemove|click",
                "axisPointer": {
                    "type": "shadow"
                },
                "showContent": true,
                "alwaysShowContent": false,
                "showDelay": 0,
                "hideDelay": 100,
                "enterable": false,
                "confine": false,
                "appendToBody": false,
                "transitionDuration": 0.4,
                "formatter": "{b}: {c}\u90e8",
                "textStyle": {
                    "fontSize": 14
                },
                "borderWidth": 0,
                "padding": 5,
                "order": "seriesAsc"
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
            ]
        },
        {
            "legend": [
                {
                    "data": [
                        "\u5f15\u8fdb\u6570\u91cf",
                        "\u7f8e\u56fd"
                    ],
                    "selected": {},
                    "show": true,
                    "top": "5%",
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
            "series": [
                {
                    "type": "bar",
                    "name": "\u5f15\u8fdb\u6570\u91cf",
                    "legendHoverLink": true,
                    "data": [
                        {
                            "name": "\u97e9\u56fd",
                            "value": 0
                        },
                        {
                            "name": "\u7f8e\u56fd",
                            "value": 1
                        },
                        {
                            "name": "\u82f1\u56fd",
                            "value": 0
                        },
                        {
                            "name": "\u5fb7\u56fd",
                            "value": 0
                        },
                        {
                            "name": "\u65e5\u672c",
                            "value": 0
                        },
                        {
                            "name": "\u6cd5\u56fd",
                            "value": 0
                        },
                        {
                            "name": "\u4fc4\u7f57\u65af",
                            "value": 0
                        },
                        {
                            "name": "\u6cf0\u56fd",
                            "value": 0
                        },
                        {
                            "name": "\u82ac\u5170",
                            "value": 0
                        }
                    ],
                    "realtimeSort": false,
                    "showBackground": false,
                    "stackStrategy": "samesign",
                    "cursor": "pointer",
                    "barMinHeight": 0,
                    "barCategoryGap": "20%",
                    "barGap": "30%",
                    "large": false,
                    "largeThreshold": 400,
                    "seriesLayoutBy": "column",
                    "datasetIndex": 0,
                    "clip": true,
                    "zlevel": 0,
                    "z": 2,
                    "label": {
                        "show": false,
                        "margin": 8,
                        "valueAnimation": false
                    },
                    "itemStyle": {
                        "color": "#5793f3"
                    }
                },
                {
                    "type": "pie",
                    "name": "\u5360\u6bd4",
                    "colorBy": "data",
                    "legendHoverLink": true,
                    "selectedMode": false,
                    "selectedOffset": 10,
                    "clockwise": true,
                    "startAngle": 90,
                    "minAngle": 0,
                    "minShowLabelAngle": 0,
                    "avoidLabelOverlap": true,
                    "stillShowZeroSum": true,
                    "percentPrecision": 2,
                    "showEmptyCircle": true,
                    "emptyCircleStyle": {
                        "color": "lightgray",
                        "borderColor": "#000",
                        "borderWidth": 0,
                        "borderType": "solid",
                        "borderDashOffset": 0,
                        "borderCap": "butt",
                        "borderJoin": "bevel",
                        "borderMiterLimit": 10,
                        "opacity": 1
                    },
                    "data": [
                        {
                            "name": "\u7f8e\u56fd",
                            "value": 1
                        }
                    ],
                    "radius": "28%",
                    "center": [
                        "75%",
                        "35%"
                    ],
                    "label": {
                        "show": true,
                        "margin": 8,
                        "formatter": "{b}: {d}%",
                        "valueAnimation": false
                    },
                    "labelLine": {
                        "show": true,
                        "showAbove": false,
                        "length": 15,
                        "length2": 15,
                        "smooth": false,
                        "minTurnAngle": 90,
                        "maxSurfaceAngle": 90
                    },
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
                        "formatter": "{a}<br/>{b}: {c}\u90e8 ({d}%)",
                        "textStyle": {
                            "fontSize": 14
                        },
                        "borderWidth": 0,
                        "padding": 5,
                        "order": "seriesAsc"
                    },
                    "rippleEffect": {
                        "show": true,
                        "brushType": "stroke",
                        "scale": 2.5,
                        "period": 4
                    }
                }
            ],
            "xAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    },
                    "animation": true,
                    "animationThreshold": 2000,
                    "animationDuration": 1000,
                    "animationEasing": "cubicOut",
                    "animationDelay": 0,
                    "animationDurationUpdate": 300,
                    "animationEasingUpdate": "cubicOut",
                    "animationDelayUpdate": 0,
                    "data": [
                        "\u97e9\u56fd",
                        "\u7f8e\u56fd",
                        "\u82f1\u56fd",
                        "\u5fb7\u56fd",
                        "\u65e5\u672c",
                        "\u6cd5\u56fd",
                        "\u4fc4\u7f57\u65af",
                        "\u6cf0\u56fd",
                        "\u82ac\u5170"
                    ]
                }
            ],
            "yAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "max": 2,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    },
                    "animation": true,
                    "animationThreshold": 2000,
                    "animationDuration": 1000,
                    "animationEasing": "cubicOut",
                    "animationDelay": 0,
                    "animationDurationUpdate": 300,
                    "animationEasingUpdate": "cubicOut",
                    "animationDelayUpdate": 0
                }
            ],
            "title": [
                {
                    "show": true,
                    "text": "2002\u5e74\u97f3\u4e50\u5267\u5f15\u8fdb\u56fd\u5bb6\u5206\u5e03",
                    "target": "blank",
                    "subtext": "\u6570\u636e\u6765\u6e90\uff1a\u97f3\u4e50\u5267\u5f15\u8fdb\u7edf\u8ba1",
                    "subtarget": "blank",
                    "padding": 5,
                    "itemGap": 10,
                    "textAlign": "auto",
                    "textVerticalAlign": "auto",
                    "triggerEvent": false
                }
            ],
            "tooltip": {
                "show": true,
                "trigger": "axis",
                "triggerOn": "mousemove|click",
                "axisPointer": {
                    "type": "shadow"
                },
                "showContent": true,
                "alwaysShowContent": false,
                "showDelay": 0,
                "hideDelay": 100,
                "enterable": false,
                "confine": false,
                "appendToBody": false,
                "transitionDuration": 0.4,
                "formatter": "{b}: {c}\u90e8",
                "textStyle": {
                    "fontSize": 14
                },
                "borderWidth": 0,
                "padding": 5,
                "order": "seriesAsc"
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
            ]
        },
        {
            "legend": [
                {
                    "data": [
                        "\u5f15\u8fdb\u6570\u91cf",
                        "\u65e5\u672c"
                    ],
                    "selected": {},
                    "show": true,
                    "top": "5%",
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
            "series": [
                {
                    "type": "bar",
                    "name": "\u5f15\u8fdb\u6570\u91cf",
                    "legendHoverLink": true,
                    "data": [
                        {
                            "name": "\u97e9\u56fd",
                            "value": 0
                        },
                        {
                            "name": "\u7f8e\u56fd",
                            "value": 0
                        },
                        {
                            "name": "\u82f1\u56fd",
                            "value": 0
                        },
                        {
                            "name": "\u5fb7\u56fd",
                            "value": 0
                        },
                        {
                            "name": "\u65e5\u672c",
                            "value": 1
                        },
                        {
                            "name": "\u6cd5\u56fd",
                            "value": 0
                        },
                        {
                            "name": "\u4fc4\u7f57\u65af",
                            "value": 0
                        },
                        {
                            "name": "\u6cf0\u56fd",
                            "value": 0
                        },
                        {
                            "name": "\u82ac\u5170",
                            "value": 0
                        }
                    ],
                    "realtimeSort": false,
                    "showBackground": false,
                    "stackStrategy": "samesign",
                    "cursor": "pointer",
                    "barMinHeight": 0,
                    "barCategoryGap": "20%",
                    "barGap": "30%",
                    "large": false,
                    "largeThreshold": 400,
                    "seriesLayoutBy": "column",
                    "datasetIndex": 0,
                    "clip": true,
                    "zlevel": 0,
                    "z": 2,
                    "label": {
                        "show": false,
                        "margin": 8,
                        "valueAnimation": false
                    },
                    "itemStyle": {
                        "color": "#5793f3"
                    }
                },
                {
                    "type": "pie",
                    "name": "\u5360\u6bd4",
                    "colorBy": "data",
                    "legendHoverLink": true,
                    "selectedMode": false,
                    "selectedOffset": 10,
                    "clockwise": true,
                    "startAngle": 90,
                    "minAngle": 0,
                    "minShowLabelAngle": 0,
                    "avoidLabelOverlap": true,
                    "stillShowZeroSum": true,
                    "percentPrecision": 2,
                    "showEmptyCircle": true,
                    "emptyCircleStyle": {
                        "color": "lightgray",
                        "borderColor": "#000",
                        "borderWidth": 0,
                        "borderType": "solid",
                        "borderDashOffset": 0,
                        "borderCap": "butt",
                        "borderJoin": "bevel",
                        "borderMiterLimit": 10,
                        "opacity": 1
                    },
                    "data": [
                        {
                            "name": "\u65e5\u672c",
                            "value": 1
                        }
                    ],
                    "radius": "28%",
                    "center": [
                        "75%",
                        "35%"
                    ],
                    "label": {
                        "show": true,
                        "margin": 8,
                        "formatter": "{b}: {d}%",
                        "valueAnimation": false
                    },
                    "labelLine": {
                        "show": true,
                        "showAbove": false,
                        "length": 15,
                        "length2": 15,
                        "smooth": false,
                        "minTurnAngle": 90,
                        "maxSurfaceAngle": 90
                    },
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
                        "formatter": "{a}<br/>{b}: {c}\u90e8 ({d}%)",
                        "textStyle": {
                            "fontSize": 14
                        },
                        "borderWidth": 0,
                        "padding": 5,
                        "order": "seriesAsc"
                    },
                    "rippleEffect": {
                        "show": true,
                        "brushType": "stroke",
                        "scale": 2.5,
                        "period": 4
                    }
                }
            ],
            "xAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    },
                    "animation": true,
                    "animationThreshold": 2000,
                    "animationDuration": 1000,
                    "animationEasing": "cubicOut",
                    "animationDelay": 0,
                    "animationDurationUpdate": 300,
                    "animationEasingUpdate": "cubicOut",
                    "animationDelayUpdate": 0,
                    "data": [
                        "\u97e9\u56fd",
                        "\u7f8e\u56fd",
                        "\u82f1\u56fd",
                        "\u5fb7\u56fd",
                        "\u65e5\u672c",
                        "\u6cd5\u56fd",
                        "\u4fc4\u7f57\u65af",
                        "\u6cf0\u56fd",
                        "\u82ac\u5170"
                    ]
                }
            ],
            "yAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "max": 2,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    },
                    "animation": true,
                    "animationThreshold": 2000,
                    "animationDuration": 1000,
                    "animationEasing": "cubicOut",
                    "animationDelay": 0,
                    "animationDurationUpdate": 300,
                    "animationEasingUpdate": "cubicOut",
                    "animationDelayUpdate": 0
                }
            ],
            "title": [
                {
                    "show": true,
                    "text": "1996\u5e74\u97f3\u4e50\u5267\u5f15\u8fdb\u56fd\u5bb6\u5206\u5e03",
                    "target": "blank",
                    "subtext": "\u6570\u636e\u6765\u6e90\uff1a\u97f3\u4e50\u5267\u5f15\u8fdb\u7edf\u8ba1",
                    "subtarget": "blank",
                    "padding": 5,
                    "itemGap": 10,
                    "textAlign": "auto",
                    "textVerticalAlign": "auto",
                    "triggerEvent": false
                }
            ],
            "tooltip": {
                "show": true,
                "trigger": "axis",
                "triggerOn": "mousemove|click",
                "axisPointer": {
                    "type": "shadow"
                },
                "showContent": true,
                "alwaysShowContent": false,
                "showDelay": 0,
                "hideDelay": 100,
                "enterable": false,
                "confine": false,
                "appendToBody": false,
                "transitionDuration": 0.4,
                "formatter": "{b}: {c}\u90e8",
                "textStyle": {
                    "fontSize": 14
                },
                "borderWidth": 0,
                "padding": 5,
                "order": "seriesAsc"
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
            ]
        },
        {
            "legend": [
                {
                    "data": [
                        "\u5f15\u8fdb\u6570\u91cf",
                        "\u7f8e\u56fd"
                    ],
                    "selected": {},
                    "show": true,
                    "top": "5%",
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
            "series": [
                {
                    "type": "bar",
                    "name": "\u5f15\u8fdb\u6570\u91cf",
                    "legendHoverLink": true,
                    "data": [
                        {
                            "name": "\u97e9\u56fd",
                            "value": 0
                        },
                        {
                            "name": "\u7f8e\u56fd",
                            "value": 3
                        },
                        {
                            "name": "\u82f1\u56fd",
                            "value": 0
                        },
                        {
                            "name": "\u5fb7\u56fd",
                            "value": 0
                        },
                        {
                            "name": "\u65e5\u672c",
                            "value": 0
                        },
                        {
                            "name": "\u6cd5\u56fd",
                            "value": 0
                        },
                        {
                            "name": "\u4fc4\u7f57\u65af",
                            "value": 0
                        },
                        {
                            "name": "\u6cf0\u56fd",
                            "value": 0
                        },
                        {
                            "name": "\u82ac\u5170",
                            "value": 0
                        }
                    ],
                    "realtimeSort": false,
                    "showBackground": false,
                    "stackStrategy": "samesign",
                    "cursor": "pointer",
                    "barMinHeight": 0,
                    "barCategoryGap": "20%",
                    "barGap": "30%",
                    "large": false,
                    "largeThreshold": 400,
                    "seriesLayoutBy": "column",
                    "datasetIndex": 0,
                    "clip": true,
                    "zlevel": 0,
                    "z": 2,
                    "label": {
                        "show": false,
                        "margin": 8,
                        "valueAnimation": false
                    },
                    "itemStyle": {
                        "color": "#5793f3"
                    }
                },
                {
                    "type": "pie",
                    "name": "\u5360\u6bd4",
                    "colorBy": "data",
                    "legendHoverLink": true,
                    "selectedMode": false,
                    "selectedOffset": 10,
                    "clockwise": true,
                    "startAngle": 90,
                    "minAngle": 0,
                    "minShowLabelAngle": 0,
                    "avoidLabelOverlap": true,
                    "stillShowZeroSum": true,
                    "percentPrecision": 2,
                    "showEmptyCircle": true,
                    "emptyCircleStyle": {
                        "color": "lightgray",
                        "borderColor": "#000",
                        "borderWidth": 0,
                        "borderType": "solid",
                        "borderDashOffset": 0,
                        "borderCap": "butt",
                        "borderJoin": "bevel",
                        "borderMiterLimit": 10,
                        "opacity": 1
                    },
                    "data": [
                        {
                            "name": "\u7f8e\u56fd",
                            "value": 3
                        }
                    ],
                    "radius": "28%",
                    "center": [
                        "75%",
                        "35%"
                    ],
                    "label": {
                        "show": true,
                        "margin": 8,
                        "formatter": "{b}: {d}%",
                        "valueAnimation": false
                    },
                    "labelLine": {
                        "show": true,
                        "showAbove": false,
                        "length": 15,
                        "length2": 15,
                        "smooth": false,
                        "minTurnAngle": 90,
                        "maxSurfaceAngle": 90
                    },
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
                        "formatter": "{a}<br/>{b}: {c}\u90e8 ({d}%)",
                        "textStyle": {
                            "fontSize": 14
                        },
                        "borderWidth": 0,
                        "padding": 5,
                        "order": "seriesAsc"
                    },
                    "rippleEffect": {
                        "show": true,
                        "brushType": "stroke",
                        "scale": 2.5,
                        "period": 4
                    }
                }
            ],
            "xAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    },
                    "animation": true,
                    "animationThreshold": 2000,
                    "animationDuration": 1000,
                    "animationEasing": "cubicOut",
                    "animationDelay": 0,
                    "animationDurationUpdate": 300,
                    "animationEasingUpdate": "cubicOut",
                    "animationDelayUpdate": 0,
                    "data": [
                        "\u97e9\u56fd",
                        "\u7f8e\u56fd",
                        "\u82f1\u56fd",
                        "\u5fb7\u56fd",
                        "\u65e5\u672c",
                        "\u6cd5\u56fd",
                        "\u4fc4\u7f57\u65af",
                        "\u6cf0\u56fd",
                        "\u82ac\u5170"
                    ]
                }
            ],
            "yAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "max": 4,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    },
                    "animation": true,
                    "animationThreshold": 2000,
                    "animationDuration": 1000,
                    "animationEasing": "cubicOut",
                    "animationDelay": 0,
                    "animationDurationUpdate": 300,
                    "animationEasingUpdate": "cubicOut",
                    "animationDelayUpdate": 0
                }
            ],
            "title": [
                {
                    "show": true,
                    "text": "1987\u5e74\u97f3\u4e50\u5267\u5f15\u8fdb\u56fd\u5bb6\u5206\u5e03",
                    "target": "blank",
                    "subtext": "\u6570\u636e\u6765\u6e90\uff1a\u97f3\u4e50\u5267\u5f15\u8fdb\u7edf\u8ba1",
                    "subtarget": "blank",
                    "padding": 5,
                    "itemGap": 10,
                    "textAlign": "auto",
                    "textVerticalAlign": "auto",
                    "triggerEvent": false
                }
            ],
            "tooltip": {
                "show": true,
                "trigger": "axis",
                "triggerOn": "mousemove|click",
                "axisPointer": {
                    "type": "shadow"
                },
                "showContent": true,
                "alwaysShowContent": false,
                "showDelay": 0,
                "hideDelay": 100,
                "enterable": false,
                "confine": false,
                "appendToBody": false,
                "transitionDuration": 0.4,
                "formatter": "{b}: {c}\u90e8",
                "textStyle": {
                    "fontSize": 14
                },
                "borderWidth": 0,
                "padding": 5,
                "order": "seriesAsc"
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
            ]
        }
    ]
      }
    };
  },
  mounted() {
    this.initChart();
  },
  methods: {
    initChart() {
      this.chartInstance = echarts.init(this.$refs.chartRef, 'white', { renderer: 'canvas' });
      this.chartInstance.setOption(this.option);
    }
  }
};
</script>

<style scoped>
.chart-container {
  width: 100%;
  height: 100%;
  min-width: 300px; /* 设置最小宽度防止变形 */
}
</style>