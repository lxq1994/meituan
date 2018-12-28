<template>
  <div>
    <div class="nav">
      <a href="#">装修设计<span></span></a>
      <span></span>
      <a href="#">附近<span></span></a>
      <span></span>
      <a href="#">智能排序<span></span></a>
    </div>
    <div class="gg">
      <span>精选商户</span>
      <span>广告</span>
    </div>
  </div>

</template>

<script>
    export default {
        name: "NearNav"
    }
</script>

<style lang="scss" scoped>
    .nav{
      height: .45rem;
      display: -webkit-flex;
      -webkit-align-items: center;
      -webkit-justify-content: space-between;
      border-bottom:1px solid #dfdfdf;
      >span{
        width: 1px;
        height: .25rem;
        background-color: #e1e1e1;
      }
      a{
        color: #676767;
        font-size: .13rem;
        display: -webkit-flex;
        -webkit-align-items: center;
        span{
          display: block;
          width: 0;
          height: 0;
          border:.05rem solid transparent;
          border-top:.05rem solid #afaca8;
          margin-left: .04rem;
          margin-top: .06rem;
        }
      }
      a:nth-of-type(1){
        margin-left: .27rem;
      }
      a:nth-of-type(3){
        margin-right: .27rem;
      }
    }
    .gg{
      margin:1px 0;
      height: .19rem;
      background-color: #f5f5f5;
      border-top:2px solid #e5e5e5;
      span{
        color: #a3a3a3;
        font-size: .1rem;
        height: .19rem;
        line-height: .19rem;
      }
      span:first-child{
        margin-left: .16rem;
        float: left;
      }
      span:last-child{
        margin-right: .16rem;
        float: right;
      }
    }
</style>
