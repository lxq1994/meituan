<template>
    <div class="money">
      <a href="#"><img :src="money.money[0].imgpath" alt=""></a>
      <div class="swiper-container swiper1">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
              <p>千万黄金珍珠婚纱11月空降魔都海滩</p>
              <img :src="money.money[1].imgpath" alt="">
          </div>
          <div class="swiper-slide">
              <p>岁月峥嵘珍珠婚纱11月空降魔都天空</p>
              <img  :src="datas" alt="">
          </div>
          <div class="swiper-slide">
              <p>光辉岁月珍珠婚纱11月空降魔都沙滩</p>
              <img :src="money.money[1].imgpath" alt="">
          </div>
        </div>
      </div>
    </div>
</template>
<script>
  import Swiper from "swiper"
  import "swiper/dist/css/swiper.min.css"
  export default {
    name: "MarrayMoney",
    props:["money"],
    data(){
      return {
       datas:"../../static/image/mao.jpg"
      }
    },
    mounted(){

    },
    updated(){
      new Swiper(".swiper1", {
        direction:"vertical",
        autoplay: true,
        autoplay: {
          delay: 2000,
          stopOnLastSlide: false,
          disableOnInteraction: true,
        },
        // effect:"cube",
        loop: true, // 循环模式选项
      })
    }
  }
</script>

<style lang="scss" scoped>
    .money{
      padding:.14rem;
      display: -webkit-flex;
      -webkit-justify-content: space-between;
      -webkit-align-items: center;
      border-top:1px solid #e6e6e6;
      border-bottom:1px solid #e6e6e6;
      .swiper1{
        width: 3rem;
        height: .4rem;
        .swiper-wrapper{
          .swiper-slide{
              display: -webkit-flex;
              -webkit-align-items: center;
              padding-left: .1rem;
              img{
                width: .4rem;
                height: .4rem;
                margin-left: .05rem;
              }
              p{
                font-size: .13rem;
                height: .4rem;
                line-height: .4rem;
              }
          }
        }
      }
      a{
        width: .4rem;
        height: .4rem;

      }
      a:nth-of-type(1){
        padding-right: .1rem;
        border-right: 1px solid #e6e6e6;
        img{
          width: .4rem;
          height: .4rem;
        }
      }
    }
</style>
