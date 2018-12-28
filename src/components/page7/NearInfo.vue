<template>
    <div class="infocon">
      <p><span>￥1</span><span>定制效果图+到店礼+免费车接</span></p>
      <p><span>门售价：￥2248</span><span>已售1</span></p>
    </div>

</template>

<script>
    export default {
        name: "NearInfo"
    }
</script>

<style lang="scss" scoped>


    .infocon{
      height: .69rem;
      margin-left: .1rem;
      p:first-child{
        text-align: center;
        font-size: .13rem;
        line-height: .47rem;
        span:first-child{
          color: #1eb3a2;
        }
        span:last-child{
          color: #686868;
        }
      }
      p:last-child{
        color: #b9b9b9;
        font-size: .1rem;
        padding-right: .1rem;
        text-indent: 5px;
        span:first-child{
          float: left;
        }
        span:last-child{
          float: right;
        }
      }
    }

</style>
