<template>
    <div class="head">
      <a href="#"><i class="iconfont icon-jiahao"></i></a>
      <span>全部分类</span>
    </div>
</template>

<script>
    export default {
        name: "ClassHeader"
    }
</script>

<style lang="scss" scoped>
    .head{
      height: .5rem;
      border-bottom:1px solid #bcbcbc;
      display: -webkit-flex;
      -webkit-align-items: center;
      background-color: #ffffff;
      a{
        display: -webkit-flex;
        margin-left: .15rem;
        margin-right: .25rem;
      }
      span{
        color: #4e4e4e;
        font-size: .16rem;
      }
    }
</style>
