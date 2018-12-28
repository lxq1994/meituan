<template>
    <div>
      <CityNative :key="index" v-for="(p,index) in list1" :lists="p"></CityNative>
    </div>
</template>

<script>
  import getdata from "../../apis/p8api"
    import CityNative from "./CityNative"
    export default {
        name: "CityNativeCon",
      components: {CityNative},
      data(){
          return{
            list1:[]
          }
      },
      created(){
          getdata.getShopData((data)=>{
            this.list1 = data
            console.log(data)
          })
      }
    }
</script>

<style scoped>

</style>
