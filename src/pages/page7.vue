<template>
    <div class="page7">
      <near-header></near-header>
      <near-nav></near-nav>
      <near-business :bus="datas"></near-business>
    </div>
</template>

<script>
  import  getdata  from "../apis/p8api"
    import NearHeader from "../components/page7/NearHeader";
    import NearNav from "../components/page7/NearNav";
    import NearBusiness from "../components/page7/NearBusiness";
    export default {
        name: "page7",
      components: {NearBusiness, NearNav, NearHeader},
      data(){
          return {
              datas:[]
          }
      },
      created(){
          getdata.getFood((data)=>{
            this.datas = data.jimu
          })
      }
    }
</script>

<style scoped>

</style>
