<template>
  <div id="app">
    <Navbar />
    <Hero />
    <PropertyList />
    <Sales />
    <About />
    <ContactSection />
    <Footer/>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Hero from "./components/Hero.vue";
import PropertyList from "./components/PropertyList.vue";
import Sales from "./components/Sales.vue";
import About from "./components/About.vue";
import ContactSection from "./components/ContactSection.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Hero,
    PropertyList,
    Sales,
    About,
    ContactSection,
    Footer,
  },
};
</script>