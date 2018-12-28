<template>
  <div>
    <div class="house" v-for="p in hourse.hourse">
      <div class="imgs">
        <a href="#"><img :src="p.imgpath" alt=""></a>
      </div>
      <div class="love">
        <p>{{p.imgname}}</p>
        <div class="star">
          <ul>
            <li><img src="../../../static/image/star.jpg" alt=""></li>
            <li><img src="../../../static/image/star.jpg" alt=""></li>
            <li><img src="../../../static/image/star.jpg" alt=""></li>
            <li><img src="../../../static/image/star.jpg" alt=""></li>
            <li><img src="../../../static/image/star.jpg" alt=""></li>
            <li><img src="../../../static/image/star.jpg" alt=""></li>
            <li>5.0分</li>
          </ul>
          <span>￥3792/人</span>
        </div>
        <span class="xiaoz">小寨 工作室</span>
        <div class="money">
          <ul>
            <li><a href="#"><img src="../../../static/image/heart.jpg" alt=""></a>500元</li>
            <li><a href="#"><img src="../../../static/image/heart.jpg" alt=""></a>全精修</li>
            <li><a href="#"><img src="../../../static/image/heart.jpg" alt=""></a>量身定做</li>
            <li><a href="#"><img src="../../../static/image/heart.jpg" alt=""></a>非全价</li>
            <li><a href="#"><img src="../../../static/image/heart.jpg" alt=""></a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
    export default {
        name: "MarrayHouse",
      props:["hourse"],
      data(){
          return{
            list:[1,1,1]
          }
      }
    }
</script>

<style lang="scss" scoped>
    .house{
      padding:.1rem;
      border-bottom:1px solid #d0d0d0;
      display: -webkit-flex;
      border-bottom: 1px solid #f0f0f0;
      border-top: 1px solid #f0f0f0;
      .imgs{
        margin-right: .1rem;
        display: -webkit-flex;
        a{
          width: .72rem;
          height: .65rem;
          background-color: deepskyblue;
          display: -webkit-flex;
          img{
            width: .72rem;
            height: .65rem;
          }
        }
      }
      .love{
        display: -webkit-flex;
        flex-direction: column;
        p{
            font-size: .15rem;
            font-weight: bold;
        }
        .star{
          display: -webkit-flex;
          -webkit-justify-content: space-between;
          font-size: .13rem;
          color: #dedede;
          line-height: .35rem;
          ul{
            display: -webkit-flex;
            li{
              display: -webkit-flex;
            }
            img{
              width: .2rem;
              height: .2rem;
            }
          }
        }
        .xiaoz{
          font-size: .13rem;
          color: #dedede;
          padding-bottom: .1rem;
          border-bottom: 1px solid #f0f0f0;
          margin-bottom: .07rem;
        }
        .money{
          ul{
            display: -webkit-flex;
            font-size: .13rem;
            li{
              display: -webkit-flex;
              a{
                width: .14rem;
                height: .14rem;
                background-color: deepskyblue;
                display: -webkit-flex;
                img{
                  width: .14rem;
                  height: .14rem;
                }
              }
            }
          }

        }
      }
    }
</style>
