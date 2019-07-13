<template>
  <div id="main">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import echarts from 'echarts' 
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return{
      charts: '',
      opinion:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎'],
      opinionData:[
        {value:335, name:'直接访问'},
        {value:310, name:'邮件营销'},
        {value:234, name:'联盟广告'},
        {value:135, name:'视频广告'},
        {value:1548, name:'搜索引擎'}
      ]
    }
  },
  created() {
    console.log(this.msg)
  },
  methods: {
    drawPie(id){
      this.charts = echarts.init(document.getElementById(id))
      this.charts.setOption({
        tooltip: {
          trigger: 'item',
          formatter: '{a}<br/>{b}:{c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          x: 'left',
          data:this.opinion
        },
        series: [
          {
            name:'访问来源',
            type:'pie',
            radius:['50%','70%'],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: 'center'
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: '30',
                  fontWeight: 'blod'
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data:this.opinionData
          }
        ]
      })
    },
  },
  //调用
  mounted(){
      this.$nextTick(function() {
          this.drawPie('main')
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  #main{
    width: 100%;
    height: 340px;
  }
</style>
