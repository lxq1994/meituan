<template>
    <div class="order">
      <a href=""><i class="iconfont icon-message"></i>我的订单</a>
      <a href="">全部订单<i class="iconfont icon-jiahao"></i></a>
    </div>
</template>

<script>
    export default {
        name: "MyOrder"
    }
</script>

<style lang="scss" scoped>
    .order{
      height: .5rem;
      display: -webkit-flex;
      -webkit-align-items: center;
      -webkit-justify-content: space-between;
      padding:0 .15rem;
      border-bottom: 1px solid #e6e6e6;

      a{
        font-size: .15rem;
        display: -webkit-flex;
        -webkit-align-items: center;
        -webkit-justify-content: space-between;
      }
      a:first-child{
         color: #555555;
        i:first-child{
          margin-right: .1rem;
        }
       }
      a:last-child{
        color: #7d7d7d;
        i:last-child{
          margin-left: .1rem;
        }
      }
    }

</style>
