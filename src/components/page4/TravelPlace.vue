<template>
    <div class="place">
      <ul>
        <li v-for="p in place">
          <a href="#">{{p}}</a>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "TravelPlace",
      data(){
          return{
            list:[1,1,1,1],
            place:['三亚','厦门','大理','咖喱岛']
          }
      }
    }
</script>

<style lang="scss" scoped>
      .place{
        ul{
          display: -webkit-flex;
          li{
            flex: 1;
            font-size: .14rem;
            font-weight: bold;
            line-height: .47rem;
            background-color: #ae105b;
            text-align: center;
            a{
              color: white;
            }
          }
          li:nth-child(1){
            background-color: #fe9da4;
            color: #460004;
          }
        }
      }
</style>
