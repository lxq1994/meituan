<template>
    <div class="head">
      <div>
        <a href="#"><i class="iconfont icon-list"></i></a>
        <span>初秋旅拍季</span>
      </div>
      <a href="#"><i class="iconfont icon-jiahao"></i></a>
    </div>
</template>

<script>
    export default {
        name: "TravelHeader"
    }
</script>

<style lang="scss" scoped>
    .head{
      height: .5rem;
      padding:0 .15rem;
      display: -webkit-flex;
      -webkit-justify-content: space-between;
      -webkit-align-items: center;
      span{
        color: #494949;
        font-size: .15rem;
        font-weight: bold;
      }
      a{
        display: -webkit-flex;
      }
      div{
        display: -webkit-flex;
        span{
          margin-left: .24rem;
        }
      }
    }
</style>
