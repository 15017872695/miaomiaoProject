<!-- 影院组件 -->
<template>
    <div class="CiList">
        <ul>
			<li>
				<div>
					<span>大地影院(澳东世纪店)</span>
					<span>22.9元/起</span>
				</div>
				<div>
					<span>金州区大连经济技术开发区澳东世纪3层</span>
					<span>1763.5km</span>
				</div>
				<div>
					<span>小吃</span>
					<span>折扣卡</span>
				</div>
			</li>
			<li>
				<div>
					<span>万达影院(澳东世纪店)</span>
					<span>22.9元/起</span>
				</div>
				<div>
					<span>金州区大连经济技术开发区澳东世纪3层</span>
					<span>1763.5km</span>
				</div>
				<div>
					<span>小吃</span>
					<span>折扣卡</span>
				</div>
			</li>
			<li>
				<div>
					<span>大地影院(澳东世纪店)</span>
					<span>22.9元/起</span>
				</div>
				<div>
					<span>金州区大连经济技术开发区澳东世纪3层</span>
					<span>1763.5km</span>
				</div>
				<div>
					<span>小吃</span>
					<span>折扣卡</span>
				</div>
			</li>
			<li>
				<div>
					<span>万达影院(澳东世纪店)</span>
					<span>22.9元/起</span>
				</div>
				<div>
					<span>金州区大连经济技术开发区澳东世纪3层</span>
					<span>1763.5km</span>
				</div>
				<div>
					<span>小吃</span>
					<span>折扣卡</span>
				</div>
			</li>
			<li>
				<div>
					<span>大地影院(澳东世纪店)</span>
					<span>22.9元/起</span>
				</div>
				<div>
					<span>金州区大连经济技术开发区澳东世纪3层</span>
					<span>1763.5km</span>
				</div>
				<div>
					<span>小吃</span>
					<span>折扣卡</span>
				</div>
			</li>
			<li>
				<div>
					<span>碧桂园影院(澳东世纪店)</span>
					<span>22.9元/起</span>
				</div>
				<div>
					<span>金州区大连经济技术开发区澳东世纪3层</span>
					<span>1763.5km</span>
				</div>
				<div>
					<span>小吃</span>
					<span>折扣卡</span>
				</div>
			</li>
			<li>
				<div>
					<span>碧桂园影院(澳东世纪店)</span>
					<span>22.9元/起</span>
				</div>
				<div>
					<span>金州区大连经济技术开发区澳东世纪3层</span>
					<span>1763.5km</span>
				</div>
				<div>
					<span>小吃</span>
					<span>折扣卡</span>
				</div>
			</li>
		</ul>
    </div>
</template>
<script>
export default {
    name:'CiList'
}
</script>
<style scoped>
	.CiList{width: 100%;height: auto;padding-top:12vw;box-sizing: border-box;}
	.CiList ul{width: 100%;height: 100%;display: flex;flex-direction: column;align-items: center;background: #fff;padding: 0 30px;box-sizing: border-box;}
	.CiList ul li{width: 100%;height: auto;font-size:3.5vw;border-bottom: 1px solid #eee;padding-top:15px;padding-bottom:30px;box-sizing: border-box;display: flex;flex-direction: column;justify-content: space-between;}
	.CiList ul li>div{margin-top: 15px;}
	.CiList ul li>div:nth-child(1){font-size: 5vw;color: #000;}
	.CiList ul li>div:nth-child(1)>span:nth-child(2){color: orange;margin-left: 10px;}
	.CiList ul li>div:nth-child(2){display: flex;justify-content: space-between;}
	.CiList ul li>div:nth-child(3)>span{display: inline-block;border: 1px solid orange; color: orange;margin-right: 10px;border-radius: 5px;font-size: 2vw;transform:scale(1);}
</style>