<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-select></city-select>
    <city-location></city-location>
    <city-native-con></city-native-con>
  </div>

</template>

<script>
    import CityHeader from "../components/page3/CityHeader";
    import CitySearch from "../components/page3/CitySearch";
    import CitySelect from "../components/page3/CitySelect";
    import CityLocation from "../components/page3/CityLocation";
    import CityNativeCon from "../components/page3/CityNativeCon";

    export default {
        name: "page3",
      components: {CityNativeCon, CityLocation, CitySelect, CitySearch, CityHeader}
    }
</script>

<style scoped>

</style>
