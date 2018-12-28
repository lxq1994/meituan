<template>
    <div>
     <my-order :key="index" v-for="(p,index) in list"></my-order>
    </div>
</template>

<script>
    import MyOrder from "./MyOrder";
    export default {
        name: "MeiList",
      components: {MyOrder},
      data(){
          return{
            list:[1,1,1,1,1,1,11,1,1,1]
          }
      }
    }
</script>

<style lang="scss" scoped>
  .order{
    margin: 0 .15rem;
    padding:0;
  }
  .order:nth-child(5){
    border-bottom:.05rem solid #f0f0f0;
    margin:0;
    padding:0 .15rem;

  }
  .order:nth-child(9){
    border-bottom:.05rem solid #f0f0f0;
    margin:0;
    padding:0 .15rem;
  }
  .order:nth-child(10){
    border-bottom:.05rem solid #f0f0f0;
    margin:0;
    padding:0 .15rem;
  }
</style>
