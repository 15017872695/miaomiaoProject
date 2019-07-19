<template>
  <div id="app">
    <Header-Component :title="title"></Header-Component>
      <keep-alive>
        <router-view/>
      </keep-alive>
    <TabBar-Component></TabBar-Component>
  </div>
</template>
<script>
// 引入组件
import HeaderComponent from '@/components/Header';
import TabBarComponent from '@/components/TabBar';

export default {
  name:'App',
  data:function(){
    return{
      title:'喵喵电影'
    }
  },
  components:{
      HeaderComponent,
      TabBarComponent,
  },
  // 通过监听器watch，监听路由的变化
  watch: {
    '$route'(to,from){//to 到哪里去，from 从哪里来
      console.log(to)
      // console.log(from)
      if(to.fullPath=='/cinema'){
        this.title = '喵喵影院'
      }else if(to.fullPath=='/mine'){
        this.title = '我的喵喵'
      }else{
        this.title = '喵喵电影'
      }
    }
  },
}
</script>
<style lang="scss">
@import './assets/css/reset-css.css';
 /* ----------全局处理图片  移动端图片适配---------- */
img {
  content: normal !important;
}
/* ----------全局处理图片  移动端图片适配---------- */

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
  max-width: 750px;
}
#app>div:nth-child(2){
  position: absolute;
  top: 0;
  padding: 10vw 0 12vw 0;
  box-sizing: border-box;
  /* height:200vw; */
}
a{
  list-style: none;
  color: #000;
  text-decoration: none;
}
</style>
