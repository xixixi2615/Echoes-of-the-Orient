<template>
  <div ref="chartContainer" class="chart-container"></div>
</template>

<script>
import * as echarts from 'echarts';

export default {
  name: 'PieChart',
  mounted() {
    this.initChart();
  },
  beforeUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$refs.chartContainer);
      const option = {
        animation: true,
        animationThreshold: 2000,
        animationDuration: 1000,
        animationEasing: "cubicOut",
        animationDelay: 0,
        animationDurationUpdate: 300,
        animationEasingUpdate: "cubicOut",
        animationDelayUpdate: 0,
        aria: { enabled: false },
        color: ["#5470c6", "#91cc75", "#fac858", "#ee6666", "#73c0de", "#3ba272", "#fc8452", "#9a60b4", "#ea7ccc"],
        series: [{
          type: "pie",
          colorBy: "data",
          legendHoverLink: true,
          selectedMode: false,
          selectedOffset: 10,
          clockwise: true,
          startAngle: 90,
          minAngle: 0,
          minShowLabelAngle: 0,
          avoidLabelOverlap: true,
          stillShowZeroSum: true,
          percentPrecision: 2,
          showEmptyCircle: true,
          emptyCircleStyle: {
            color: "lightgray",
            borderColor: "#000",
            borderWidth: 0,
            borderType: "solid",
            borderDashOffset: 0,
            borderCap: "butt",
            borderJoin: "bevel",
            borderMiterLimit: 10,
            opacity: 1
          },
          data: [
            { name: "原创", value: 272 },
            { name: "引进", value: 100 }
          ],
          radius: ["40%", "55%"],
          center: ["50%", "50%"],
          label: {
            show: true,
            position: "outside",
            margin: 8,
            formatter: "{a|{a}}{abg|}\n{hr|}\n {b|{b}: }{c}  {per|{d}%}  ",
            backgroundColor: "#eee",
            borderColor: "#aaa",
            borderWidth: 1,
            borderRadius: 4,
            rich: {
              a: { color: "#999", lineHeight: 22, align: "center" },
              abg: { backgroundColor: "#e3e3e3", width: "100%", align: "right", height: 22, borderRadius: [4, 4, 0, 0] },
              hr: { borderColor: "#aaa", width: "100%", borderWidth: 0.5, height: 0 },
              b: { fontSize: 16, lineHeight: 33 },
              per: { color: "#eee", backgroundColor: "#334455", padding: [2, 4], borderRadius: 2 }
            },
            valueAnimation: false
          },
          labelLine: {
            show: true,
            showAbove: false,
            length: 15,
            length2: 15,
            smooth: false,
            minTurnAngle: 90,
            maxSurfaceAngle: 90
          }
        }],
        legend: [{
          data: ["原创", "引进"],
          selected: {},
          show: true,
          padding: 5,
          itemGap: 10,
          itemWidth: 25,
          itemHeight: 14,
          backgroundColor: "transparent",
          borderColor: "#ccc",
          borderRadius: 0,
          pageButtonItemGap: 5,
          pageButtonPosition: "end",
          pageFormatter: "{current}/{total}",
          pageIconColor: "#2f4554",
          pageIconInactiveColor: "#aaa",
          pageIconSize: 15,
          animationDurationUpdate: 800,
          selector: false,
          selectorPosition: "auto",
          selectorItemGap: 7,
          selectorButtonGap: 10
        }],
        tooltip: {
          show: true,
          trigger: "item",
          triggerOn: "mousemove|click",
          axisPointer: { type: "line" },
          showContent: true,
          alwaysShowContent: false,
          showDelay: 0,
          hideDelay: 100,
          enterable: false,
          confine: false,
          appendToBody: false,
          transitionDuration: 0.4,
          textStyle: { fontSize: 14 },
          borderWidth: 0,
          padding: 5,
          order: "seriesAsc"
        },
        title: [{
          show: true,
          text: "音乐剧原创与引进量对比",
          target: "blank",
          subtarget: "blank",
          padding: 5,
          itemGap: 10,
          textAlign: "auto",
          textVerticalAlign: "auto",
          triggerEvent: false
        }]
      };
      this.chart.setOption(option);
      
      // 响应窗口变化
      window.addEventListener('resize', this.handleResize);
    },
    handleResize() {
      if (this.chart) {
        this.chart.resize();
      }
    }
  }
};
</script>

<style scoped>
.chart-container {
  width: 100%;
  height: 100%;
  min-height: 400px;
}
</style>