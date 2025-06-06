<template>
  <div class="chart-container" ref="chartRef" ></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import * as echarts from 'echarts';

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
        "type": "bar",
        "name": "引入数量",
        "legendHoverLink": true,
        "data": [
          3, 1, 1, 1, 2, 1, 1, 3, 2, 2, 3, 5, 11, 5, 6, 13, 12, 20, 8
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
          "show": true,
          "margin": 8,
          "valueAnimation": false
        }
      }
    ],
    "legend": [
      {
        "data": [
          "引入数量"
        ],
        "selected": {},
        "show": true,
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
      "textStyle": {
        "fontSize": 14
      },
      "borderWidth": 0,
      "padding": 5,
      "order": "seriesAsc"
    },
    "xAxis": [
      {
        "show": true,
        "scale": false,
        "nameLocation": "end",
        "nameGap": 15,
        "gridIndex": 0,
        "axisLabel": {
          "show": true,
          "rotate": 45,
          "margin": 8,
          "valueAnimation": false
        },
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
          "1987年", "1996年", "2002年", "2006年", "2008年", "2011年", "2012年", 
          "2013年", "2014年", "2015年", "2016年", "2017年", "2018年", "2019年", 
          "2020年", "2021年", "2022年", "2023年", "2024年"
        ]
      }
    ],
    "yAxis": [
      {
        "name": "引入数量(部)",
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
        "animationDelayUpdate": 0
      }
    ],
    "title": [
      {
        "show": true,
        "text": "历年音乐剧引入数量统计",
        "target": "blank",
        "subtarget": "blank",
        "padding": 5,
        "itemGap": 10,
        "textAlign": "auto",
        "textVerticalAlign": "auto",
        "triggerEvent": false
      }
    ],
    "dataZoom": {
      "show": true,
      "type": "slider",
      "showDetail": true,
      "showDataShadow": true,
      "realtime": true,
      "start": 20,
      "end": 80,
      "orient": "horizontal",
      "zoomLock": false,
      "filterMode": "filter"
    }
  };
  
  // 设置图表选项
  chartInstance.setOption(option);
  
  // 监听窗口大小变化，调整图表尺寸
  const handleResize = () => {
    if (chartInstance) {
      chartInstance.resize();
    }
  };
  
  window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
  // 组件卸载时销毁图表实例并移除事件监听器
  if (chartInstance) {
    chartInstance.dispose();
    chartInstance = null;
  }
  
  const handleResize = () => {
    if (chartInstance) {
      chartInstance.resize();
    }
  };
  
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
    