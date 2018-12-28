<template>
    <div class="time">
      <span>￥</span>
      <span>9.99</span>
      <span>门市价：￥29.98</span>
      <a href="#">￥2.99 限时抢购</a>
    </div>
</template>

<script>
    export default {
        name: "TalkTime"
    }
</script>

<style lang="scss" scoped>
      .time{
        height: .9rem;
        padding:0 .12rem;
        display: -webkit-flex;
        -webkit-align-items: center;
        span:nth-of-type(1){
          color: #06c1ae;
          font-size: .12rem;
        }
        span:nth-of-type(2){
          color: #06c1ae;
          font-size: .2rem;
          margin-right: .2rem;
        }
        span:nth-of-type(3){
          color: #cccccc;
          font-size: .12rem;
          margin-right: .38rem;
        }
        a{
          width: 1.3rem;
          height: .42rem;
          background-color: #fe9900;
          border-radius: .02rem;
          text-align: center;
          line-height: .42rem;
          color: white;
          font-size: .15rem;
        }
      }
</style>
