<template>
    <div class="head">
      <a href="#"><i class="iconfont icon-jiahao"></i></a>
      <a href="#">
        <i class="iconfont icon-search"></i>
        <input type="text" value="输入商家、分类或商圈">
      </a>
      <a href="#"><i class="iconfont icon-list"></i></a>
    </div>
</template>

<script>
    export default {
        name: "NearHeader"
    }
</script>

<style lang="scss" scoped>
    .head{
      height: .5rem;
      border-bottom:1px solid #cccccc;
      display: -webkit-flex;
      -webkit-justify-content: space-between;
      -webkit-align-items: center;
      a{
        display: -webkit-flex;
      }
      a:first-child{
        margin-left: .15rem;
      }
      a:nth-child(2){
        width: 2.52rem;
        height: .31rem;
        background-color: #e6e7e9;
        border-radius: .2rem;
        -webkit-align-items: center;
        -webkit-justify-content: center;
        input{
          background-color: #e6e7e9;
          outline: none;
          border:0;
          margin-left: .08rem;
        }
      }
      a:last-child{
        margin-right: .15rem;
      }
    }
</style>
