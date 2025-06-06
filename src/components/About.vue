<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'; // 引入路由用于页面跳转

// 定义下载文件数据
const downloads = ref([
    { 
        id: 1,
        title: '2023_1', 
        description: '包含50部经典汉化音乐剧的文本、音频和视频资源索引',
        fileSize: '1040KB',
        fileType: 'CSV',
        url: '/assets/downloads/2023_1.csv',
        cover: '/assets/images/icon_play.png',
        color: '#d65484' 
    },
    { 
        id: 2,
        title: '2024_1', 
        description: '基于汉化音乐剧歌词的情感分析和主题建模研究报告',
        fileSize: '1339KB',
        fileType: 'CSV',
        url: '/assets/downloads/2023_1.csv',
        cover: '/assets/images/icon_play.png',
        color: '#5484d6' 
    },
    { 
        id: 3,
        title: 'musical', 
        description: '精选10部汉化音乐剧的高质量音视频片段示例',
        fileSize: '129KB',
        fileType: 'CSV',
        url: '/assets/downloads/musical.csv',
        cover: '/assets/images/icon_play.png',
        color: '#84d654' 
    },
    { 
        id: 4,
        title: 'douban', 
        description: '汉化音乐剧中主要角色关系的可视化图谱数据',
        fileSize: '54KB',
        fileType: 'XLSX',
        url: '/assets/downloads/豆瓣.xlsx',
        cover: '/assets/images/icon_play.png',
        color: '#d68454' 
    },
    { 
        id: 5,
        title: 'douban_comments', 
        description: '汉化音乐剧中主要角色关系的可视化图谱数据',
        fileSize: '133KB',
        fileType: 'XLSX',
        url: '/assets/downloads/豆瓣短评最新100条＋剧评热门前40条.xlsx',
        cover: '/assets/images/icon_play.png',
        color: '#d65484' 
    },
    { 
        id: 6,
        title: 'yinyuejv', 
        description: '汉化音乐剧中主要角色关系的可视化图谱数据',
        fileSize: '14KB',
        fileType: 'XLSX',
        url: '/assets/downloads/汉化音乐剧汇总.xlsx',
        cover: '/assets/images/icon_play.png',
        color: '#5484d6' 
    },
]);

// 获取路由实例
const router = useRouter();

// 下载文件方法
const downloadFile = (index) => {
    const file = downloads.value[index];
    console.log(`开始下载: ${file.title}`);
    
    // 创建a标签模拟下载
    const link = document.createElement('a');
    link.href = file.url;
    link.download = file.title.replace(/[^\w\d]+/g, '_') + '.' + file.fileType.toLowerCase();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

// 页面跳转方法
const goToVisualization = () => {
  window.location.href = '/visualization';
};
</script>

<template>
    <div class="main">
        <div class="head">
            <div class="c-onpu">
                <div class="c-onpu__layer -layer1"></div>
                <div class="c-onpu__layer -layer2"></div>
                <div class="c-onpu__layer -layer3"></div>
            </div>
            <p class="label1">汉化音乐剧可视化研究</p>
            <p class="label2">本站资源仅供学习研究，未经许可禁止转载、修改、传播，严禁任何形式的商业用途。！～(∠・ω< )⌒☆</p>
        </div>
        
        <!-- 新增的介绍模块 -->
        <div class="container-intro">
            <div class="intro-card">
                <h2 class="intro-title">关于汉化音乐剧</h2>
                <p class="intro-desc">
                    汉化音乐剧是将原版音乐剧通过翻译和文化适配，以中文呈现的艺术形式。
                    它既保留了原版的音乐魅力和戏剧结构，又通过本土化改编让中国观众更易理解和共鸣。
                    本平台致力于收集、整理和研究优秀的汉化音乐剧资源，
                    为音乐剧爱好者和研究者提供全方位的支持。
                </p>
                <button class="intro-button" @click="goToVisualization">
                    <i class="fa fa-arrow-right"></i> 查看更多汉化音乐剧作品
                </button>
            </div>
        </div>
        
        <div class="container">
            <div class="container-downloads">
                <p class="downloads-label">汉化音乐剧数据集下载</p>
                <div class="downloads-grid">
                    <div class="download-item" 
                         v-for="(download, index) in downloads" 
                         :key="download.id"
                         :style="{ '--accent-color': download.color }">
                        <div class="download-cover">
                            <img :src="download.cover" alt="资源封面图">
                            <div class="download-overlay" @click="downloadFile(index)">
                                <i class="fa fa-download"></i>
                            </div>
                        </div>
                        <div class="download-info">
                            <h3 class="download-title" :style="{ color: download.color }">{{ download.title }}</h3>
                            <p class="download-desc">{{ download.description }}</p>
                            <div class="download-meta">
                                <span class="download-size">{{ download.fileSize }}</span>
                                <span class="download-type">{{ download.fileType }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <footer class="footer-disclaimer">
            <p>本站所整理资源仅供学习与研究使用，未经许可禁止转载、修改、传播，严禁任何形式的商业用途。| 联系方式：1825856878@qq.com</p>
            <p>&copy; 2025 汉化音乐剧可视化研究平台</p>
        </footer>
    </div>
</template>

<style scoped>
.main {
    width: 100%;
    min-height: 100vh;
    background: url(/assets/images/pagebg.png) 100% 100% no-repeat;
    overflow-y: auto; /* 允许纵向滚动 */
    position: relative; /* 替代 absolute，避免遮挡 */
}


.head {
    position: relative;
    width: 100%;
    height: 30vh; /* 建议使用相对于视口的高度单位 */
}

@keyframes onpuAnime1 {
    0% {
        transform: translate(0, 0);
    }

    100% {
        transform: translate(0, -10px);
    }
}

@keyframes onpuAnime2 {
    0% {
        transform: translate(0, 0);
    }

    100% {
        transform: translate(0, 10px);
    }
}

@keyframes onpuLineAnime {
    0% {
        transform: scaleY(1);
    }

    100% {
        transform: scaleY(0.8);
    }
}

.c-onpu__layer {
    position: absolute;
    top: 0;
    left: 0;
    background-repeat: no-repeat;
    background-size: 100% auto;
    height: 100%;
    width: 50%;
}

.c-onpu__layer.-layer1 {
    animation: onpuLineAnime 5s linear infinite alternate-reverse;
    opacity: 0.5;
    transform-origin: 0 20%;
    background-image: url(/assets/images/onpu_line.png);
}

.c-onpu__layer.-layer2 {
    animation: onpuAnime1 2s linear infinite alternate-reverse;
    background-image: url(/assets/images/onpu_item1.png);
}

.c-onpu__layer.-layer3 {
    animation: onpuAnime2 2s linear infinite alternate-reverse;
    background-image: url(/assets/images/onpu_item2.png);
}

.label1 {
    position: absolute;
    font-family: '微软雅黑';
    left: 7%;
    top: 20%;
    font-size: 4em;
    font-weight: 900;
    color: rgba(197, 89, 255, 0.8);
}

.label2 {
    position: absolute;
    font-family: '微软雅黑';
    left: 7%;
    top: 50%;
    color: yellow;
    font-size: 1.3em;
    font-weight: bold;
}

.container {
    position: relative;
    display: flex;
    width: 100%;
    height: auto;
    justify-content: center;
}

/* 新增介绍模块的样式 */
.container-intro {
    position: relative;
    width: 100%;
    padding: 20px 0;
    display: flex;
    justify-content: center;
    z-index: 10;
}

.intro-card {
    background: linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%);
    backdrop-filter: blur(10px);
    border-radius: 20px;
    border: 1px solid rgba(255,255,255,0.1);
    box-shadow: 0 8px 32px 0 rgba(0,0,0,0.15);
    width: 80%;
    max-width: 1200px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: all 0.3s ease;
}

.intro-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 40px 0 rgba(0,0,0,0.2);
}

