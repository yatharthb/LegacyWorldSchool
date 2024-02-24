<template>
  <div id="contact">
    <ContactNavbar />
    <div style="margin-top: 35px;"> 
    <ContactSection />
       </div>
    <Footer/>
  </div>
</template>

<script>
import ContactNavbar from '../components/ContactNavbar.vue';
import ContactSection from '../components/ContactSection.vue';
import Footer from '../components/Footer.vue';

export default {
  components: {
    ContactNavbar,
    ContactSection,
    Footer,
  },
};
</script>