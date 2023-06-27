<template>
  <div id="app">
    <Navbar />
    <PropertyList />
    <About />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import PropertyList from "./components/PropertyList.vue";
import About from "./components/About.vue";

export default {
  name: "App",
  components: {
    Navbar,
    PropertyList,
    About,
  },
};
</script>