<template>
    <div class="search">
      <div class="find">
        <a href="#"><i class="iconfont icon-search"></i></a>
        <input type="text" value="输入城市名或拼音查询"/>
      </div>
    </div>
</template>

<script>
    export default {
        name: "CitySearch"
    }
</script>

<style lang="scss" scoped>
    .search{
      height: .5rem;
      display: -webkit-flex;
      -webkit-justify-content: center;
      -webkit-align-items: center;
      border-bottom: 1px solid #e6e7e9;;
      .find{
        width: 3.4rem;
        height: .3rem;
        background-color: #e6e7e9;
        display: -webkit-flex;
        -webkit-align-items: center;
        padding-left: .1rem;
        a{
          display: -webkit-flex;
        }
        input{
          background-color:  #e6e7e9;
          outline: none;
          margin-left: .1rem;
          border:0;
        }
      }
    }
</style>
