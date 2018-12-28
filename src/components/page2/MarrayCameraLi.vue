<template>
  <li>
    <a href="#">
      <img :src="cli.imgpath" alt="">
    </a>
    <span>{{cli.imgname}}</span>
  </li>
</template>

<script>
  import   jquery from "../../../node_modules/jquery/src/jquery"
    export default {
      name: "MarrayCameraLi",
      props:["cli"],
      methods:{

      },
      mounted(){
          // this.libg()
      }

    }
</script>

<style lang="scss" scoped>
  li{
    display: -webkit-flex;
    flex-direction: column;
    -webkit-justify-content: space-between;
    -webkit-align-items: center;
    -webkit-flex-shrink: 0;
    margin-bottom: .1rem;
    a{
      width: .35rem;
      height: .37rem;
      img{
        width: .35rem;
        height: .37rem;
      }
    }
    span{
      display: block;
      text-align: center;
      width:.6rem;
      font-size: .12rem;
      color: white;
    }
  }
</style>
