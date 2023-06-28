<template>
  <section class="hero">
    <div class="hero-content">
      <h1>Welcome to Realtor</h1>
      <p>Find your dream property today</p>
    </div>
  </section>
</template>

<script>
export default {
  name: "Hero",
};
</script>

<style scoped>
.hero {
  position: relative;
  width: 100%;
  height: 100vh;
  background-image: url('bg.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-content {
  text-align: center;
  color: #ffffff;
}

.hero-content h1 {
  font-size: 4rem;
  margin-bottom: 1rem;
}

.hero-content p {
  font-size: 1.5rem;
}
</style>