<template>
    <li>
      <a class="imgs" href="#"><img :src="romanceli.imgpath" alt="">
        <span>节日限定</span>
      </a>
      <div class="eyes">
        <h4>谢安视觉</h4>
        <h5>仅售13898元，价...</h5>
        <p>
          <span>秒杀</span>
          <span>￥13898</span>
          <span>￥15899</span>
          <span>抢</span>
        </p>
      </div>
    </li>
</template>

<script>
    export default {
        name: "TravelRomanceUl",
      props:["romanceli"]
    }
</script>

<style lang="scss" scoped>
    li{
      background-color: white;
      margin-bottom: .1rem;
      .imgs{
        height: 1.3rem;
        position: relative;
        display: -webkit-flex;
        background-color: aqua;
        width: 1.72rem;
        flex-shrink: 0;
        img{
          width: 100%;
          height: 100%;
        }
        span{
          background-color: #fe9818;
          width: .54rem;
          height: .22rem;
          font-size: .1rem;
          color: white;
          line-height: .22rem;
          text-align: center;
          position: absolute;
          top:0;
          left:0;
        }
      }
      .eyes{
        padding:.1rem .1rem;
        h4{
          font-size: .13rem;
          line-height: .13rem;
          color: #161616;
          margin-bottom: .1rem;
        }
        h5{
          color: #6b6b6b;
          font-size: .1rem;
          line-height: .1rem;
          margin-bottom: -.1rem;
        }
        p{
          display: -webkit-flex;
          -webkit-align-items: flex-end;
          span:nth-child(1){
            color: #fc0047;
            font-size: .1rem;
          }
          span:nth-child(2){
            color: #fc0047;
            font-size: .13rem;
          }
          span:nth-child(3){
            color: #a5a5a5;
            font-size: .06rem;
            text-decoration: line-through;
          }
          span:nth-child(4){
            width: .3rem;
            height: .32rem;
            color: #fffdfd;
            background-color: #ff0054;
            font-size: .15rem;
            text-align:center;
            line-height: .32rem;
            border-radius: .02rem;
          }
        }
      }
    }
</style>
