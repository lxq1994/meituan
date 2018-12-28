<template>
  <div class="dong">
    <talk-con :key="index" v-for="(p,index) in dong.per" :con="p"></talk-con>
    <talk-goods></talk-goods>
    <talk-foods :foodlist="foodlist"></talk-foods>
  </div>
</template>

<script>
  import getdata from "../../apis/p8api"
    import TalkCon from "./TalkCon";
  import TalkFoods from "./TalkFoods";
  import TalkGoods from "./TalkGoods";
    export default {
        name: "TalkDong",
      components: {TalkGoods, TalkFoods, TalkCon},
      props:["dong","foodlist"],
      data(){
          return{
            list:[1,1,1],
          }
      },

    }
</script>

<style scoped>
    .dong{
      -webkit-flex: 1;
      overflow-x: hidden;
      overflow-y: auto;
    }
</style>
