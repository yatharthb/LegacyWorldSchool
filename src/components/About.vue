<template>
  
  <div class="about py-5" id="about">
    <div class="container">
      <transition name="fade">
        <h2 v-if="showTitle" class="text-center mb-4">About Us</h2>
      </transition>
      <div class="row">
        <div class="col-md-6">
          <transition name="slide" mode="out-in">
            <img
              v-if="showImage"
              :src="aboutImage"
              class="img-fluid rounded"
              alt="About us"
            />
          </transition>
        </div>
        <div class="col-md-6">
          <transition name="slide" mode="out-in">
           <div v-if="showContent" class="about-content">
  <div class="realtor-name"></div>
  <p class="about-text">
    At Legacy World School we're dedicated to fostering joyful individuals. Our mission is to support children's holistic development—mind, body, and spirit—through a comprehensive curriculum that stimulates every facet of their being. Our educational philosophy celebrates children as naturally inquisitive, capable of profound thinking, and adept at making connections.
<br>
<br>
    We reject the notion of passive learning and instead champion active engagement, providing diverse avenues for self-expression. Drawing inspiration from global early childhood education standards, we prioritize instilling grit, empathy, collaboration, and a growth mindset in children from the outset.
    <br>
    <br>
    Central to our core values is recognizing children's fundamental right to play. We believe that to unlock their true potential, children require an environment that sparks curiosity, encourages exploration, and nurtures a sense of wonder. Through our learning centers, we aim to create spaces where children eagerly anticipate each day, and where educators are empowered to profoundly impact a child's journey.
  </p>
</div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      showTitle: false,
      showImage: false,
      showContent: false,
      aboutImage: "about.png",
    };
  },
  mounted() {
    setTimeout(() => {
      this.showTitle = true;
      this.showImage = true;
      this.showContent = true;
    }, 500);
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 1s;
}
.slide-enter,
.slide-leave-to {
  transform: translateY(50px);
}

.about {
  background-color: #f9f9f9; /* Add a subtle background color for a luxurious feel */
}

h2 {
  font-family: "Playfair Display", serif;
}

.realtor-name {
  font-family: "Cormorant Garamond", serif; /* Update the font-family to Cormorant Garamond */
  font-size: 36px; /* Increase the font-size */
  color: #d4af37;
  margin-bottom: 20px;
}

.about-text {
  font-family: "Cormorant Garamond", serif; /* Update the font-family to Cormorant Garamond */
  font-size: 20px; /* Increase the font-size */
  line-height: 1.6;
}

.about-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
}
</style>