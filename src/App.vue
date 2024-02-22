<template>
  <div id="app">
    <Navbar />
    <Hero />
     <About />
    <Legacy />
    <Programs />
    <ContactSection />
    <Footer/>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Hero from "./components/Hero.vue";
import Programs from "./components/Programs.vue";
import Legacy from "./components/Legacy.vue";
import About from "./components/About.vue";
import ContactSection from "./components/ContactSection.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Hero,
    About,
    Legacy,
    Programs,
    ContactSection,
    Footer,
  },
};
</script>