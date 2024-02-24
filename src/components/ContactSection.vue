<template>
  <section class="contact-section">
    <div class="container">
      <h2 class="section-title">Get In Touch</h2>
      <p class="section-subtitle">
        To schedule a visit or to ask questions about admissions, please
        contact us using the form below.
      </p>
      <div v-if="!submitted">
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="name">Child's Full Name</label>
          <input type="text" id="name" v-model="formData.name" required />
        </div>

        <!-- Child's Date of Birth field -->
        <div class="form-group">
          <label for="dob">Child's Date of Birth</label>
          <input type="date" id="dob" v-model="formData.dob" required />
        </div>

        <!-- Father's Name field -->
        <div class="form-group">
          <label for="father-name">Father's Name</label>
          <input type="text" id="father-name" v-model="formData.fatherName" required />
        </div>

        <!-- Mother's Name field -->
        <div class="form-group">
          <label for="mother-name">Mother's Name</label>
          <input type="text" id="mother-name" v-model="formData.motherName" required />
        </div>

        <!-- Select Program dropdown -->
        <div class="form-group">
          <label for="program">Select Program</label>
          <select id="program" v-model="formData.program" required>
            <option value="" disabled selected>Select one</option>
            <!-- Placeholder options -->
            <option value="placeholder1">JOEY - Age 2 - 3 years</option>
            <option value="placeholder2">FAWN - Age 3 - 4 years</option>
            <option value="placeholder3">KINDIE 1 & 2 - Age 4 - 6 years</option>
            <option value="placeholder4">Grades 1 & 2 - Tigers and Leopards</option>
            <option value="placeholder5">Grades 3 to 5 - Dolphins</option>
          </select>
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
          <label for="message">Message (Optional)</label>
          <textarea id="message" v-model="formData.message" required></textarea>
        </div>

        <!-- Captcha component would go here -->

        <button type="submit">Submit</button>
      </form>
        </div>
      <div v-if="submitted">
        <!-- This will display when submitted is true -->
        <p>Thank you for getting in touch! We have received your message and will get back to you shortly.</p>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios';
import emailjs from '@emailjs/browser';

export default {
  name: 'ContactSection',
  data() {
    return {
      formData: {
        name: '',
        dob: '',
        fatherName: '',
        motherName: '',
        program: '',
        email: '',
        phone: '',
        message: '',
      },
       submitted: false,
    };
  },
  mounted() {
    emailjs.init("iBcgTqbpMztJXGMFh"); // Replace 'YOUR_USER_ID' with your actual user ID from EmailJS
  },
      methods: {
      handleSubmit() {
        // Convert the formData to the format expected by your EmailJS template
        const templateParams = {
          child_name: this.formData.name,
          child_dob: this.formData.dob,
          father_name: this.formData.fatherName,
          mother_name: this.formData.motherName,
          selected_program: this.formData.program,
          user_email: this.formData.email,
          user_phone: this.formData.phone,
          message_html: this.formData.message,
        };

    , templateParams)
      .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
         this.submitted = true;
          // Optionally reset the form or give user feedback
      }, (error) => {
          console.log('FAILED...', error);
          // Handle the error state
          // Optionally give user feedback
      });
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