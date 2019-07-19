<template lang="">
    <div id='Movie'>
        <div class="content">
            <div class='movie_menu'>
                <div class="city_name">
                    <span>北京</span>
                    <i class="iconfont icon-fangxiangxia" style="margin-left: 5px;"></i>
                </div>
                <div class="hot-swtich">
                    <div v-for="(item,key) in activeItem" :class="activeIndex==key?'active':'noActive'" :key="key" @click="activeFNC(key)">
                        {{item.name}}
                    </div>
                </div>
                <div class="search_entry">
                    <i class="iconfont icon-search" style="color:#ef5340;font-size: 5vw;"></i>
                </div>
            </div>
            <!-- 二级路由渲染出口 -->
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </div>
    </div>
</template>
<script>

export default {
    name:'Movie',
    components:{
    },
    data:function(){
        return{
            activeIndex:0,
            activeItem:[
                {name:'正在热映',toPath:'/NowPlayIng'},
                {name:'即将上映',toPath:'/ComingSoon'}
            ]
        }
    },
    methods: {
        activeFNC(key){
            this.activeIndex = key;
            for(var i=0;i<this.activeItem.length;i++){
                if(this.activeIndex == i){
                    this.$router.push({path:this.activeItem[i].toPath})
                }
            }
        }
    },
}
</script>
<style lang="scss" scoped>
    #Movie{width: 100%;height: 100%;}
    #Movie .content{width: 100%;height: 100%;background: #fff;}
    #Movie .content>div:nth-child(2){
        margin-top: 12vw;
    }
    #Movie .content .movie_menu{width: 100%;height: 12vw;position:fixed;top:10vw;z-index:9999;background:#fff;display: flex;justify-content: space-between;align-items: center;border-bottom: 1px solid #eee;font-size: 4vw;}
    #Movie .content .movie_menu>div{flex: 1;height: 100%;display: flex;justify-content: center;align-items: center;}
    #Movie .content .movie_menu>div:nth-child(2){flex: 3;}
    #Movie .content .movie_menu .hot-swtich{display: flex;}
    #Movie .content .movie_menu .hot-swtich>div{flex: 1;display: flex;height: 100%;justify-content: center;align-items: center;}
    #Movie .content .movie_menu i{font-size: 4vw;}
    .active{border-bottom: 1vw solid #ef5340;box-sizing: border-box;}
    .noActive{border-bottom: 1vw solid #fff;box-sizing: border-box;}
</style> 
