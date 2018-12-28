<template>
    <div>
      <near-info :key="index" v-for="(p,index) in list"></near-info>
    </div>
</template>

<script>
    import NearInfo from "./NearInfo";
    export default {
        name: "NearInfos",
      components: {NearInfo},
      data(){
          return{
            list:[1,1]
          }
      }
    }
</script>

<style lang="scss" scoped>
    .infocon:nth-child(1){
      border-bottom:1px solid #e1e1e1;
    }
</style>
