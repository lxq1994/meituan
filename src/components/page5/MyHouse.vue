<template>
  <div class="money">
    <ul>
      <li v-for="p in list">
        <a href="#">
          <i :class="p"></i>
          <span>首页</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "MyHouse",
      data(){
          return{
            list:['iconfont icon-hourse','iconfont icon-list','iconfont icon-ling']
          }
      }
    }
</script>

<style lang="scss" scoped>
  .money{
    padding:.05rem 0;
    ul{
      display: -webkit-flex;
      -webkit-align-items: center;
      -webkit-justify-content: space-around;
      li{

        a{
          display: -webkit-flex;
          flex-direction: column;
          -webkit-align-items: center;
          color: #717171;
          font-size: .11rem;
          i{
            font-size: .25rem;
          }
          span{
            margin-top: .05rem;
          }
        }
      }
    }
  }
</style>
