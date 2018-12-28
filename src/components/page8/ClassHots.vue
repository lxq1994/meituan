<template>
  <div>

  </div>
</template>

<script>
    export default {
      name: "ClassHots",
      props:["lists"],
      watch:{
        lists:function (newVal,oldVal) {
          console.log(newVal)
          console.log(newVal.name)
          console.log(newVal.list)
        }
      }

    }
</script>

<style lang="scss" scoped>
    .hots{
      .top{
        height: .4rem;
        display: -webkit-flex;
        -webkit-align-items: center;
        span{
          color: #a4a4a4;
          font-size: .14rem;
          margin-left: .07rem;
          margin-right: .19rem;
        }
        .line{
          height: 2px;
          background-color: #e5e5e5;
          -webkit-flex: 1;
        }
      }
      .con{
        background-color: white;
        ul{
          display: -webkit-flex;
          -webkit-flex-wrap: wrap;
          li{
            width: .88rem;
            height: .43rem;
            border-top:1px solid #e5e5e5;
            border-left: 1px solid #e5e5e5;
            line-height: .43rem;
            text-align: center;
            color:#707070;
            font-size: .12rem;
            -webkit-flex-shrink: 0;
          }
        }
      }
    }
</style>
