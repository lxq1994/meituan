<template>
    <div class="head">
      <div class="ling">
          <a href="#"><i class="iconfont icon-list"></i></a>
          <a href="#"><i class="iconfont icon-ling"></i></a>
      </div>
      <div class="login">
        <a href="#"><img src="../../../static/image/log.jpg" alt=""></a>
        <a href="#">请点击登录</a>
      </div>
      <div class="quan">
        <a href="#"><i class="iconfont icon-jiahao"></i>美团券</a>
        <span></span>
        <a href="#"><i class="iconfont icon-jiahao"></i>收藏</a>
      </div>
    </div>
</template>

<script>
    export default {
        name: "MyHeader"
    }
</script>

<style lang="scss" scoped>
    .head{
      background-color: #06c1ae;
      border-bottom: .05rem solid #f0f0f0;
      .ling{
        height: .73rem;
        color: white;
        display: -webkit-flex;
        -webkit-align-items: center;
        -webkit-justify-content: flex-end;
        a{
          display: -webkit-flex;
          color:white;
        }
        a:first-child{
          margin-right: .4rem;
        }
        a:last-child{
          margin-right: .2rem;
        }
      }
      .login{
        display: -webkit-flex;
        margin-bottom: .22rem;
        a:first-child{
          display: block;
          width: .91rem;
          height: .91rem;
          margin-left: .17rem;
          img{
            width: .91rem;
            height: .91rem;
          }
        }
        a:last-child{
          font-size: .23rem;
          color: white;
          margin-left: .17rem;
          margin-top: .39rem;
        }
      }
      .quan{
        display: -webkit-flex;
        height: .66rem;
        padding:0 .17rem;
        -webkit-align-items: center;
        -webkit-justify-content: space-around;
        a{
          font-size: .16rem;
          color: white;
          .iconfont{
            margin-right: .1rem;
          }
        }
        span{
          width: 1px;
          height: .25rem;
          background-color: #62eee1;
        }
      }
    }
</style>
