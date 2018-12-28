<template>
    <div class="con">
      <ul>
        <li v-for="i in list">{{i}}</li>
      </ul>
    </div>
</template>

<script>
  import $ from 'jquery'
    export default {
      props: ["lis"],
      name: "ClassHotCon",
      methods: {
        test3(){
            let arr2 = []
            $("ul").each(function (i) {
              let val = $("ul").eq(i).children().eq(11).html()
              arr2.push(val)
            })

            this.arr = arr2
            if(this.arr.length == $("ul").length){
                if(this.arr2.length>0){
                  return
                }else{
                  this.arr2 = this.arr
                }
          }

        },
        // test(){
        //   if (this.list.length >= 12) {
        //     let htmlv = $("ul").children().eq(11).html()
        //     $("ul").children().eq(11).html("<i class='iconfont icon-jiahao'></i>")
        //     $("ul").children().eq(11).nextAll().css({display: "none"})
        //     $("ul").children().eq(11).click(function () {
        //
        //       $("ul").children().eq(11).nextAll().css({display: "block"})
        //       $("ul").children().eq(11)[0].innerHTML=htmlv
        //     })
        //   }
        // },
        uls() {
          for (let i = 0; i < 8; i++) {
            if (this.list.length >= 12) {
              $("ul").eq(i).children().eq(11).html("<i class='iconfont icon-jiahao'></i>")
              $("ul").eq(i).children().eq(11).nextAll().css({display: "none"})
              $("ul").eq(i).children().eq(11).click(function () {

                $("ul").eq(i).children().eq(11).nextAll().css({display: "block"})
                $("ul").eq(i).children().eq(11)[0].innerHTML=this.arr

              })
            }
          }
        },
        addli() {
          // console.log("add")
          let count = this.list.length % 4
          let count2 = 4 - count
          if (count == 0) {
            return
          } else {
            for (let i = 0; i < count2; i++) {
              this.list.push('')
            }
          }
        },
        hideli() {
          if (this.list.length >= 12) {
            $('ul li')[11].innerHTML = "<i class='iconfont icon-jiahao'></i>"
            $('ul li').eq(11).nextAll().css({display: "none"})
          }
        },
        showli() {

        }
      },
      data() {
        return {
          list: [],
          arr:[],
          arr2:[]
        }
      },

      created() {
        this.list = this.lis
        this.addli()

      },
      mounted() {
        // this.test3()
        // this.uls(this.list)

      },
      beforeUpdate(){

      },
      updated(){

      },
     watch:{
        arr:function(newVal,oldVal){

        }
     }
    }
</script>

<style lang="scss" scoped>
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
</style>
