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
            <div v-if="showContent">
              <p>
                We are a dedicated team of realtors with years of experience in
                the industry. Our mission is to help you find your dream home
                or investment property.
              </p>
              <p>
                Our team has access to exclusive listings, and we are committed
                to providing personalized service to ensure that you find the
                perfect property to suit your needs.
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
      aboutImage: "https://via.placeholder.com/500",
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
</style>