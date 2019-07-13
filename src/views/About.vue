<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script>
import {mapState,mapMutations,mapGetters,mapActions} from 'vuex';
export default {
  data(){
    return{
      counts:0
    }
  },
  methods: {
    
  },
  computed: {
    
    ...mapState({
      counts:(state) => state.count,
    }),
    ...mapGetters({
      getternum:'docount'
    })
  },methods:{
    ...mapMutations({
      addnum:'SET_COUMT_ADD',
      reducenum:'SET_COUMT_REDUCE'
    }),
    ...mapActions({
      addmore:'ADD1000',
      reducemore:'REdUCE1000'
    }),
    add(){
      this.addnum()
      console.log(this.counts,'+1')
    },
    reduce(){
      this.reducenum()
      console.log(this.counts,'-1')
    },
    add1000(){
      this.addmore()
      console.log(this.counts,'+1000')
    },
    reduce1000(){
      this.reducemore()
      console.log(this.counts,'-1000')
    }
  },
  
  mounted(){
    console.log(this.counts,this.$store.state.count,111111111)
  }

}
</script>
<style lang="scss" scoped>
.scan {
    height: 100%;
    #bcid {
      width: 100%;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom:3rem;
      text-align: center;
      color: #fff;
      background: #ccc;
    }
    footer {
      position: absolute;
      left: 0;
      bottom: 1rem;
      height: 2rem;
      line-height: 2rem;
      z-index: 2;
    }
  }
</style>
