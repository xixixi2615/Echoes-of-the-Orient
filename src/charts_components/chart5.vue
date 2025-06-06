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
        "type": "pie",
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
          { "name": "韩国", "value": 51 },
          { "name": "美国", "value": 33 },
          { "name": "英国", "value": 6 },
          { "name": "德国", "value": 2 },
          { "name": "俄罗斯", "value": 2 },
          { "name": "法国", "value": 2 },
          { "name": "日本", "value": 2 },
          { "name": "荷兰", "value": 1 },
          { "name": "泰国", "value": 1 }
        ],
        "radius": [ "0%", "75%" ],
        "center": [ "50%", "50%" ],
        "label": {
          "show": true,
          "margin": 8,
          "formatter": "{b}: {c} ({d}%)",
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
        "data": [
          "韩国", "美国", "英国", "德国", "俄罗斯", "法国", "日本", "荷兰", "泰国"
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
    "title": [
      {
        "show": true,
        "text": "音乐剧引入国家数量占比",
        "target": "blank",
        "subtarget": "blank",
        "padding": 5,
        "itemGap": 10,
        "textAlign": "auto",
        "textVerticalAlign": "auto",
        "triggerEvent": false
      }
    ]
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