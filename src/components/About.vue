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
  <div class="realtor-name">Shrithi Agarwal</div>
  <p class="about-text">
    Shrithi Agarwal, a passionate, confident real estate agent in California, leverages her background in corporate law and love for home décor and architecture. She specializes in residential real estate, and has built trust-based relationships with diverse clients, from first-time home buyers to high-profile veterans. Operating largely by referral, Shrithi’s service extends beyond transactions, focusing on clients’ best interests. Affiliated with the Realtor Association of San Diego and National Association of Realtors, she and her dedicated team actively work with buyers and sellers at all price levels.
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