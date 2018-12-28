<template>
  <div>
    <my-header></my-header>
    <my-order></my-order>
    <my-money-list></my-money-list>
    <mei-list></mei-list>
    <my-house></my-house>
  </div>

</template>

<script>
    import MyHeader from "../components/page5/MyHeader";
    import MyOrder from "../components/page5/MyOrder";
    import MyMoneyList from "../components/page5/MyMoneyList";
    import MeiList from "../components/page5/MeiList";
    import MyHouse from "../components/page5/MyHouse";
    export default {
        name: "page5",
      components: {MyHouse, MeiList, MyMoneyList, MyOrder, MyHeader}
    }
</script>

<style scoped>

</style>
