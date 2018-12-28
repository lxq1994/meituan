<template>
  <div class="moreitem">
    <item-list :item="alllist" :item2="alllist2"></item-list>
  </div>

</template>

<script>
    import ItemList from "./ItemList";
    export default {
      name: "AllList",
      components: {ItemList},
      props:["alllist","alllist2"]
    }
</script>

<style lang="scss" scoped>
    .moreitem{
      overflow-y: hidden;
      overflow-x: auto;
      .uls{
          display: -webkit-flex;
          padding-top:.2rem;
          width: 199%;
          height: 2rem;
          overflow-x: auto;
          overflow-y: hidden;
          -webkit-justify-content: space-around;
          flex-wrap: wrap;
          -webkit-flex-shrink: 0;
          li{
            display: -webkit-flex;
            flex-direction: column;
            -webkit-align-items: center;
            -webkit-flex-shrink: 0;
            a{
              display: -webkit-flex;
            }
            a:first-child{
              width: .59rem;
              height: .59rem;

              img{
                width: .59rem;
                height: .59rem;
              }
            }
            a:last-child{
              display: block;
              width: .686rem;
              text-align: center;
              font-size: .15rem;
              color: black;
            }
          }
        }
      }
</style>
