<template>
  <div>
    <div class="header">
      <a href="#"><i class="iconfont icon-list"></i></a>
      <div class="country">
        <router-link to="/Page3/local" tag="span">国内</router-link>
        <span>海外</span>
      </div>
    </div>
    <!--<router-view></router-view>-->
  </div>

</template>

<script>
  import $ from "jquery"
    export default {
        name: "CityHeader",
      methods:{
          spans(){
            $("span")[0].onclick = function () {
              console.log(1)
              $("span").eq(0).css({"backgroundColor":"#06c1ae",
              "color":"white"})
              $("span").eq(1).css({"backgroundColor":"white",
                "color":"black"})
            }
            $("span")[1].onclick = function () {
              console.log(2)
              $("span").eq(1).css({"backgroundColor":"#06c1ae",
                "color":"white"})
              $("span").eq(0).css({"backgroundColor":"white",
                "color":"black"})
            }
        }
      },
      mounted(){
        this.spans()
      },
      updated(){
          this.spans()
      }
    }
</script>

<style lang="scss" scoped>
      .header{
        height: .46rem;
        border-bottom: 1px solid #bdbdbd;
        display: -webkit-flex;
        -webkit-align-items: center;
        padding-left: .15rem;
        a{
          display: -webkit-flex;
        }
        .country{
          width: 1.75rem;
          height: .32rem;
          border:1px solid #06c1ae;
          border-radius: .04rem;
          display: -webkit-flex;
          margin-left: .72rem;
          span:nth-child(1){
            color:#06c1ae;
            font-size: .13rem;
            text-align: center;
            line-height: .32rem;
            flex: 1;
          }
          span:nth-child(2){
            font-size: .13rem;
            color: white;
            text-align: center;
            line-height: .32rem;
            background-color:#06c1ae;
            flex: 1;
          }
        }
      }
</style>
