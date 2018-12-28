<template>
  <ul class="uls">
    <li v-for="p in item">
      <router-link :to="p.links">
        <img  :src="p.imgpath" alt=""/>
      </router-link>
      <a href="#">{{p.imgname}}</a>
    </li>
  </ul>
</template>

<script>

    export default {
        name: "ItemList",
      data(){
          return{
            list:"../../assets/image/mao.jpg",
          }
      },
      props:["item","item2"],
      created(){

      },
      updated(){

      }
    }


</script>

<style lang="scss" scoped>
  .uls{
    display: -webkit-flex;
    padding-top:.2rem;
    width: 199%;
    height: 2rem;
    overflow-x: auto;
    overflow-y: hidden;
    -webkit-justify-content: space-around;
    -webkit-flex-wrap: wrap;
      li{
        display: -webkit-flex;
        flex-direction: column;
        -webkit-align-items: center;
        -webkit-flex-shrink: 0;
        a{
          display: -webkit-flex;
        }
        a:first-child{
          width: .59rem;
          height: .59rem;

          img{
            width: .59rem;
            height: .59rem;
          }
        }
        a:last-child{
          display: block;
          width: .686rem;
          text-align: center;
          font-size: .15rem;
          color: black;
        }
      }
    }
</style>
