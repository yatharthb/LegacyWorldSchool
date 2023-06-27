<template>
  <div id="app">
    <Navbar />
    <PropertyList />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import PropertyList from "./components/PropertyList.vue";

export default {
  name: "App",
  components: {
    Navbar,
    PropertyList,
  },
};
</script>