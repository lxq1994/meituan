<template>
    <header>
      <a class="xian" href="#">西安</a>
      <div class="search">
        <span><i class="iconfont icon-search"></i></span>
        <input type="text" value="楷渡商务冰冠"/>
      </div>
      <div class="ling">
        <a href="#"><i class="iconfont icon-list"></i></a>
        <a href="#"><i class="iconfont icon-ling"></i></a>
      </div>
    </header>
</template>

<script>
    export default {
        name: "HeadPart"
    }
</script>

<style lang="scss" scoped>
 header{
   display: -webkit-flex;
   -webkit-align-items: center;
   -webkit-justify-content: center;
   width: 100%;
   height: .72rem;
   background-color: #06c1ae;
   font-size: .2rem;
   .xian{
     color: white;

   }
   .search{
     display: -webkit-flex;
     -webkit-align-items: center;
     -webkit-justify-content: center;
     box-sizing: border-box;
     margin-left: .16rem;
     font-size: .17rem;
     height: .45rem;
     padding:.12rem 0.01rem .13rem .64rem;
     background-color: white;
     -webkit-border-radius: .2rem;
     -moz-border-radius: .2rem;
     border-radius: .2rem;
     input{
       color:#b8b8b8;
       border:0;
       outline: 0;
     }
   }
   .ling{
     i{
       color: white;
     }
     a:first-of-type{
       margin-left: .23rem;
     }
   }
 }
</style>
