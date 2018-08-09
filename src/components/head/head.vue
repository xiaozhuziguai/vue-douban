<!-- head -->
<template>
<div id="heaad">
    <div class="left">
        <i class="iconfont icon-caidan"></i>
        <span class="text">电影</span>
    </div>
    <div class="right">
        <i class="iconfont icon-sousuo"></i>
    </div>
</div>
</template>

<script type='text/ecmascript-6'>
export default {
  data () {
    return {
      msg: '回顾'
    }
  }
}
</script>

<style lang='stylus' scoped rel='stylesheet/stylus'>
  #heaad
    display flex
    height 60px
    line-height 60px
    .left,
    .right
      flex 1
    .left
      margin-left 14px
      .text
        margin-left 14px
        font-size 18px
    .right
      text-align right
      margin-right 14px
      .iconfont
        font-size 18px
</style>
