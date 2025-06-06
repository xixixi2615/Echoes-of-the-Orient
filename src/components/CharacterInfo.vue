<!-- 
    剧目
-->


<script setup>
import { ref } from 'vue';
const characters = [
    {
        /*粉丝来信*/
        name: '粉丝来信', romaji: '팬레터  ', instrument: 'Korea', cv: '高瑞嘉', cv_romaji: '徐均朔 / 于晓璘 / 张博俊', color: '#d65484', line: [
            '但愿在这荒凉的冰冷的城市，',
            '还能够留下一些浪漫和艺术。'
        ], desc: '1943年，上海。一则备受关注的绯闻渐渐传开：刚逝世的小说家海鸣和女作家夏光的最后一份私人信件即将被公开出版。而出版人李灵因参与了《朝华》杂志的编辑工作，现被关押在日本宪兵队拘留所。十分崇拜海鸣的郑微岚找到李灵。为了目睹这封“粉丝来信”，微岚和李灵开始慢慢回忆起了“夏光”的神秘往事。'
    },
    {
        /*初步举证*/
        name: '初步举证', romaji: 'National Theatre Live: Prima Facie  ', instrument: 'UK', cv: '周可', cv_romaji: '辛芷蕾', color: '#f9b000', line: [
            '看看你的左边，看看你的右边，',
            '我也崩溃了，但我仍在这里，',
            '我不会沉默。'
        ], desc: '出身寒门的泰莎凭努力考入名校，成为法律界精英女律师。为在男性主导的职场立足，她拼尽全力赢官司，甚至吹嘘在性侵案中靠专业技能为委托人脱罪。直到她与暧昧男同事约会时被强奸，从替性侵嫌疑人辩护的律师变为被害者。当她首次以证人身份站上法庭，身体和情感屡遭 “凌辱”，其笃信的律法世界开始动摇。这一经历不仅让她感受撕裂与疼痛，更促使她反思自新，坚信 “某一天，某个地方，某些事情必须改变”。'
    },
    {
        /*歌剧魅影*/
        name: '歌剧魅影', romaji: 'The Phantom Of The Opera  ', instrument: 'France', cv: '邹从睿', cv_romaji: '阿云嘎 / 刘令飞 / 何亮辰 / 杨陈秀一 / 潘杭苇 / 林韶', color: '#99d6f1', line: [
            '此生此情不渝，',
            '无论去何处都让你我形影不离。'
        ], desc: '在巴黎的一家歌剧院里，怪事频繁地发生，原来的首席女主角险些被砸死，剧院出现一个令人毛骨悚然的虚幻男声。这个声音来自住在剧院地下迷宫的“幽灵”，他爱上了女演员克丽斯汀，暗中教她唱歌，帮她获得女主角的位置，而克丽斯汀却爱着剧院资助人拉乌尔，由此引起了嫉妒、追逐、谋杀等一系列情节。而最终“幽灵”发现自己对克丽斯汀的爱已经超过了个人的占有欲，于是解脱了克丽斯汀,留下披风和面具，独自消失在昏暗的地下迷宫里。'
    },
    {
        /*基督山伯爵*/
        name: '基督山伯爵', romaji: 'Le Comte de Monte-Cristo  ', instrument: 'France', cv: '徐栋', cv_romaji: '阿云嘎 / 于毅 / 叶麒圣', color: '#ce2525', line: [
            '人类的智慧就包含在两个词中:',
            '等待和希望。'
        ], desc: '年轻的水手埃德蒙被人陷害，一夕之间失去了挚爱的未婚妻和宝贵的自由。在监狱中他结识了法里亚，法里亚对他照顾有加，并在临终前把基督山宝藏的秘密告诉了他。越狱后的埃德蒙找到了宝藏，跻身上流社会，开始周密布局他的复仇计划……'
    }
]

const getCharacterImage = (name) => {
    return `/assets/images/剧目文字_${name}.png`
}

const getPostImage = (name) => {
    return `/assets/images/海报_${name}.png`

}



const activeItem = ref(characters[0]);
const lastItem = ref(activeItem);
const switchItem = (index) => {
    lastItem.value = activeItem
    activeItem.value = characters[index];
};
</script>


