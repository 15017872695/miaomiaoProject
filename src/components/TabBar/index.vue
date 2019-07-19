<template>
    <div id="TabBar">
        <ul>
            <li v-for="(item,index) in ListItem" :class="activeIndex==index?'active':''" :key="item+index" @click="TabBarActiveFNC(index,item.path)">
                <i :class="item.iconfont"></i>
                <span>{{item.name}}</span>
            </li>
        </ul>
    </div>
</template>
<script>

export default {
    name:'TabBar',
    data:function(){
        return{
            ListItem:[
                {name:'电影',path:'/',iconfont:'iconfont icon-dianying'},
                {name:'影院',path:'/cinema',iconfont:'iconfont icon-dianyingyuan'},
                {name:'我的',path:'/mine',iconfont:'iconfont icon-sself'}
            ],
            activeIndex:0,
            active: 0
        }
    },
    methods: {
        // 底部导航栏点击选择高亮效果
        TabBarActiveFNC(itemIndex,routerPath){
            this.activeIndex = itemIndex;
            this.$router.push({path:routerPath});
        },
    },
    mounted () {
        console.log(this.$route.path)
        console.log(window.location.pathname)
        console.log(window.location.href)
        for (let index = 0; index < this.ListItem.length; index++) {
            const element = this.ListItem[index];
            if(window.location.pathname!=this.$route.path){
                this.$router.push(this.$route.path)
            }
        }
    }
}
</script>
<style lang="scss" scoped>
    #TabBar{width: 100%;height: 12vw;position:fixed;bottom:0;background: #fff;}
    #TabBar ul{width: 100%;height: 100%;display: flex;justify-content: space-between;align-items: center;box-sizing: border-box;}
    #TabBar ul li{flex:1;height:100%;display: flex;flex-direction: column;justify-content: space-around;align-items: center;border-top: 1px solid #eee;font-size: 3vw;}
    #TabBar ul li i{font-size:5vw;}
    #TabBar .active{color: #EF5340;}
</style>
