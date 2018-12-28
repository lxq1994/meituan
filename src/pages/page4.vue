<template>
  <div>
    <travel-header></travel-header>
    <travel-five :bigp="datas"></travel-five>
    <travel-place></travel-place>
    <travel-romance :romance="datas"></travel-romance>
    <travel-special></travel-special>
    <travel-info :info="datas"></travel-info>
  </div>
</template>

<script>
  import getdata from "../apis/p8api"
    import TravelHeader from "../components/page4/TravelHeader";
    import TravelFive from "../components/page4/TravelFive";
    import TravelPlace from "../components/page4/TravelPlace";
    import TravelRomance from "../components/page4/TravelRomance";
    import TravelSpecial from "../components/page4/TravelSpecial";
    import TravelInfo from "../components/page4/TravelInfo";
    export default {
        name: "page4",
      data(){
          return {
            datas:[]
          }
      },
      created(){
        getdata.getFood((data)=>{
          this.datas = data.happy
        })
      },
      components: {TravelInfo, TravelSpecial, TravelRomance, TravelPlace, TravelFive, TravelHeader}
    }
</script>

<style scoped>

</style>
