<template>
  <div>
    <div class="hot" v-for="p in lists">
      <class-hot-top :name="p.name" :iclass="p.iclass"></class-hot-top>
      <class-hot-con :lis="p.list"></class-hot-con>
    </div>
  </div>
</template>

<script>
    import $ from 'jquery';
    import ClassHotTop from "./ClassHotTop";
    import ClassHotCon from "./ClassHotCon";
    export default {
      name: "ClassHot",
      props:["lists"],
      components: {ClassHotCon, ClassHotTop},
      data(){
        return{
          list:[],
          arr:[]
        }
      },
      methods:{
        test3(){
          if(this.arr.length == $("ul").length){
            return
          }else{
            let arr2 = []
            $("ul").each(function (i) {
              let str = $("ul").eq(i).children().eq(11)
              if( str != "underfined"){
                let val = $("ul").eq(i).children().eq(11).html()
                arr2.push(val)
              }else{
                arr2.push("")
              }
            })
            this.arr = arr2
            console.log((this.arr))
          }
        },
        test2(x){
          $("ul").each(function (i) {
              if($("ul").eq(i).children().eq(11) != "underfined"){
                  $("ul").eq(i).children().eq(11).html("<i class='iconfont icon-jiahao'></i>")
                  $("ul").eq(i).children().eq(11).nextAll().css({"display":"none"})
            }
          })
          $("ul").each(function (i) {
            if($("ul").eq(i).children().eq(11) != "underfined"){
              $("ul").eq(i).children().eq(11).click(function () {
                console.log(i)
                $("ul").eq(i).children().eq(11).nextAll().css({display:"block"})
                $("ul").eq(i).children().eq(11).html(x[i])
              })
            }
          })
        },
      },
      updated(){
        this.test3();
        this.test2(this.arr)
      },
      watch:{
        arr:function (newVal,oddVal) {

        },
      }
    }
</script>

<style lang="scss" scoped>
    .hot{
      padding:0 .09rem;
      background-color: #f0f0f0;
    }
</style>
