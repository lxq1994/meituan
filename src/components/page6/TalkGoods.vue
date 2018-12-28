<template>
    <div class="goods">
      <div class="userLook">
        <span>看了本团购的用户还看了</span>
        <span>广告</span>
      </div>
    </div>
</template>

<script>
    export default {
      props:["food"],
      data(){
          return{
            list:[1,1,1,1]
          }
      }
    }
</script>

<style lang="scss" scoped>
    .goods{
      .userLook{
        height: .45rem;
        border-bottom:1px solid #e4e4e4;
        span:first-child{
          float: left;
          color: #303030;
          font-size: .15rem;
          line-height: .45rem;
          margin-left: .12rem;
        }
        span:last-child{
          float: right;
          color: #cacaca;
          font-size: .15rem;
          line-height: .45rem;
          margin-right: .12rem;
        }
      }
    }
</style>
