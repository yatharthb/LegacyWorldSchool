<template>
  <section class="contact-section">
    <div class="container">
      <h2 class="section-title">Get In Touch</h2>
      <p class="section-subtitle">
        To schedule a showing or ask questions about buying or selling, please
        contact me using the form below.
      </p>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" id="name" v-model="formData.name" required />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="formData.email" required />
        </div>
        <div class="form-group">
          <label for="phone">Phone Number</label>
          <input type="tel" id="phone" v-model="formData.phone" required />
        </div>
        <div class="form-group">
          <label for="message">Message</label>
          <textarea id="message" v-model="formData.message" required></textarea>
        </div>
        <!-- Captcha component would go here -->
        <button type="submit">Submit</button>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactSection',
  data() {
    return {
      formData: {
        name: '',
        email: '',
        phone: '',
        message: '',
      },
    };
  },
  methods: {
    handleSubmit() {
      // Form submission logic (sending the form data to an email)
    },
  },
};
</script>

<style scoped>
.contact-section {
  padding: 60px 0;
}
  h2 {
  font-family: "Playfair Display", serif;
}
.section-title {
  font-size: 32px;
 
  text-align: center;
  margin-bottom: 20px;
}
.section-subtitle {
  font-size: 18px;
  text-align: center;
  margin-bottom: 40px;
}
.form-group {
  margin-bottom: 20px;
}
label {
  display: block;
  margin-bottom: 5px;
}
input,
textarea {
  width: 100%;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
textarea {
  min-height: 150px;
  resize: vertical;
}
button {
  display: inline-block;
  background-color: #222;
  color: #fff;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
button:hover {
  background-color: #444;
}
</style>