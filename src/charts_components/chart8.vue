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
            "type": "graph",
            "layout": "circular",
            "symbolSize": 10,
            "circular": {
                "rotateLabel": true
            },
            "force": {
                "repulsion": 3000,
                "gravity": 0.2,
                "edgeLength": 30,
                "friction": 0.6,
                "layoutAnimation": true
            },
            "label": {
                "show": true,
                "position": "right",
                "margin": 8,
                "fontSize": 12,
                "valueAnimation": false
            },
            "lineStyle": {
                "show": true,
                "width": 1.5,
                "opacity": 1,
                "curveness": 0.2,
                "type": "solid",
                "color": "source"
            },
            "roam": true,
            "draggable": false,
            "focusNodeAdjacency": true,
            "data": [
                {
                    "name": "\u97f3\u4e50\u5267",
                    "symbolSize": 45.0,
                    "category": 0
                },
                {
                    "name": "\u6545\u4e8b",
                    "symbolSize": 42.62376237623762,
                    "category": 0
                },
                {
                    "name": "\u8001\u677f",
                    "symbolSize": 37.57425742574257,
                    "category": 0
                },
                {
                    "name": "\u7236\u4eb2",
                    "symbolSize": 32.22772277227723,
                    "category": 0
                },
                {
                    "name": "\u5a5a\u793c",
                    "symbolSize": 31.633663366336634,
                    "category": 0
                },
                {
                    "name": "\u7537\u4eba",
                    "symbolSize": 27.178217821782177,
                    "category": 0
                },
                {
                    "name": "\u5b69\u5b50",
                    "symbolSize": 23.91089108910891,
                    "category": 0
                },
                {
                    "name": "\u9732\u897f",
                    "symbolSize": 19.455445544554458,
                    "category": 0
                },
                {
                    "name": "\u795e\u79d8",
                    "symbolSize": 22.128712871287128,
                    "category": 0
                },
                {
                    "name": "\u97f3\u4e50",
                    "symbolSize": 21.237623762376238,
                    "category": 0
                },
                {
                    "name": "\u4f5c\u54c1",
                    "symbolSize": 19.752475247524753,
                    "category": 0
                },
                {
                    "name": "\u5e74\u8f7b",
                    "symbolSize": 23.91089108910891,
                    "category": 0
                },
                {
                    "name": "\u79d8\u5bc6",
                    "symbolSize": 18.86138613861386,
                    "category": 0
                },
                {
                    "name": "\u59bb\u5b50",
                    "symbolSize": 15.891089108910892,
                    "category": 0
                },
                {
                    "name": "\u516c\u53f8",
                    "symbolSize": 18.564356435643564,
                    "category": 0
                },
                {
                    "name": "\u529e\u516c\u5ba4",
                    "symbolSize": 22.425742574257427,
                    "category": 0
                },
                {
                    "name": "\u89c2\u4f17",
                    "symbolSize": 23.019801980198018,
                    "category": 0
                },
                {
                    "name": "\u4e16\u754c",
                    "symbolSize": 18.86138613861386,
                    "category": 0
                },
                {
                    "name": "\u793e\u4f1a",
                    "symbolSize": 19.752475247524753,
                    "category": 0
                },
                {
                    "name": "\u4eba\u4eec",
                    "symbolSize": 15.594059405940595,
                    "category": 0
                },
                {
                    "name": "\u533b\u751f",
                    "symbolSize": 20.346534653465348,
                    "category": 0
                },
                {
                    "name": "\u6f14\u5458",
                    "symbolSize": 17.97029702970297,
                    "category": 0
                },
                {
                    "name": "\u620f\u5267",
                    "symbolSize": 17.673267326732674,
                    "category": 0
                },
                {
                    "name": "\u8ba1\u5212",
                    "symbolSize": 15.0,
                    "category": 0
                },
                {
                    "name": "\u9ed1\u624b\u515a",
                    "symbolSize": 15.594059405940595,
                    "category": 0
                },
                {
                    "name": "\u6210\u5458",
                    "symbolSize": 19.15841584158416,
                    "category": 0
                },
                {
                    "name": "\u821e\u53f0",
                    "symbolSize": 18.26732673267327,
                    "category": 0
                },
                {
                    "name": "\u4eba\u7c7b",
                    "symbolSize": 16.782178217821784,
                    "category": 0
                },
                {
                    "name": "\u7ecf\u5386",
                    "symbolSize": 16.485148514851485,
                    "category": 0
                },
                {
                    "name": "\u6d17\u8863\u670d",
                    "symbolSize": 17.07920792079208,
                    "category": 0
                }
            ],
            "categories": [
                {
                    "name": "\u5173\u952e\u8bcd"
                }
            ],
            "edgeLabel": {
                "show": false,
                "margin": 8,
                "valueAnimation": false
            },
            "edgeSymbol": [
                null,
                null
            ],
            "edgeSymbolSize": 10,
            "links": [
                {
                    "source": "\u97f3\u4e50\u5267",
                    "target": "\u6545\u4e8b",
                    "value": 14
                },
                {
                    "source": "\u97f3\u4e50\u5267",
                    "target": "\u7236\u4eb2",
                    "value": 2
                },
                {
                    "source": "\u97f3\u4e50\u5267",
                    "target": "\u97f3\u4e50",
                    "value": 5
                },
                {
                    "source": "\u97f3\u4e50\u5267",
                    "target": "\u4f5c\u54c1",
                    "value": 10
                },
                {
                    "source": "\u97f3\u4e50\u5267",
                    "target": "\u89c2\u4f17",
                    "value": 7
                },
                {
                    "source": "\u97f3\u4e50\u5267",
                    "target": "\u4e16\u754c",
                    "value": 2
                },
                {
                    "source": "\u97f3\u4e50\u5267",
                    "target": "\u793e\u4f1a",
                    "value": 9
                },
                {
                    "source": "\u97f3\u4e50\u5267",
                    "target": "\u533b\u751f",
                    "value": 2
                },
                {
                    "source": "\u97f3\u4e50\u5267",
                    "target": "\u6f14\u5458",
                    "value": 3
                },
                {
                    "source": "\u97f3\u4e50\u5267",
                    "target": "\u620f\u5267",
                    "value": 5
                },
                {
                    "source": "\u97f3\u4e50\u5267",
                    "target": "\u821e\u53f0",
                    "value": 5
                },
                {
                    "source": "\u97f3\u4e50\u5267",
                    "target": "\u4eba\u7c7b",
                    "value": 3
                },
                {
                    "source": "\u97f3\u4e50\u5267",
                    "target": "\u7ecf\u5386",
                    "value": 4
                },
                {
                    "source": "\u97f3\u4e50\u5267",
                    "target": "\u6d17\u8863\u670d",
                    "value": 3
                },
                {
                    "source": "\u6545\u4e8b",
                    "target": "\u8001\u677f",
                    "value": 1
                },
                {
                    "source": "\u6545\u4e8b",
                    "target": "\u7236\u4eb2",
                    "value": 1
                },
                {
                    "source": "\u6545\u4e8b",
                    "target": "\u5a5a\u793c",
                    "value": 12
                },
                {
                    "source": "\u6545\u4e8b",
                    "target": "\u7537\u4eba",
                    "value": 1
                },
                {
                    "source": "\u6545\u4e8b",
                    "target": "\u795e\u79d8",
                    "value": 8
                },
                {
                    "source": "\u6545\u4e8b",
                    "target": "\u97f3\u4e50",
                    "value": 2
                },
                {
                    "source": "\u6545\u4e8b",
                    "target": "\u5e74\u8f7b",
                    "value": 8
                },
                {
                    "source": "\u6545\u4e8b",
                    "target": "\u516c\u53f8",
                    "value": 1
                },
                {
                    "source": "\u6545\u4e8b",
                    "target": "\u89c2\u4f17",
                    "value": 3
                },
                {
                    "source": "\u6545\u4e8b",
                    "target": "\u4e16\u754c",
                    "value": 1
                },
                {
                    "source": "\u6545\u4e8b",
                    "target": "\u793e\u4f1a",
                    "value": 6
                },
                {
                    "source": "\u6545\u4e8b",
                    "target": "\u4eba\u4eec",
                    "value": 1
                },
                {
                    "source": "\u6545\u4e8b",
                    "target": "\u533b\u751f",
                    "value": 4
                },
                {
                    "source": "\u6545\u4e8b",
                    "target": "\u6210\u5458",
                    "value": 2
                },
                {
                    "source": "\u6545\u4e8b",
                    "target": "\u821e\u53f0",
                    "value": 1
                },
                {
                    "source": "\u6545\u4e8b",
                    "target": "\u4eba\u7c7b",
                    "value": 7
                },
                {
                    "source": "\u6545\u4e8b",
                    "target": "\u7ecf\u5386",
                    "value": 1
                },
                {
                    "source": "\u8001\u677f",
                    "target": "\u7537\u4eba",
                    "value": 3
                },
                {
                    "source": "\u8001\u677f",
                    "target": "\u9732\u897f",
                    "value": 9
                },
                {
                    "source": "\u8001\u677f",
                    "target": "\u795e\u79d8",
                    "value": 1
                },
                {
                    "source": "\u8001\u677f",
                    "target": "\u5e74\u8f7b",
                    "value": 1
                },
                {
                    "source": "\u8001\u677f",
                    "target": "\u79d8\u5bc6",
                    "value": 3
                },
                {
                    "source": "\u8001\u677f",
                    "target": "\u516c\u53f8",
                    "value": 14
                },
                {
                    "source": "\u8001\u677f",
                    "target": "\u529e\u516c\u5ba4",
                    "value": 23
                },
                {
                    "source": "\u8001\u677f",
                    "target": "\u89c2\u4f17",
                    "value": 4
                },
                {
                    "source": "\u8001\u677f",
                    "target": "\u4e16\u754c",
                    "value": 1
                },
                {
                    "source": "\u8001\u677f",
                    "target": "\u6f14\u5458",
                    "value": 1
                },
                {
                    "source": "\u8001\u677f",
                    "target": "\u8ba1\u5212",
                    "value": 3
                },
                {
                    "source": "\u8001\u677f",
                    "target": "\u6210\u5458",
                    "value": 3
                },
                {
                    "source": "\u8001\u677f",
                    "target": "\u821e\u53f0",
                    "value": 1
                },
                {
                    "source": "\u7236\u4eb2",
                    "target": "\u5a5a\u793c",
                    "value": 20
                },
                {
                    "source": "\u7236\u4eb2",
                    "target": "\u7537\u4eba",
                    "value": 16
                },
                {
                    "source": "\u7236\u4eb2",
                    "target": "\u5b69\u5b50",
                    "value": 1
                },
                {
                    "source": "\u7236\u4eb2",
                    "target": "\u97f3\u4e50",
                    "value": 2
                },
                {
                    "source": "\u7236\u4eb2",
                    "target": "\u5e74\u8f7b",
                    "value": 1
                },
                {
                    "source": "\u7236\u4eb2",
                    "target": "\u79d8\u5bc6",
                    "value": 2
                },
                {
                    "source": "\u7236\u4eb2",
                    "target": "\u793e\u4f1a",
                    "value": 1
                },
                {
                    "source": "\u7236\u4eb2",
                    "target": "\u4eba\u4eec",
                    "value": 1
                },
                {
                    "source": "\u7236\u4eb2",
                    "target": "\u620f\u5267",
                    "value": 1
                },
                {
                    "source": "\u7236\u4eb2",
                    "target": "\u8ba1\u5212",
                    "value": 2
                },
                {
                    "source": "\u7236\u4eb2",
                    "target": "\u6210\u5458",
                    "value": 2
                },
                {
                    "source": "\u7236\u4eb2",
                    "target": "\u7ecf\u5386",
                    "value": 1
                },
                {
                    "source": "\u5a5a\u793c",
                    "target": "\u7537\u4eba",
                    "value": 11
                },
                {
                    "source": "\u5a5a\u793c",
                    "target": "\u5b69\u5b50",
                    "value": 1
                },
                {
                    "source": "\u5a5a\u793c",
                    "target": "\u795e\u79d8",
                    "value": 2
                },
                {
                    "source": "\u5a5a\u793c",
                    "target": "\u97f3\u4e50",
                    "value": 1
                },
                {
                    "source": "\u5a5a\u793c",
                    "target": "\u5e74\u8f7b",
                    "value": 2
                },
                {
                    "source": "\u5a5a\u793c",
                    "target": "\u79d8\u5bc6",
                    "value": 3
                },
                {
                    "source": "\u5a5a\u793c",
                    "target": "\u4eba\u4eec",
                    "value": 2
                },
                {
                    "source": "\u5a5a\u793c",
                    "target": "\u6210\u5458",
                    "value": 1
                },
                {
                    "source": "\u5a5a\u793c",
                    "target": "\u4eba\u7c7b",
                    "value": 2
                },
                {
                    "source": "\u7537\u4eba",
                    "target": "\u9732\u897f",
                    "value": 1
                },
                {
                    "source": "\u7537\u4eba",
                    "target": "\u79d8\u5bc6",
                    "value": 2
                },
                {
                    "source": "\u7537\u4eba",
                    "target": "\u6f14\u5458",
                    "value": 2
                },
                {
                    "source": "\u7537\u4eba",
                    "target": "\u9ed1\u624b\u515a",
                    "value": 2
                },
                {
                    "source": "\u7537\u4eba",
                    "target": "\u6210\u5458",
                    "value": 5
                },
                {
                    "source": "\u7537\u4eba",
                    "target": "\u7ecf\u5386",
                    "value": 1
                },
                {
                    "source": "\u5b69\u5b50",
                    "target": "\u9732\u897f",
                    "value": 1
                },
                {
                    "source": "\u5b69\u5b50",
                    "target": "\u795e\u79d8",
                    "value": 2
                },
                {
                    "source": "\u5b69\u5b50",
                    "target": "\u97f3\u4e50",
                    "value": 8
                },
                {
                    "source": "\u5b69\u5b50",
                    "target": "\u5e74\u8f7b",
                    "value": 7
                },
                {
                    "source": "\u5b69\u5b50",
                    "target": "\u79d8\u5bc6",
                    "value": 1
                },
                {
                    "source": "\u5b69\u5b50",
                    "target": "\u59bb\u5b50",
                    "value": 2
                },
                {
                    "source": "\u5b69\u5b50",
                    "target": "\u4e16\u754c",
                    "value": 2
                },
                {
                    "source": "\u5b69\u5b50",
                    "target": "\u793e\u4f1a",
                    "value": 1
                },
                {
                    "source": "\u5b69\u5b50",
                    "target": "\u4eba\u4eec",
                    "value": 2
                },
                {
                    "source": "\u5b69\u5b50",
                    "target": "\u533b\u751f",
                    "value": 6
                },
                {
                    "source": "\u9732\u897f",
                    "target": "\u89c2\u4f17",
                    "value": 6
                },
                {
                    "source": "\u9732\u897f",
                    "target": "\u793e\u4f1a",
                    "value": 1
                },
                {
                    "source": "\u9732\u897f",
                    "target": "\u8ba1\u5212",
                    "value": 1
                },
                {
                    "source": "\u795e\u79d8",
                    "target": "\u5e74\u8f7b",
                    "value": 4
                },
                {
                    "source": "\u795e\u79d8",
                    "target": "\u79d8\u5bc6",
                    "value": 3
                },
                {
                    "source": "\u795e\u79d8",
                    "target": "\u59bb\u5b50",
                    "value": 2
                },
                {
                    "source": "\u795e\u79d8",
                    "target": "\u4e16\u754c",
                    "value": 4
                },
                {
                    "source": "\u795e\u79d8",
                    "target": "\u533b\u751f",
                    "value": 3
                },
                {
                    "source": "\u795e\u79d8",
                    "target": "\u4eba\u7c7b",
                    "value": 1
                },
                {
                    "source": "\u97f3\u4e50",
                    "target": "\u4f5c\u54c1",
                    "value": 1
                },
                {
                    "source": "\u97f3\u4e50",
                    "target": "\u5e74\u8f7b",
                    "value": 1
                },
                {
                    "source": "\u97f3\u4e50",
                    "target": "\u89c2\u4f17",
                    "value": 1
                },
                {
                    "source": "\u97f3\u4e50",
                    "target": "\u6210\u5458",
                    "value": 2
                },
                {
                    "source": "\u97f3\u4e50",
                    "target": "\u821e\u53f0",
                    "value": 1
                },
                {
                    "source": "\u97f3\u4e50",
                    "target": "\u7ecf\u5386",
                    "value": 3
                },
                {
                    "source": "\u4f5c\u54c1",
                    "target": "\u89c2\u4f17",
                    "value": 1
                },
                {
                    "source": "\u4f5c\u54c1",
                    "target": "\u4e16\u754c",
                    "value": 1
                },
                {
                    "source": "\u4f5c\u54c1",
                    "target": "\u620f\u5267",
                    "value": 8
                },
                {
                    "source": "\u4f5c\u54c1",
                    "target": "\u821e\u53f0",
                    "value": 1
                },
                {
                    "source": "\u4f5c\u54c1",
                    "target": "\u6d17\u8863\u670d",
                    "value": 2
                },
                {
                    "source": "\u5e74\u8f7b",
                    "target": "\u79d8\u5bc6",
                    "value": 3
                },
                {
                    "source": "\u5e74\u8f7b",
                    "target": "\u59bb\u5b50",
                    "value": 1
                },
                {
                    "source": "\u5e74\u8f7b",
                    "target": "\u4e16\u754c",
                    "value": 3
                },
                {
                    "source": "\u5e74\u8f7b",
                    "target": "\u4eba\u4eec",
                    "value": 1
                },
                {
                    "source": "\u5e74\u8f7b",
                    "target": "\u533b\u751f",
                    "value": 3
                },
                {
                    "source": "\u5e74\u8f7b",
                    "target": "\u8ba1\u5212",
                    "value": 1
                },
                {
                    "source": "\u5e74\u8f7b",
                    "target": "\u6210\u5458",
                    "value": 1
                },
                {
                    "source": "\u5e74\u8f7b",
                    "target": "\u4eba\u7c7b",
                    "value": 1
                },
                {
                    "source": "\u79d8\u5bc6",
                    "target": "\u4e16\u754c",
                    "value": 2
                },
                {
                    "source": "\u79d8\u5bc6",
                    "target": "\u8ba1\u5212",
                    "value": 1
                },
                {
                    "source": "\u79d8\u5bc6",
                    "target": "\u6210\u5458",
                    "value": 1
                },
                {
                    "source": "\u59bb\u5b50",
                    "target": "\u4eba\u4eec",
                    "value": 1
                },
                {
                    "source": "\u59bb\u5b50",
                    "target": "\u533b\u751f",
                    "value": 5
                },
                {
                    "source": "\u516c\u53f8",
                    "target": "\u529e\u516c\u5ba4",
                    "value": 5
                },
                {
                    "source": "\u529e\u516c\u5ba4",
                    "target": "\u8ba1\u5212",
                    "value": 2
                },
                {
                    "source": "\u529e\u516c\u5ba4",
                    "target": "\u7ecf\u5386",
                    "value": 3
                },
                {
                    "source": "\u89c2\u4f17",
                    "target": "\u793e\u4f1a",
                    "value": 3
                },
                {
                    "source": "\u89c2\u4f17",
                    "target": "\u4eba\u4eec",
                    "value": 1
                },
                {
                    "source": "\u89c2\u4f17",
                    "target": "\u6f14\u5458",
                    "value": 1
                },
                {
                    "source": "\u89c2\u4f17",
                    "target": "\u821e\u53f0",
                    "value": 5
                },
                {
                    "source": "\u89c2\u4f17",
                    "target": "\u6d17\u8863\u670d",
                    "value": 4
                },
                {
                    "source": "\u4e16\u754c",
                    "target": "\u533b\u751f",
                    "value": 1
                },
                {
                    "source": "\u4e16\u754c",
                    "target": "\u620f\u5267",
                    "value": 3
                },
                {
                    "source": "\u4e16\u754c",
                    "target": "\u4eba\u7c7b",
                    "value": 1
                },
                {
                    "source": "\u4e16\u754c",
                    "target": "\u7ecf\u5386",
                    "value": 1
                },
                {
                    "source": "\u793e\u4f1a",
                    "target": "\u8ba1\u5212",
                    "value": 1
                },
                {
                    "source": "\u793e\u4f1a",
                    "target": "\u821e\u53f0",
                    "value": 1
                },
                {
                    "source": "\u793e\u4f1a",
                    "target": "\u6d17\u8863\u670d",
                    "value": 3
                },
                {
                    "source": "\u4eba\u4eec",
                    "target": "\u533b\u751f",
                    "value": 2
                },
                {
                    "source": "\u4eba\u4eec",
                    "target": "\u6d17\u8863\u670d",
                    "value": 1
                },
                {
                    "source": "\u533b\u751f",
                    "target": "\u4eba\u7c7b",
                    "value": 1
                },
                {
                    "source": "\u533b\u751f",
                    "target": "\u7ecf\u5386",
                    "value": 1
                },
                {
                    "source": "\u6f14\u5458",
                    "target": "\u9ed1\u624b\u515a",
                    "value": 6
                },
                {
                    "source": "\u6f14\u5458",
                    "target": "\u6210\u5458",
                    "value": 3
                },
                {
                    "source": "\u6f14\u5458",
                    "target": "\u821e\u53f0",
                    "value": 3
                },
                {
                    "source": "\u6f14\u5458",
                    "target": "\u6d17\u8863\u670d",
                    "value": 1
                },
                {
                    "source": "\u620f\u5267",
                    "target": "\u821e\u53f0",
                    "value": 1
                },
                {
                    "source": "\u620f\u5267",
                    "target": "\u6d17\u8863\u670d",
                    "value": 1
                },
                {
                    "source": "\u9ed1\u624b\u515a",
                    "target": "\u6210\u5458",
                    "value": 5
                },
                {
                    "source": "\u821e\u53f0",
                    "target": "\u6d17\u8863\u670d",
                    "value": 3
                },
                {
                    "source": "\u4eba\u7c7b",
                    "target": "\u7ecf\u5386",
                    "value": 1
                }
            ]
        }
    ],
    "legend": [
        {
            "data": [
                "\u5173\u952e\u8bcd"
            ],
            "selected": {},
            "show": true,
            "left": "2%",
            "top": "15%",
            "orient": "vertical",
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
            "text": "\u6c49\u5316\u97f3\u4e50\u5267\u5173\u952e\u8bcd\u5173\u7cfb\u7f51\u7edc",
            "target": "blank",
            "subtext": "\u57fa\u4e8e\u5173\u952e\u8bcd\u5171\u73b0\u5173\u7cfb",
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