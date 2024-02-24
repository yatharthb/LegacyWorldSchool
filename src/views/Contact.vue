<template>
  <div id="contact">
    <Navbar />
    <ContactSection />
    <Footer/>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import ContactSection from '../components/ContactSection.vue';
import Footer from '../components/Footer.vue';

export default {
  components: {
    Navbar,
    ContactSection,
    Footer,
  },
};
</script>