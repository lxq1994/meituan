<template>
  <div>
    <div class="info" v-for="p in info.hbig">
      <a href="#" class="imgs"><img :src="p.imgpath" alt="">
        <a href="#">节日限定</a>
      </a>
      <div class="allnews">
        <h3>全新 &lt; Tourism 境内旅拍系列 &gt; 套餐</h3>
        <p>
          <span>秒杀</span>
          <span>￥6999</span>
          <span>￥21888</span>
          <a href="#">查看详情</a>
        </p>
      </div>
    </div>
  </div>

</template>

<script>
    export default {
        name: "TravelInfo",
      props:["info"],
      data(){
          return{
            list:[1,1,1,1]
          }
      }
    }
</script>

<style lang="scss" scoped>
  .info{
    padding:.07rem .1rem .16rem;
    background-color: #e4498d;
    .imgs{
      display: block;
      width: 3.55rem;
      height: 2rem;
      background-color: pink;
      position: relative;
      a{
        display: block;
        width: .72rem;
        height: .22rem;
        background-color: #fe9818;
        font-size: .1rem;
        color:white;
        text-align: center;
        line-height: .22rem;
        position: absolute;
        left:.11rem;
        top:1.33rem;
      }
      img{
        width: 3.55rem;
        height: 2rem;

      }
    }
    .allnews{
      padding:.1rem;
      background-color: white;
      h3{
        font-size: .13rem;
      }
      p{
        display: -webkit-flex;
        -webkit-align-items: flex-end;
        margin-top: -.15rem;
        span:nth-of-type(1){
          font-size: .1rem;
          color: #ff0e60;
        }
        span:nth-of-type(2){
          font-size: .13rem;
          color: #ff0e60;
          margin-left: .09rem;
        }
        span:nth-of-type(3){
          font-size: .1rem;
          color: #b6b6b6;
          text-decoration: line-through;
          margin-left: .09rem;
        }
        a{
          width: .84rem;
          height: .39rem;
          background-color: #ff0054;
          font-size: .15rem;
          color:white;
          line-height: .39rem;
          text-align: center;
          border-radius: .04rem;
          margin-left: 1.2rem;
        }
      }
    }
  }
</style>
