<template>
    <div class="native">
        <span>{{lists.name}}</span>
      <ul>
        <li v-for="p in lists.list">{{p}}</li>
      </ul>
    </div>
</template>

<script>
    export default {
      name: "CityNative",
      data(){
        return{

        }
      },
      props:["lists"],
      methods:{
          lis(){
            let lis  = document.getElementsByTagName('li')
            lis.onmouseover = function () {

            }
          }
      },
      updated(){
            console.log(this.lists.name)

      }
    }
</script>

<style lang="scss" scoped>
      .native{
        padding:0 .37rem .2rem .12rem;
        background-color: #f4f4f4;
        span{
          display: block;
          color: #8b8b8b;
          font-size: .14rem;
          margin-bottom: .12rem;
        }
        ul{
          display: -webkit-flex;
          -webkit-flex-wrap: wrap;
          /*-webkit-justify-content: space-between;*/
          li{
            width: 1rem;
            height: .4rem;
            background-color: white;
            text-align: center;
            line-height: .4rem;
            border:1px solid #d5d5d5;
            border-radius: .03rem;
            flex-shrink: 0;
            margin-bottom: .1rem;
            color: #2e2e2e;
            font-size: .15rem;
            margin-right: .1rem;
            &:hover{
              background-color: #f0f0f0;
              border-color: gray;
            }
          }
          li:nth-child(3n){
            margin-right: 0;
          }
        }
      }
</style>
