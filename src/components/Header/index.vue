<template>
    <div class="headerWapper">
        {{title}}
    </div>
</template>
<script>
export default {
    name:'headerTitle',
    props:{
        title:{
            type:String,
            default:'喵喵影院'
        }
    }
}
</script>
<style lang="scss" scoped>
    .headerWapper{width: 100%;height:10vw;position:fixed;top:0;z-index:9999;display: flex;justify-content: center;align-items: center;background: #EF5340;color: #fff;font-size: 4vw;}
</style>
