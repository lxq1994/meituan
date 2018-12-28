<template>
    <div class="location">
       <span>当前定位城市</span>
       <span>西安</span>
    </div>
</template>

<script>
    export default {
        name: "CityLocation",
    }
</script>

<style lang="scss" scoped>
    .location{
      display: -webkit-flex;
      flex-direction: column;
      background-color: #f4f4f4;
      padding-left: .12rem;
      padding-bottom: .17rem;
      span:nth-child(1){
        color: #999999;
        font-size: .15rem;
        padding:.22rem 0 .12rem 0;
      }
      span:nth-child(2){
        width: 1.05rem;
        height: .4rem;
        background-color: white;
        border:1px solid #d5d5d5;
        border-radius: .03rem;
        font-size: .16rem;
        font-weight: bold;
        text-align: center;
        line-height: .4rem;
      }
    }
</style>
