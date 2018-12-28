<template>
    <ul>
      <food :key="index" v-for="(p,index) in foodlist" :food="p"></food>
    </ul>
</template>
<script>
    import Food from "./Food";
    export default {
      props:["foodlist"],
      name: "FoodList",
      data(){
        return{
          list:[]
        }

      },
      mounted(){
        // console.log(this.list)

      },
      updated(){
       this.list = this.foodlist.food
        console.log((this.foodlist))
      },
      components: {Food}
    }
</script>

<style scoped>

</style>