<template>
    <div class="bg"></div>
    <div class="info-container">
        <div class="left-part"
            :style="{ '--highlight-color': activeItem.color, '--last-highlight-color': lastItem.color }">
            <Transition name="wait" mode="out-in">
                <img :key="activeItem.name" :src="getPostImage(activeItem.name)">
            </Transition>
            <transition name="slip" mode="out-in">
                <div class="box-cover" :key="activeItem.name"></div>
            </transition>
        </div>



        <div class="select-part">
            <ul>
                <li v-for="(character, i) in characters" :key="character.name" @click="switchItem(i)"
                    :class="{ 'selected': activeItem.name === character.name }"
                    :style="{ '--highlight-color': character.color }">
                    <img :src="getPostImage(character.name)" />
                </li>
            </ul>
        </div>


        <div class="right-part">

            <div class="character-line" :style="{ '--highlight-color': activeItem.color }">
                <p v-for="(e, index) in activeItem.line" :key="index">{{ e }}</p>
            </div>

            <div class="character-head">
                <img :src="'/assets/images/大头_' + activeItem.name + '.webp'" />
            </div>


            <div class="instrument-content" :style="{ left: activeItem.name === '伊地知虹夏' ? '60%' : '10%' }">
                {{ activeItem.instrument }}
            </div>
            <div class="line-container">
                <div class="romaji-line" :style="{ '--highlight-color': activeItem.color }">
                <div class="scroll-wrapper">
                    <div class="scroll-romaji" v-for="i in 2" :key="i">
                        <span v-for="i in 16">{{ activeItem.romaji }}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    </div>
                </div>
            </div>

            <span class="name-line" :style="{ '--highlight-color': activeItem.color }">&nbsp;&nbsp;</span>
            </div>
            

            <div class="character-desc" :style="{ '--highlight-color': activeItem.color }">
                <div>
                    <span class="cv-logo">导演</span>
                    <span class="cv-name">{{ activeItem.cv }}</span>
                </div>

                <span class="cv-instrument">{{ activeItem.instrument }}</span>
                <div class="cv-info">
                    <div class="cv-romaji">
                        {{ activeItem.romaji }} | 主演： {{ activeItem.cv_romaji }}
                    </div>


                </div>
                <div class="desc-content">
                    {{ activeItem.desc }}
                </div>
            </div>
            <transition name="fade" appear>
                <div :key="activeItem.name" class="character-image">
                    <img :src="getCharacterImage(activeItem.name)" />
                </div>
            </transition>


            <div class="logo">
                <img src="/assets/images/logo_movie.png" />
            </div>
        </div>
    </div>

</template>


<style scoped>
.bg {
    position: absolute;
    width: 100vw;
    height: 100vh;
}

.info-container {
    width: 100%;
    height: 100%;
    position: absolute;
    overflow: hidden;
    display: flex;
}

.left-part {
    position: relative;
    overflow: hidden;
}

.left-part img {
    height: 100%;
}

.box-cover {
    position: absolute;
    left: -100%;
    top: 0;
    height: 100%;
    width: 100%;
    background-color: var(--highlight-color);
}

.select-part {
    position: absolute;
    bottom: 0;
}

.select-part ul {
    display: flex;
}


.select-part li {
    position: relative;
    list-style: none;
    width: 80px;
    height: 80px;
    align-self: flex-end;
    transition: all 0.3s;
}



.select-part li.selected,
.select-part li:hover {
    width: 100px;
    height: 100px;
    transition: all 0.3s;

}

/* 角色选择框内图片样式 */
.select-part img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: top;
    /* 从顶部开始裁剪 */

}



/* 使用伪元素方式来实现边框以及边框动画效果 */
/* 伪元素放边框，防止被li标签内部的img覆盖内嵌边框效果 */
.select-part li::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: all 0.3s;
    pointer-events: none;
    /* 防止伪元素拦截点击 */
}


/* 角色列表被选中时的样式 */
.select-part li.selected::before,
.select-part li:hover::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-shadow: inset 0 0 0 5px var(--highlight-color);
    pointer-events: none;
    /* 防止伪元素拦截点击事件 */
}

.right-part {
    display: flex;
    flex: 1;
    position: relative;
}





.instrument-content {
    font-size: 20em;
    font-family: '黑体';
    font-weight: bolder;
    color: #141414;
    text-shadow: 0 0 1px #fff;
    position: absolute;
    top: 5%;
    z-index: -3;
}

