<template>
    <div class="talkcon">
      <div class="person">
        <div class="pleft">
          <a href="#" class="imgs"><img :src="con.imgpath" alt=""></a>
          <div class="name">
            <a href="#">{{con.imgname}}</a>
            <div class="star">
              <ul>
                <li><img src="../../../static/image/star.jpg" alt=""></li>
                <li><img src="../../../static/image/star.jpg" alt=""></li>
                <li><img src="../../../static/image/star.jpg" alt=""></li>
                <li><img src="../../../static/image/star.jpg" alt=""></li>
                <li><img src="../../../static/image/star.jpg" alt=""></li>
              </ul>
              <span>2018-9-12</span>
            </div>
          </div>
        </div>
        <div class="pright">
          <img src="../../../static/image/caretalk.jpg" alt="">
        </div>
      </div>
      <p class="ptext">
        {{con.ptext}}
      </p>
      <div class="pic">
        <ul>
          <li v-for="i in con.talkimg"><img :src="i.imgpath" alt=""></li>
        </ul>
      </div>
    </div>
</template>

<script>
    export default {
        name: "TalkCon",
      data(){
          return{
            list:[1,1,1,1,1,1,1,1,1,1,1,1]
          }
      },
      props:["con"]
    }
</script>

<style lang="scss" scoped>
  .talkcon{
    padding:.16rem .12rem .12rem;
    .person{
      display: -webkit-flex;
      -webkit-justify-content: space-between;
      margin-bottom: .07rem;
      .pleft{
        width: 2.2rem;
        height: .54rem;
        display: -webkit-flex;
        .imgs{
          width: .42rem;
          height: 100%;
          display: -webkit-flex;
          -webkit-align-items: center;
          margin-right: .1rem;
          img{
            width: .42rem;
            height: .42rem;
          }
        }
        .name{
          display: -webkit-flex;
          flex-direction: column;
          a{
            font-size: .12rem;
            font-weight: bold;
            color:#292929;
            margin-top: .08rem;
          }
          .star{
            display: -webkit-flex;
            margin-top: .05rem;
            ul{
              display: -webkit-flex;
              li{
                width: .14rem;
                height: .14rem;
                margin-left: .03rem;
                img{
                  width: .14rem;
                  height: .14rem;
                }
              }
            }
            span{
              font-size: .12rem;
              color:#a5a5a5;
              margin-left: .09rem;
            }
          }
        }
      }
      .pright{
        width: .54rem;
        height: .54rem;
        img{
          width: .54rem;
          height: .54rem;
        }
      }
    }
    .ptext{
      color: #363636;
      font-size: .13rem;
      line-height: .22rem;
    }
    .pic{
      ul{
        display: -webkit-flex;
        -webkit-flex-wrap: wrap;
        -webkit-flex-shrink: 0;
        li{
          width: .65rem;
          height: .65rem;
          background-color: darkgreen;
          margin-bottom: .07rem;
          margin-left: .05rem;
          img{
            width: .65rem;
            height: .65rem;
          }
        }
      }
    }
  }
</style>
