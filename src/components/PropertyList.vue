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
        <div class="card h-100">
          <img :src="property.image" class="card-img-top" alt="property image" />
          <div class="card-body">
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
          image: "https://via.placeholder.com/150",
          description: "Beautiful luxury villa in a prime location.",
          price: "$1,200,000",
        },
        {
          title: "Modern Apartment",
          image: "https://via.placeholder.com/150",
          description: "Stunning modern apartment with city views.",
          price: "$450,000",
        },
        // Add more properties as needed
      ],
    };
  },
};
</script>