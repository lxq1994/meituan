<template>
   <div class="romance">
     <ul>
       <travel-romance-ul :key="index" v-for="(p,index) in romance.happ" :romanceli="p"></travel-romance-ul>
     </ul>
   </div>
</template>

<script>
    import TravelRomanceUl from "./TravelRomanceUl";
    export default {
        name: "TravelRomance",
      components: {TravelRomanceUl},
      data(){
          return{
            list:[1,1,1,1,1,1]
          }
      },
      props:["romance"]
    }
</script>

<style lang="scss" scoped>
      .romance{
        padding:.18rem .1rem .18rem;
        background-color: #2a0820;
        ul{
          display: -webkit-flex;
          overflow-y:hidden;
          overflow-x: auto;
          -webkit-justify-content: space-between;
          -webkit-flex-wrap: wrap;
        }
      }
</style>
