<template>
  <div class="page8">
    <class-header></class-header>
    <class-hot :lists="info"></class-hot>
  </div>
</template>

<script>
    import datas from "../apis/p8api"
    import ClassHeader from "../components/page8/ClassHeader";
    import ClassHot from "../components/page8/ClassHot";
    export default {
        name: "page8",
      components: {ClassHot, ClassHeader},
      data(){
          return{
            info:[]
          }
      },
      created(){
        // fetch("http://localhost:3000/p8url").then(res=>{
        //   res.json().then(data=>{
        //     console.log(data)
        //   })
        // })
        datas.getShopData((i)=>{
          this.info = i
          // console.log(this.info)
        })

      }
    }
</script>

<style lang="scss" scoped>

</style>
