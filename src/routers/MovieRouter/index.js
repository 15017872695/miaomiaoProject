export default{
    path : '/',
    component : ()=>import('@/views/Movie'),
    // 配置子路由
    children : [
        {//首页的子路由初始显示组件
          path:'/',
          redirect:'/NowPlayIng'
        },
        {
            path:'city',
            component : ()=> import('@/components/City')
        },
        {
            path:'nowPlaying',
            component : ()=> import('@/components/NowPlayIng')
        },
        {
            path:'comingSoon',
            component : ()=> import('@/components/ComingSoon')
        },
        {
            path:'search',
            component : ()=> import('@/components/Search')
        }
    ]
}