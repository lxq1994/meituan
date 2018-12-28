<template>
  <div class="mt">
    <all-list :alllist="con" :alllist2="con2"></all-list>
    <love></love>
    <more></more>
    <food-list :foodlist="con2"></food-list>
  </div>
</template>

<script>



    import AllList from "./AllList";
    import Love from "./Love";
    import More from "./More";
    import FoodList from "./FoodList";
    export default {
        name: "ContnetMt",
      components: {FoodList, More, Love, AllList},
      props:["con","con2"],
      created(){
          console.log(this.con2)
      }
    }
</script>

<style lang="scss" scoped>
  .mt{
      height: calc(100vh - .72rem);
      overflow-x: hidden;
      overflow-y: auto;
  }

</style>
