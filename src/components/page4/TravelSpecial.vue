<template>
    <div class="special2">
      <div class="special">
          <div class="tc">
            精选套餐专区
          </div>
          <div class="jb"></div>
      </div>
    </div>

</template>

<script>
    export default {
        name: "TravelSpecial"
    }
</script>

<style lang="scss" scoped>
  .special2{
    background-color: #2e0a26;
    .special{
      height: .6rem;
      background-color: #ee5194;
      -webkit-border-top-left-radius: .18rem;
      -webkit-border-top-right-radius: .18rem;
      display: -webkit-flex;
      flex-direction: column;
      -webkit-justify-content: center;
      -webkit-align-items: center;
      position: relative;
      .tc{
        font-size: .35rem;
        color:white;
        font-weight: bold;
        position: relative;
        z-index: 1;
        text-shadow: 2px 1px white;
      }
      .jb{
        width: 2.68rem;
        height: .17rem;
        background-color: aquamarine;
        position:absolute;
        top:.41rem;
      }
    }
  }

</style>
