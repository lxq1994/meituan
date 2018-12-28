<template>

  <div class="page6">
    <talk-header></talk-header>
    <talk-time></talk-time>
    <talk-dong :dong="datas" :foodlist="datas2"></talk-dong>
  </div>
 </template>

<script>
    import getdata from "../apis/p8api"
    import TalkHeader from "../components/page6/TalkHeader";
    import TalkTime from "../components/page6/TalkTime";
    import TalkDong from "../components/page6/TalkDong";
    import FoodList from "../components/Index/FoodList";
    import Index from "./Index";
    export default {
        name: "page6",
      components: {TalkDong, TalkTime, TalkHeader},
      data(){
        return{
          datas:[],
          datas2:[]
        }
      },
      created(){
          getdata.getFood((data)=>{
            this.datas = data
            this.datas2 = data.food
          })
      }
    }
</script>

<style scoped>
    .page6{
      height: 100vh;
      display: -webkit-flex;
      flex-direction: column;
    }
</style>
