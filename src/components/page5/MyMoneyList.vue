<template>
    <div class="money">
      <ul>
        <li v-for="p in list">
          <a href="#">
            <i :class="p"></i>
            <span>代付款</span>
          </a>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "MyMoneyList",
      data(){
          return{
            list:['iconfont icon-list','iconfont icon-hourse','iconfont icon-form','iconfont icon-ling']
          }
      }
    }
</script>

<style lang="scss" scoped>
      .money{
        padding:.17rem 0;
        border-bottom: .05rem solid #f0f0f0;
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
                margin-top: .08rem;
              }
            }
          }
        }
      }
</style>
