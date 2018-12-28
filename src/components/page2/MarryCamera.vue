<template>
    <div class="camera">
      <ul>
        <marray-camera-li :key="index" v-for="(p,index) in camera" :cli="p"></marray-camera-li>
      </ul>
    </div>
</template>

<script>
    import MarrayCameraLi from "./MarrayCameraLi";
    export default {
        name: "MarryCamera",
      components: {MarrayCameraLi},
      props:["camera"],
        data(){
          return{
            list:[1,1,1,1,1],
            list2:[1,1,1]
          }
        },
      methods:{
        libg(){
          // $("li:nth-child(5)").nextAll().style.backgroundColor="white"
        }
      },
      mounted(){
        this.libg()
      }
    }
</script>

<style lang="scss" scoped>
    .camera{
      background-color: #ff7ca6;
      padding:0 .18rem;
      ul{
        display: -webkit-flex;
        -webkit-justify-content: space-between;
        -webkit-flex-wrap: wrap;
      }

    }
</style>
