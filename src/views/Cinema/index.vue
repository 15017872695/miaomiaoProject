<template lang="">
    <div id='Cinema'>
		<div class="content">
			<div class='movie_menu'>
				<div class="city_name">
					<span>北京</span>
					<i class="iconfont icon-fangxiangxia"></i>
				</div>
				 <div class="city_name">
					<span>北京</span>
					<i class="iconfont icon-fangxiangxia"></i>
				</div>
				 <div class="city_name">
					<span>北京</span>
					<i class="iconfont icon-fangxiangxia"></i>
				</div>
			</div>
			<CiList></CiList>
		</div>
    </div>
</template>
<script>
import CiList from '@/components/CiList'
export default {
    name:'Cinema',
	components: {
		CiList,
	},
}
</script>
<style lang="scss" scoped>
    #Cinema{width: 100%;height: 100%;}
	#Cinema .content{width: 100%;height: 100%;background: #fff;}
	#Cinema .content .movie_menu{width: 100%;height: 12vw;position:fixed;top:10vw;z-index:9999;background:#fff;display: flex;justify-content: space-between;align-items: center;border-bottom: 1px solid #eee;font-size: 4vw;}
	#Cinema .content .movie_menu>div{flex: 1;height: 100%;display: flex;justify-content: center;align-items: center;}
	#Cinema .content .movie_menu .hot-swtich{display: flex;}
	#Cinema .content .movie_menu .hot-swtich>div{flex: 1;display: flex;height: 100%;justify-content: center;align-items: center;}
	#Cinema .content .movie_menu i{font-size: 4vw;margin-left: 3vw;}
</style> 
