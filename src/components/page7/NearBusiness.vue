<template>
  <div>
    <div class="bborder" v-for="p2 in bus">
      <div class="bus">
        <a href="#"><img :src="p2.imgpath" alt=""></a>
        <div class="buscon">
          <h5>{{p2.imgname}}</h5>
          <div class="xing">
            <ul>
              <li><img src="../../../static/image/star.jpg" alt=""></li>
              <li><img src="../../../static/image/star.jpg" alt=""></li>
              <li><img src="../../../static/image/star.jpg" alt=""></li>
              <li><img src="../../../static/image/star.jpg" alt=""></li>
              <li><img src="../../../static/image/star.jpg" alt=""></li>
            </ul>
            <span>4.5分</span>
          </div>
          <p><span>全包装修</span><span>未央路 11km</span></p>
        </div>
      </div>
      <near-infos></near-infos>
    </div>

  </div>


</template>

<script>

    import NearInfos from "./NearInfos";
    export default {
        name: "NearBusiness",
      components: {NearInfos},
      props:["bus"],
      data(){
          return{
            list:[1,1],
            list2:[1,1,1,1]
          }
      }
    }
</script>

<style lang="scss" scoped>
      .bborder{
        border-bottom: .1rem solid #f0f0f0;
        .bus{
          border-top:1px solid #e1e1e1;
          border-bottom:1px solid #e1e1e1;
          display: -webkit-flex;
          padding:.12rem;
          >a{
            width: .65rem;
            height: .67rem;
            background-color: deepskyblue;
            margin-right: .12rem;
            img{
              width: .65rem;
              height: .67rem;
            }
          }
          .buscon{
            -webkit-flex: 1;
            h5{
              color:#181818;
              font-size: .15rem;
              line-height: .23rem;
            }
            .xing{
              display: -webkit-flex;
              span{
                color: orange;
                font-size: .12rem;
              }
              ul{
                display: -webkit-flex;
                li{
                  width: .14rem;
                  height: .14rem;
                  background-color: orange;
                  margin-right: .02rem;
                  img{
                    width: .14rem;
                    height: .14rem;
                  }
                }
              }
            }
            p{
              color: #949494;
              font-size: .12rem;
              display: -webkit-flex;
              -webkit-justify-content: space-between;
              line-height: .26rem;
            }
          }

        }
        }
</style>