.intro-title {
    font-family: '微软雅黑';
    font-size: 2.5em;
    font-weight: bold;
    color: #fff;
    margin-bottom: 20px;
    position: relative;
    padding-bottom: 15px;
}

.intro-title::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 3px;
    background: linear-gradient(90deg, #d65484, #5484d6);
    border-radius: 3px;
}

.intro-desc {
    font-family: '宋体';
    font-size: 1.1em;
    color: rgba(255,255,255,0.8);
    line-height: 1.8;
    text-align: center;
    margin-bottom: 30px;
    max-width: 900px;
}

.intro-button {
    background: linear-gradient(90deg, #d65484, #5484d6);
    color: white;
    border: none;
    border-radius: 30px;
    padding: 12px 35px;
    font-size: 1.2em;
    font-weight: bold;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    box-shadow: 0 4px 20px rgba(214, 84, 132, 0.3);
}

.intro-button:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 25px rgba(214, 84, 132, 0.4);
    background: linear-gradient(90deg, #c23e72, #3a6bd1);
}

.intro-button i {
    margin-left: 10px;
    font-size: 1.2em;
    transition: transform 0.3s ease;
}

.intro-button:hover i {
    transform: translateX(5px);
}

.container-downloads {
    position: relative;
    width: 80%;
    margin-top: 60px; /* 用 margin 控制间距，而不是 top -10% */
}


.downloads-label {
    position: absolute;
    font-family: '微软雅黑';
    top: 0;
    left: 0;
    width: 100%;
    font-weight: bold;
    font-size: 2em;
    text-align: left;
    color: rgb(197, 89, 255);
    border-bottom: 1px solid gray;
    padding-bottom: 10px;
}

.downloads-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 30px;
    padding-top: 100px;
}

.download-item {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    border-radius: 15px;
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    border: 1px solid rgba(255, 255, 255, 0.1);
    --accent-color: #d65484;
}

.download-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
    border-color: var(--accent-color);
}

.download-cover {
    position: relative;
    width: 100%;
    aspect-ratio: 16/9;
    overflow: hidden;
}

.download-cover img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
}

.download-item:hover .download-cover img {
    transform: scale(1.1);
}

.download-overlay {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;
    cursor: pointer;
}

.download-item:hover .download-overlay {
    opacity: 1;
}

.download-overlay i {
    color: white;
    font-size: 2.5em;
    transform: scale(0.8);
    transition: transform 0.3s ease;
}

.download-overlay:hover i {
    transform: scale(1);
}

.download-info {
    padding: 15px 20px;
}

.download-title {
    font-family: '微软雅黑';
    font-size: 1.2em;
    font-weight: bold;
    margin-bottom: 8px;
}

.download-desc {
    font-family: '宋体';
    font-size: 0.9em;
    color: rgba(255, 255, 255, 0.7);
    margin-bottom: 12px;
    min-height: 45px;
}

.download-meta {
    display: flex;
    justify-content: space-between;
    font-size: 0.8em;
    color: rgba(255, 255, 255, 0.5);
}

.footer-disclaimer {
    margin-top: 50px;
    padding: 20px 10px;
    text-align: center;
    font-size: 0.9em;
    color: rgba(255, 255, 255, 0.6);
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(5px);
    font-family: '宋体';
    line-height: 1.6;
}


@font-face {
    font-family: 'Note-Script-SemiBold-2';
    src: url('/assets/fonts/Note-Script-SemiBold-2.ttf') format('truetype');
    font-style: normal;
}
</style>