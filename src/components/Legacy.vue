<template>

  <div class="about py-5" id="legacy">
    <div class="container">
      <transition name="fade">
        <h2 v-if="showTitle" class="text-center mb-4">True Legacy</h2>
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
    "When educators perceive children as competent and capable, the learning environment transforms into a realm of wonder, excitement, and joy for both the child and the educator."
    <br>
    <br>
    The Legacy World School  aims to establish a robust foundation for early learning within a nurturing, play-based, and academically enriching setting.
<br>
<br>
    Our educational philosophy draws inspiration from the Reggio Emilia Approach, the Montessori Method, and the Creative Curriculum. Anchored in four guiding principles, our holistic child development framework emphasizes on 4 guiding principles and is focuses on the development of 8 key foundational skills in children.
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
      aboutImage: "legacy.png",
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