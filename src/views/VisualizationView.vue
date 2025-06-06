<template>
    <div class="main" ref="mainRef">
        <!-- 固定背景图片 -->
        <div class="fixed-background" 
             :style="{ backgroundImage: `url('${backgroundImage.url}')` }">
        </div>

        <div class="header">
            <!-- 网页图标 -->
            <img src="/assets/images/logo_movie_cn.png" alt="Website Icon" class="header-icon" />
            <!-- 图表分类导航 -->
            <div class="chart-categories">
                <div v-for="category in chartCategories" :key="category.id" 
                    :class="{ active: activeCategory === category.id }"
                    @click="activeCategory = category.id">
                    {{ category.name }}
                </div>
            </div>
            <!-- 普通按钮替代原来的goHome图标 -->
            <button class="custom-button" @click="goHome">返回首页</button>
        </div>

        <!-- 图表展示区域 -->
        <div class="chart-container">
            <div v-for="chart in filteredCharts" :key="chart.id" class="chart-card" @click="showChartDetails(chart)">
                <div class="chart-header">
                    <h5>{{ chart.title }}</h5>
                </div>
                <div class="chart-content">
                    <img class="chart-image" :src="chart.url" alt="{{ chart.title }}">
                </div>
                <div class="chart-footer">
                    <span>{{ chart.description }}</span>
                </div>
            </div>
        </div>

        <!-- 图表详情模态框 -->
        <div v-if="selectedChart" class="modal-overlay" @click.self="closeChartDetails">
            <div class="modal-container">
                <!-- 模态框头部 -->
                <div class="modal-header">
                    <button class="back-button" @click="closeChartDetails">
                        <i class="fa fa-arrow-left"></i> 返回
                    </button>
                    <h2 class="modal-title">{{ selectedChart.title }}</h2>
                </div>
                
                <!-- 模态框内容 -->
                <div class="modal-content">
                    <div class="modal-image-container" v-if="!selectedChart.component">
                        <img class="modal-image" :src="selectedChart.url" alt="{{ selectedChart.title }}">
                    </div>
                    <div class="modal-chart-container" v-else>
                        <component :is="selectedChart.component" class="modal-chart" />
                    </div>
                    <div class="modal-description">
                        {{ selectedChart.description }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import chartData from '../data/charts.js'


const backgroundImage = ref({
    url: '/assets/images/封面2.jpg'
})

const router = useRouter()
const mainRef = ref(null)
const selectedChart = ref(null)

// 图表数据保持不变...
const chartCategories = [
    { id: 'all', name: '全部' },
    { id: 'category1', name: '原创 • 引进' },
    { id: 'category2', name: '引进' },
    { id: 'category3', name: '关键词' },
    { id: 'category4', name: '评分' },
    { id: 'category5', name: '演出信息' }
]

const activeCategory = ref('all')

const charts = ref(chartData)

// 计算过滤后的图表
const filteredCharts = computed(() => {
    if (activeCategory.value === 'all') {
        return charts.value;
    }
    return charts.value.filter(chart => chart.category === activeCategory.value);
});

// 初始化和清理函数保持不变...
onMounted(() => {
    mainRef.value.style.transition = 'opacity 1s ease'
    mainRef.value.style.opacity = 1
})

onUnmounted(() => {
    // 无需监听任何事件，因此无需清理
})

const goHome = () => {
    mainRef.value.style.opacity = 0
    setTimeout(() => {
        router.push('/')
    }, 500)
}

// 显示图表详情
const showChartDetails = (chart) => {
    selectedChart.value = chart
}

// 关闭图表详情
const closeChartDetails = () => {
    selectedChart.value = null
}
</script>

<style scoped>
/* 主容器和固定背景保持不变... */
.main {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    opacity: 0;
    transition: opacity 1s ease;
    overflow: hidden;
}

.fixed-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    z-index: 0;
}

.fixed-background::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(-10deg, rgba(255, 130, 130, 0.05) 50%, rgba(255, 212, 112, 0.05) 100%);
    backdrop-filter: blur(3px);
}

/* 图表容器 - 修改了高度和滚动行为 */
.chart-container {
    position: relative;
    z-index: 1;
    width: 90%;
    max-width: 1400px;
    height: calc(100vh - 120px); /* 调整高度以确保足够空间 */
    margin: 80px auto 0;
    padding: 20px;
    overflow-y: auto;
    
    /* 使用网格布局，确保所有卡片大小一致 */
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
    justify-items: center;
    
    /* 隐藏滚动条但保留滚动功能 */
    scrollbar-width: none; /* Firefox */
}

/* 隐藏Chrome、Safari和Edge的滚动条 */
.chart-container::-webkit-scrollbar {
    display: none;
}

