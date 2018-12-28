<template>
    <div class="gl">
      <ul>
        <li v-for="p in camera2.lvp">
          <a href="#"><img :src="p.imgpath" alt=""></a>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "MarrayGl",
      props:["camera2"],
      data(){
          return{
            list:[1,1,1,1,1]
          }
      }
    }
</script>

<style lang="scss" scoped>
    .gl{
      padding: .2rem 0 .2rem .15rem;
      ul{
        display: -webkit-flex;
        overflow-x: auto;
        overflow-y: hidden;
        li{
          width: 1.64rem;
          height: 1.2rem;
          background-color: pink;
          margin-left: .08rem;
          flex-shrink: 0;
          a{
            width: 1.64rem;
            height: 1.2rem;
            display: -webkit-flex;
            img{
              width: 1.64rem;
              height: 1.2rem;
            }
          }
        }
      }
    }
</style>
