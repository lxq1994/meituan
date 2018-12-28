<template>
    <div class="top">
        <i :class="iclass"></i>
        <span>{{name}}</span>
         <div class="line"></div>
    </div>
</template>

<script>
    export default {
        name: "ClassHotTop",
      props:["name","iclass"],
      mounted(){
          console.log(this.iclass)
      },
      watch:{
          name:function (newVal,oldVal) {
            console.log(newVal)
          }
      }
    }
</script>

<style lang="scss" scoped>
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
</style>
