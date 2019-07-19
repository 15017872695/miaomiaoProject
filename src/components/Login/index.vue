<!-- 登陆组件 -->
<template>
    <div class="Login">
		<div class="LoginLogoImg">
			<img src="@/assets/image/HTMLicon.png" alt="">
		</div>
        <div class="Login-Content-Wapper">
			<div class="InputWapper">
				<div>
					<span>用户名：</span>
					<input type="text" placeholder="请输入用户名" v-model="username">
				</div>
				<div>
					<span>密码：</span>
					<input type="password" placeholder="请输入密码" v-model="password">
				</div>
			</div>
			<van-button :loading='loading' type="danger" loading-text="正在登录中..." text="登录" @click="click"/>
			<div class="anniu">
				<span>立即注册</span>
				<span>找回密码</span>
			</div>
		</div>
    </div>
</template>
<script>
export default {
    name:'Login',
	data:function(){
		return{
			username:'',
			password:'',
			loading:false
		}
	},
	methods: {
		click(e) {
			console.log(e)
		}
	},
}
</script>
<style scoped lang="scss">
	.Login{width: 100%;height: 100%;background: #fff;}
	.LoginLogoImg{width: 100%;height: 50vw;display: flex;justify-content: center;align-items: center;}
	.LoginLogoImg img{width: 17%;}
	.Login .Login-Content-Wapper{width: 100%;height: auto;display: flex;flex-direction: column;align-items: center;}
	.Login .Login-Content-Wapper .InputWapper{width: 80%;display: flex;flex-direction: column;}
	.Login .Login-Content-Wapper .InputWapper>div{width: 100%;height: 12vw;font-size: 4vw;display: flex;align-items: center;justify-content:flex-end;border-bottom: 1px solid #eee;}
	.Login .Login-Content-Wapper .InputWapper>div:nth-child(2){margin-top: 20px;}
	.Login .Login-Content-Wapper .InputWapper input{text-indent: 20px;border: none;height: 100%;background: none;flex: 4;}
	.Login .Login-Content-Wapper .InputWapper>div>span:nth-child(1){flex: 1;display: flex;color:#000;height: 100%;display: flex;align-items: center;justify-content:flex-end;}
	.Login .Login-Content-Wapper .van-button--normal{width: 60%;height:10vw;margin-top: 50px;font-size:4vw;}
	.Login .Login-Content-Wapper .anniu{width: 80%; height: 10vw;display: flex;justify-content: space-between;align-items: center;color: orangered;margin-top: 30px;font-size: 3vw;}
</style>