<template lang="">
    <div id="Mine">
		<div class="content">
			<Login></Login>
		</div>
    </div>
</template>
<script>
import Login from '@/components/Login'
export default {
    name:'Mine',
	components: {
		Login,
	}
}
</script>
<style lang="scss" scoped>
    #Mine{width: 100%;height: 100%;}
	#Mine .content{width: 100%;height: 100%;background: #fff;}
</style> 