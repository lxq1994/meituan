<template>
    <div class="head">
      <div class="info">
        <a href="#"><i class="iconfont icon-jiahao"></i></a>
        <span>团购详情</span>
      </div>
      <div class="xing">
        <a href="#"><i class="iconfont icon-list"></i></a>
        <a href="#"><i class="iconfont icon-ling"></i></a>
        <a href="#"><i class="iconfont icon-lianxiren"></i></a>
      </div>
    </div>
</template>

<script>
    export default {
        name: "TalkHeader"
    }
</script>

<style lang="scss" scoped>
    .head{
      height: .7rem;
      background-color: #f9f9f9;
      display: -webkit-flex;
      -webkit-align-items: center;
      -webkit-justify-content: space-between;
      padding:0 .22rem;
      font-size: .21rem;
      border-bottom: 1px solid #d6d6d6;
      .info{
        display: -webkit-flex;
        -webkit-align-items: center;
        a{
          display: -webkit-flex;
          -webkit-align-items: center;
        }
        span{
          color: #565656;
          font-size: .21rem;
          margin-left: .37rem;
        }
      }
      .xing{
        display: -webkit-flex;
        a{
          display: -webkit-flex;
          margin-left: .41rem;
        }
      }
    }
</style>
