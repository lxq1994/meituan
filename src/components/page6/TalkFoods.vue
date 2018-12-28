<template>
    <ul>
      <food :key="index" v-for="(p,index) in foodlist" :food="p"></food>
    </ul>
</template>

<script>
  import getdata from "../../apis/p8api"
    import Food from "../Index/Food";
    export default {
        name: "TalkFoods",
      props:["foodlist"],
      components: {Food},
      created(){
          getdata.getFood((data)=>{

          })
      }
    }
</script>

<style scoped>

</style>
