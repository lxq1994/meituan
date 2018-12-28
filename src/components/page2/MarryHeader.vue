<template>
  <div class="head">
    <a href="#" class="jt"><i class="iconfont icon-jiahao"></i></a>
    <div class="search">
      <a href="#"><i class="iconfont icon-search"></i></a>
      <input type="text" value="请输入商户名、地点">
    </div>
  </div>
</template>

<script>
    export default {
        name: "MarryHeader"
    }
</script>

<style lang="scss" scoped>
  .head {
    background-color: #ff7ca6;
    padding: .08rem .14rem .22rem;
    display: -webkit-flex;
    -webkit-justify-content: space-between;
    -webkit-align-items: center;
    .jt{
      display: -webkit-flex;
    }
  .search {
    width: 3.23rem;
    height: .3rem;
    border-radius: .13rem;
    background-color: #ffd5e3;
    display: -webkit-flex;
    -webkit-justify-content: center;
    -webkit-align-items: center;
    font-size: .11rem;
    color: #817277;
    input{
      border:0;
      outline: none;
      background-color: #ffd5e3;
    }
    a{
      margin-left: .93rem;
    }
  }
  }

</style>
