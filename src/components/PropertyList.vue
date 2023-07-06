<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col-12">
        <h2>Property Listings</h2>
      </div>
      <div
        v-for="(property, index) in properties"
        :key="index"
        class="col-md-4 mt-4"
      >
        <div class="card h-100 property-card">
          <div class="card-img" :style="`background-image: url(${property.image});`"></div>
          <div class="card-info">
            <h5 class="card-title">{{ property.title }}</h5>
            <p class="card-text">{{ property.description }}</p>
          </div>
          <div class="card-footer">
            <small class="text-muted">{{ property.price }}</small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PropertyList",
  data() {
    return {
      properties: [
        {
          title: "Luxury Villa",
          image: "im2.png",
          description: "Beautiful luxury villa in a prime location.",
          price: "$1,200,000",
        },
        {
          title: "Modern Apartment",
          image: "im3.png",
          description: "Stunning modern apartment with city views.",
          price: "$450,000",
        },
        // Add more properties as needed
      ],
    };
  },
};
</script>

<style scoped>
.property-card {
  position: relative;
  overflow: hidden;
  font-family: "Times New Roman", Times, serif; /* Update this to the desired luxurious font */
}

.card-img {
  height: 200px; /* Adjust the height based on your preference */
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.card-info {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.card-title {
  font-size: 24px;
  margin-bottom: 10px;
}

.card-text {
  display: none;
}

.card-info:hover .card-text {
  display: block;
}

.card-footer {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
}
</style>