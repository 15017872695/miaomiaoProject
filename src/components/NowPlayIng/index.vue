<!-- HTML元素 -->
<template>
    <div class='NowPlayIng'>
        <ul>
            <li>
                <div>
                    <img src="../../assets/image/shoppingImg.jpg" alt="">
                </div>
                <div>
                    <span>银河补习班</span>
                    <span>观众评分<span style="color: orange">10</span></span>
                    <span>主演:邓超白宇</span>
                    <span>橙子映像、猫眼影业、青春光线</span>
                </div>
                <div>
                    <span>购票</span>
                </div>
            </li>
            <li>
                <div>
                    <img src="../../assets/image/shoppingImg2.jpg" alt="">
                </div>
                <div>
                    <span>银河补习班</span>
                    <span>观众评分<span style="color: orange">10</span></span>
                    <span>主演:邓超白宇</span>
                    <span>橙子映像、猫眼影业、青春光线</span>
                </div>
                <div>
                    <span>购票</span>
                </div>
            </li>
            <li>
                <div>
                    <img src="../../assets/image/shoppingImg_Box2.jpg" alt="">
                </div>
                <div>
                    <span>银河补习班</span>
                    <span>观众评分<span style="color: orange">10</span></span>
                    <span>主演:邓超白宇</span>
                    <span>橙子映像、猫眼影业、青春光线</span>
                </div>
                <div>
                    <span>购票</span>
                </div>
            </li>
            <li>
                <div>
                    <img src="../../assets/image/shoppingImg.jpg" alt="">
                </div>
                <div>
                    <span>银河补习班</span>
                    <span>观众评分<span style="color: orange">10</span></span>
                    <span>主演:邓超白宇</span>
                    <span>橙子映像、猫眼影业、青春光线</span>
                </div>
                <div>
                    <span>购票</span>
                </div>
            </li>
            <li>
                <div>
                    <img src="../../assets/image/shoppingImg_Box.jpg" alt="">
                </div>
                <div>
                    <span>银河补习班</span>
                    <span>观众评分<span style="color: orange">10</span></span>
                    <span>主演:邓超白宇</span>
                    <span>橙子映像、猫眼影业、青春光线</span>
                </div>
                <div>
                    <span>购票</span>
                </div>
            </li>
        </ul>
    </div>
 </template>
 
 <script>
 //这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
 //例如：import 《组件名称》 from '《组件路径》';
 
 export default {
    name:'NowPlayIng',
    //import引入的组件需要注入到对象中才能使用
    components: {},
    
    data() {
    //这里存放数据
        return {
    
        };
    },
 
    //监听属性 类似于data概念
    computed: {},
 
    //监控data中的数据变化
    watch: {},
 
    //方法集合
    methods: {
 
    },
 
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {
 
    },
 
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {
 
    },
 
    //生命周期 - 创建之前
    beforeCreate() {},
 
    //生命周期 - 挂载之前
    beforeMount() {},
 
     //生命周期 - 更新之前
    beforeUpdate() {}, 
 
     //生命周期 - 更新之后
    updated() {}, 
 
     //生命周期 - 销毁之前
    beforeDestroy() {},
 
     //生命周期 - 销毁完成
    destroyed() {}, 
 
     //如果页面有keep-alive缓存功能，这个函数会触发
    activated() {}, 
 }
 </script>
 
 <style lang='scss' scoped>
 /* @import url(); 引入公共css类 */
    .NowPlayIng{width: 100%;height: auto;padding-bottom: 12vw;box-sizing: border-box;}
    .NowPlayIng ul{width: 100%;height: 100%;display: flex;flex-direction: column;}
    .NowPlayIng ul li{width: 100%;height: 35vw;border-bottom: 1px solid #eee;display: flex;font-size: 3.5vw;}
    .NowPlayIng ul li img{width: 100%;}
    .NowPlayIng ul li>div{display: flex;flex: 1;height: 100%;}
    .NowPlayIng ul li>div:nth-child(1){padding: 15px;box-sizing: border-box;}
    .NowPlayIng ul li>div:nth-child(2){flex: 2;display: flex;flex-direction: column;align-items: flex-start;justify-content: space-around;}
    .NowPlayIng ul li>div:nth-child(2)>span:nth-child(1){font-size: 5vw;font-weight: bold;}
    .NowPlayIng ul li>div:nth-child(2)>span:nth-child(4){display: -webkit-box;overflow: hidden;text-overflow: ellipsis;word-wrap: break-word;white-space: normal !important;-webkit-line-clamp: 1;-webkit-box-orient: vertical;}
    .NowPlayIng ul li>div:nth-child(3){display: flex;justify-content: center;align-items: center;}
    .NowPlayIng ul li>div:nth-child(3) span{display: flex;width: 80%;height:8vw;background: orangered;color: #fff;border-radius: 10px;display: flex;justify-content: center;align-items: center;}
 </style>