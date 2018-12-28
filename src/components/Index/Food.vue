<template>
    <li>
      <a href="#"><img :src="food.imgpath" alt=""></a>
      <div>
        <h3>{{food.imgname}}<span>585m</span></h3>
        <h4>[高新软件园] 单人美味套餐,提供免费WIFI</h4>
        <p>￥9.99 <a href="#">新客减7</a><span>已售668</span></p>
      </div>
    </li>
</template>

<script>
    export default {
      props:["food"],
        name: "Food",
      created(){
        console.log(this.food.imgpath)
      },
      updated(){

      }

    }
</script>

<style lang="scss" scoped>
    li{
      display: -webkit-flex;
      padding:.17rem .15rem;
      a{
        width: 1.3rem;
        height: 1.14rem;
        border:1px solid gray;
        margin-right: .12rem;
        img{
          width: 1.3rem;
          height: 1.14rem;
        }
      }
      div{
        h3{
          font-size: .2rem;
          line-height: .2rem;
          margin-bottom: .1rem;
          font-weight: normal;
          span{
            color: #999999;
            font-size: .15rem;
            float: right;
          }
        }
        h4{
          font-weight: normal;
          color: #999999;
          font-size: .17rem;
          line-height: .32rem;
        }
        p{
          color: #05c2ae;
          font-size: .22rem;
          a{
            width: .55rem;
            height: .17rem;
            color: #ee9632;
            line-height: .17rem;
            text-align: center;
            border:2px solid #c68d4a;
            font-size: .12rem;
          }
          span{
            font-size: .17rem;
            color:#999999;
            float: right;
            margin-top: .08rem;
          }
        }
      }
    }
  li:nth-child(even){
    border-bottom:1px solid #d8d8d8;
  }
</style>
