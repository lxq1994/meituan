<template>
    <div class="five">
      <ul>
        <li>
          <a href="#">
            <img src="../../../static/image/indexbig.jpg" alt="">
          </a>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "TravelFive",
      data(){
          return{
            list:[1,1,1,1]
          }
      },
      props:["bigp"]
    }
</script>

<style lang="scss" scoped>
    .five{
      ul{
        height: 3rem;
        li{
          flex-shrink: 0;
          width: 100%;
          height: 100%;
          a{
            width: 100%;
            height: 100%;
            img{
              width: 100%;
              height: 100%;
            }
          }
        }
        li:nth-child(even){
          background-color: aqua;
        }
        li:nth-child(odd){
          background-color:pink;
        }
      }
    }
</style>
