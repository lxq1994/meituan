<template>
    <div class="select">
      <span>当前:西安</span>
      <span>选择县区 <a href="#"><i class="iconfont icon-list"></i></a></span>
    </div>
</template>

<script>
    export default {
        name: "CitySelect"
    }
</script>

<style lang="scss" scoped>
      .select{
        padding:.15rem .31rem .15rem .13rem;
        display: -webkit-flex;
        -webkit-justify-content: space-between;
        -webkit-align-items: center;
        span:nth-child(1){
          color: #2e2e2e;
          font-size: .15rem;
          display: -webkit-flex;
        }
        span:nth-child(2){
          color:#8c8c8c;
          font-size: .13rem;
          display: -webkit-flex;
          a{
            display: -webkit-flex;
          }
        }
      }
</style>
