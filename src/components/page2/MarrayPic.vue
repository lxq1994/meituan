<template>
    <div class="pic">
      <div class="swiper-container swiper2">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <a href="#"><img src="../../../static/image/longpic.jpg" alt=""></a>
          </div>
          <div class="swiper-slide">
            <a href="#"><img src="../../../static/image/longpic.jpg" alt=""></a>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import Swiper from "swiper"
  import "swiper/dist/css/swiper.min.css"
    export default {
      name: "MarrayPic",
      mounted(){
        new Swiper(".swiper2", {
          direction:"horizontal",
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
    .pic{
      padding:0 .15rem;

      margin-bottom:.31rem;
      .swiper2{
        width: 3.45rem;
        height: .8rem;
        a{
          width: 3.45rem;
          height: .8rem;

          img{
            width: 3.45rem;
            height: .8rem;
          }
        }
      }

    }
</style>
