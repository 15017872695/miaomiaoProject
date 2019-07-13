<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <div @click="goHref">上传图片</div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import wx from 'weixin-js-sdk';
export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data(){
    return{
      
    }
  },
  created(){ //微信jssdk配置
    // let timestamp=new Date().getTime();//时间戳
    // let noncestr=Math.random().toString(36).substr(2);//随机字符串
    // let url = "http://"+window.location.host+'/' ;//获取锚点之前的链接 
    // let dataJ={
    //     timestamp,
    //     noncestr,
    //     url
    // }
      //获取签名  https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1421141115
    this.$http.get('http://hyfpc.fangcuanhuoxitong.com/MobileApi/BaseParam/GetWxConfig').then((response)=>{//调用获取签名方法
    
    var data = JSON.parse(response.data._data)
    console.log(data)
      wx.config({
          debug: false,
          appId: data.AppID, // 必填，公众号的唯一标识
          timestamp:data.timestamp , // 必填，生成签名的时间戳
          nonceStr: data.nonceStr, // 必填，生成签名的随机串
          signature:response.signature,
          jsApiList: [
              'chooseImage',//选择图片
              'uploadImage',//上传图片
              'getLocalImgData',
              'scanQRCode'
            ] // 必填，需要使用的JS接口列表
      });
    })
  },
  methods: {
    goHref:function(){
      window.location.href='https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx97c6c99334c567e5&connect_redirect=1#wechat_redirect'
    },
    choseFile:function(id,index){//点击事件选择图片
      var _this=this;
      console.log(1)
      // wx.chooseImage({
      //     count: 1, // 默认9
      //     sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      //     sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      //     success: function (res) {
      //       console.log(res)
      //       let localId=res.localIds;//获取到本地localIds
      //       wx.uploadImage({//上传到微信服务器
      //           localId: localId.toString(), // 需要上传的图片的本地ID，由chooseImage接口获得
      //           isShowProgressTips: 1, // 默认为1，显示进度提示
      //           success: function (ret) {}
      //       });
      //     }
      // });

  // 前往微信开发者工具h5调试页进行调试查看
  // 前端域名需要和微信公众号配置的域名相等 才可正常执行 否则 无效果
      wx.scanQRCode({                                                                                                                               needResult: 0, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
        scanType: ["qrCode","barCode"], // 可以指定扫二维码还是一维码，默认二者都有
        success: function (res) {
          var result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
        }
      });
    }
  }
}
</script>