/* 图表卡片 - 统一了高度和宽度 */
.chart-card {
    background-color: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(10px);
    border-radius: 15px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
    overflow: hidden;
    transition: all 0.3s ease;
    width: 100%;
    max-width: 350px;
    height: 380px; /* 统一卡片高度 */
    display: flex;
    flex-direction: column;
    cursor: pointer;
}

.chart-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.15);
}

.chart-header {
    padding: 15px 20px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    flex-shrink: 0; /* 防止标题区域收缩 */
}

.chart-header h5 {
    margin: 0;
    font-size: 15px;
    color: #333;
}

.chart-content {
    padding: 20px;
    flex-grow: 1; /* 让内容区域填充剩余空间 */
    display: flex;
    align-items: center;
    justify-content: center;
}

.chart-image {
    width: 100%;
    max-height: 230px;
    object-fit: cover;
    border-radius: 10px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.chart-footer {
    padding: 10px 20px;
    background-color: rgba(255, 255, 255, 0.5);
    font-size: 14px;
    color: #666;
    text-align: left; /* 新增：字体左对齐 */
    flex-shrink: 0; /* 防止页脚区域收缩 */

    display: -webkit-box;
    -webkit-line-clamp: 2;  /* 限制为 2 行 */
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
}

/* 模态框样式 */
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(5px);
    z-index: 50;
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal-container {
    width: 80%;
    height: 80%;
    background-color: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(10px);
    border-radius: 20px;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    display: flex;
    flex-direction: column;
}

.modal-header {
    height: 20%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    background-color: #f5f5f5;
}

.back-button {
  background-color: transparent;
  border: none;
  font-size: 16px;
  cursor: pointer;
  color: #007bff;
  font-family: 'Note-Script-SemiBold-2';
}

.back-button:hover {
    background: rgba(255, 255, 255, 0.9);
    transform: translateY(-2px);
}

.back-button i {
    margin-right: 8px;
}

.modal-title {
    font-size: 20px;
    font-weight: bold;
    margin: 0;
    color: #333;
}

.modal-content {
    height: 80%;
    display: flex;
    background: rgba(255, 255, 255, 1);
}

.modal-image-container, .modal-chart-container {
    width: 65%;
    padding: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.modal-image {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    border-radius: 15px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.modal-chart {
  display: block;
  width: 100%;
  height: 500px; /* 确保有明确的高度 */
  min-width: 300px;
}

.modal-description {
    width: 35%;
    padding: 30px;
    font-size: 16px;
    line-height: 1.6;
    color: #333;
    overflow-y: auto;
    text-align: left; 
    margin-top: 20px;
    white-space: pre-wrap;  /* 保留换行和空格 */
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  background-color: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(12px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  z-index: 10;
}

/* 图标样式 */
.header-icon {
  height: 50px;
  object-fit: contain;
}

/* 中间导航居中靠中（使用 flex-grow） */
.chart-categories {
  display: flex;
  gap: 20px;
  margin: 0 auto;
  flex: 1;
  justify-content: center;
  align-items: center;
}

.chart-categories > div {
  padding: 8px 16px;
  border-radius: 20px;
  cursor: pointer;
  font-family: 'Note-Script-SemiBold-2';
  font-size: 18px;
  color: #333;
  transition: all 0.3s ease;
}

.chart-categories > div:hover {
  background-color: rgba(255, 255, 255, 0.4);
}

.chart-categories > div.active {
  background-color: rgba(255, 255, 255, 0.6);
  font-weight: bold;
  color: #222;
}

/* 美化按钮样式 */
.custom-button {
  padding: 10px 20px;
  background-color: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(10px);
  border: none;
  border-radius: 20px;
  font-family: 'Note-Script-SemiBold-2';
  font-size: 16px;
  color: #333;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
}

.custom-button:hover {
  background-color: rgba(255, 255, 255, 0.6);
  transform: translateY(-1px);
}

/* 响应式调整 */
@media (max-width: 768px) {
    .chart-container {
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        padding: 15px;
    }
    
    .chart-card {
        max-width: 100%;
        height: 350px; /* 小屏幕上调整卡片高度 */
    }
    
    .chart-categories {
        gap: 10px;
        padding: 8px 15px;
        flex-wrap: wrap;
        justify-content: center;
    }
    
    .chart-categories > div {
        padding: 6px 12px;
        font-size: 16px;
    }

    .custom-button {
        padding: 8px 16px;
        font-size: 16px;
    }
    
    /* 小屏幕上的模态框调整 */
    .modal-container {
        width: 90%;
        height: 90%;
    }
    
    .modal-header {
        padding: 0 20px;
    }
    
    .back-button {
        padding: 8px 15px;
        font-size: 14px;
    }
    
    .modal-title {
        font-size: 24px;
    }
    
    .modal-content {
        flex-direction: column;
    }
    
    .modal-image-container, .modal-chart-container, .modal-description {
        width: 100%;
        height: 50%;
        padding: 20px;
    }
    
    .modal-description {
        font-size: 16px;
    }
}
</style>