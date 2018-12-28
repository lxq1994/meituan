<template>
  <div class="indexs">
    <head-part></head-part>
    <contnet-mt :con="datas" :con2="datass"></contnet-mt>
  </div>
</template>

<script>


    import ShopData from "../apis/p8api";
    import HeadPart from "../components/Index/HeadPart";

    import ContnetMt from "../components/Index/ContnetMt";
    export default {
      name: "Index",
      components: {ContnetMt, HeadPart},
      data(){
        return{
          datas:[],
          datass:[]
        }
      },
      created() {
        ShopData.getIndex((data) => {
          this.datas = data
        })
        ShopData.getFood((data2)=>{
          this.datass = data2.food
          console.log(data2.food)
        })
      },

    }
</script>

<style lang="scss" scoped>
      .indexs{
        height: 100vh;
      }
</style>
