<template>
    <div class="pai">
      <ul>
        <li v-for="p in list">
          <a href="#">婚纱旅拍</a>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "MarrayPai",
      data(){
          return{
            list:[1,1,1,1,1]
          }
      }
    }
</script>

<style lang="scss" scoped>
    .pai{
      ul{
        display: -webkit-flex;
        overflow-x: auto;
        overflow-y: hidden;
        li{
          padding: .28rem .13rem .16rem;
          border-bottom:.04rem solid white;
          -webkit-flex-shrink: 0;
          display: -webkit-flex;
          a{
            color: black;
            font-size: .14rem;
          }
        }
        li:nth-child(1){
          border-bottom:.04rem solid #ff6688;
          a{
            color: #ff6688;
            font-size: .14rem;
          }
        }
      }
    }
</style>
