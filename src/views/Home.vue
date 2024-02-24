<template>
  <div id="home">
    <Navbar />
    <Hero />
    <About />
    <Legacy />
    <Programs />
    <Footer/>
  </div>
</template>


<script>
import Navbar from '../components/Navbar.vue';
import Hero from '../components/Hero.vue';
import About from '../components/About.vue';
import Legacy from '../components/Legacy.vue';
import Programs from '../components/Programs.vue';
import Footer from '../components/Footer.vue';

export default {
  components: {
    Navbar,
    Hero,
    About,
    Legacy,
    Programs,
    Footer,
  },
};
</script>