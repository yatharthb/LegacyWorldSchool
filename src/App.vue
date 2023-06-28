<template>
  <div id="app">
    <Navbar />
    <Hero />
    <PropertyList />
    <About />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Hero from "./components/Hero.vue";
import PropertyList from "./components/PropertyList.vue";
import About from "./components/About.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Hero,
    PropertyList,
    About,
  },
};
</script>