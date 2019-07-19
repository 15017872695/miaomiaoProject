import Vue from "vue";
import Router from "vue-router";
import MovieRouter from './MovieRouter';
import MineRouter from './MineRouter';
import CinemaRouter from './CinemaRouter';

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    MovieRouter,
    MineRouter,
    CinemaRouter,
    // ↓ 如果以上路由都没有匹配成功，则重定向到指定页面
    {
      path:'/*',
      redirect:'/'
    }
  ]
});
