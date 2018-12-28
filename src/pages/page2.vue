<template>
  <div>
    <marry-header></marry-header>
    <marry-camera :camera="datas"></marry-camera>
    <marray-money :money="datas2"></marray-money>
    <marray-gl :camera2="datas2"></marray-gl>
    <marray-pic></marray-pic>
    <marray-plase :plase="datas2"></marray-plase>
    <marray-more></marray-more>
    <marray-pai></marray-pai>
    <marray-gg></marray-gg>
    <marray-house :hourse="datas2"></marray-house>
  </div>

</template>

<script>
  import getdata  from "../apis/p8api"
    import MarryHeader from "../components/page2/MarryHeader";
    import MarryCamera from "../components/page2/MarryCamera";
    import MarrayMoney from "../components/page2/MarrayMoney";
    import MarrayGl from "../components/page2/MarrayGl";
    import MarrayPic from "../components/page2/MarrayPic";
    import MarrayPlase from "../components/page2/MarrayPlase";
    import MarrayMore from "../components/page2/MarrayMore";
    import MarrayPai from "../components/page2/MarrayPai";
    import MarrayGg from "../components/page2/MarrayGg";
    import MarrayHouse from "../components/page2/MarrayHouse";
    export default {
       name: "page2",
      data(){
        return{
          datas:[],
          datas2:[]
        }
      },
      created(){
        getdata.getFood((data)=>{
          this.datas = data.marray
          this.datas2 = data
        })
      },
       components: {
        MarrayHouse,
        MarrayGg,
        MarrayPai, MarrayMore, MarrayPlase, MarrayPic, MarrayGl, MarrayMoney, MarryCamera, MarryHeader},
    }
</script>

<style scoped>

</style>
