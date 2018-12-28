<template>
  <div class="camera">
    <ul >
      <li v-for="p in plase.plase">
        <a href="#">
          <img :src="p.imgpath" alt="">
        </a>
        <span>{{p.imgname}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "MarrayPlase",
      props:["plase"],
      data(){
          return{
            list:[1,1,1,1,1]
          }
      }
    }
</script>

<style lang="scss" scoped>
  .camera{
    padding:0 .18rem;
  ul{
    display: -webkit-flex;
    -webkit-justify-content: space-between;
  li{
    display: -webkit-flex;
    flex-direction: column;
    -webkit-justify-content: space-between;
    -webkit-align-items: center;
  a{
    width: .35rem;
    height: .37rem;
    display: -webkit-flex;

    img{
      width: .35rem;
      height: .37rem;
    }
  }
  span{
    font-size: .12rem;
    color: black;
    margin-top: .1rem;
  }
  }
  }
  }
</style>