.character-line {
    left: 5%;
    top: 15%;
    padding: 30px;
    font-size: 1.5em;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: flex-start;
    color: var(--highlight-color);
    font-family: '宋体';
    transition: color 1.5s;
}


.character-line::before,
.character-line::after {
    content: "";
    position: absolute;
    width: 55px;
    height: 55px;

}

.character-line::before {
    top: 0;
    left: 0;
    border-top: 2px solid var(--highlight-color);
    border-left: 2px solid var(--highlight-color);
    transition: border 1.5s;
}

.character-line::after {
    bottom: 0;
    right: 0;
    border-right: 2px solid var(--highlight-color);
    border-bottom: 2px solid var(--highlight-color);
    transition: border 1.5s;
}

.line-container {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 20vh;
    overflow: hidden;
}


.romaji-line {
    /* position: absolute;
    top: 43.25%; */
    font-size: 1.4em;
    /* overflow: hidden; */
    white-space: nowrap;
    color: var(--highlight-color);
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    transition: color 1.5s;
}





.romaji-line:hover .scroll-wrapper {
    animation-play-state: paused;
}

.scroll-wrapper {
    display: inline-block;
    animation: scrollRomaji 25s linear infinite;
}

.scroll-romaji {
    display: inline-block;
    padding-right: 2em;
    /* 增加文字间距 */
}

@keyframes scrollRomaji {
    0% {
        transform: translateX(0%);
    }

    100% {
        transform: translateX(-50%);
        /* 移动文本总长度的一半 */
    }
}

.name-line {
    /* position: absolute; */
    /* top: 50%; */
    /* left: 0;
    right: 0; */
    display: flex;
    justify-content: flex-start;
    background-color: var(--highlight-color);
    color: #000;
    font-size: 3rem;
    /* transform: translate(0, -50%); */
    z-index: -1;
    text-indent: 2em;
    font-family: 'Aa幻梦空间像素体';
    transition: background-color 1.5s;

}

.character-head {
    justify-self: flex-start;
    align-self: flex-start;
    z-index: 0;

}

.character-head img {
    height: 50vh;
    margin-left: 10%;
    opacity: 0.25;
}

.character-image {
    position: absolute;
    left: 70%;
    top: 50%;
    transform: translate(-50%, -50%);
}

.character-image img {
    height: 90vh;
    transition: all 0.3s;

}

.character-image img:hover {
    transform: scale(1.1);
    transition: all 0.3s ease;
}

.character-desc {
    z-index: 2;
    position: absolute;
    top: 60%;
    left: 5%;
    align-items: center;
    width: 50%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    color: #fff;
}

.cv-logo {
    background-color: var(--highlight-color);
    border-radius: 100%;
    padding: 0.4em;
    transition: background-color 1.5s;
}

.cv-name {
    margin-left: 20px;
    font-size: 1.2em;
}

.cv-instrument {
    color: var(--highlight-color);
    transition: color 1.5s;

}

.cv-info {
    margin-top: 10px;
    color: #fff;
    font-size: 0.5em;
    border-bottom: 1px solid #fff;
    width: 100%;
    text-align: left;
    font-weight: bold;
}


.desc-content {
    margin-top: 15px;
    text-align: left;
    font-family: '宋体';
    font-size: 1.2em;
}

.logo {
    position: absolute;
    left: 55%;
    top: 70%;
    z-index: 5;
}

.logo img {
    width: 400px;
}



/* 定义进入和离开的动画 */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease, transform 0.5s ease;
}

.fade-enter-from {
    opacity: 0;
    transform: translateY(20px);
}

.fade-leave-to {
    opacity: 0;
    transform: translateY(-20px);
}




.slip-enter-active,
.slip-leave-active {
    transition: left 0.5s ease, background-color 0.4s ease;
}



.slip-leave-to {
    left: 0;
}

.slip-leave-from {
    left: -100%;
    background-color: var(--last-hightlight-color);
}

.slip-enter-from {
    left: 0;
    background-color: var(--highlight-color);
}

.slip-enter-to {
    left: 100%;
}

.wait-enter-active,
.wait-leave-active {
    transition: all 0.5s ease;
}


@media (max-width: 1000px) {
  .character-line {
    transform: scale(0.8);
  }
}

@media (max-height: 800px) {
  .character-line {
    transform: scale(0.8);
    top: 15%;
    left: 5%;
  }

  .character-desc {
    transform: scale(0.8);
  }
}
</style>