<template>
  <footer class="luxury-footer">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <!-- Embed Google Maps iframe here -->
          <div class="mini-map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3627.6679038750704!2d73.7028196!3d24.600654799999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e500258df1ef%3A0x347cc7c0c558937!2sLegacy%20world%20school!5e0!3m2!1sen!2sin!4v1708364543019!5m2!1sen!2sin" width="100%" height="250" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
        <div class="col-md-4">
         
          <div class="social-links">
            <a href="#" class="social-link"><i class="fab fa-facebook-f"></i></a>
            <a href="#" class="social-link"><i class="fab fa-instagram"></i></a>
            <a href="#" class="social-link"><i class="fab fa-youtube"></i></a>
            <a href="#" class="social-link"><i class="fab fa-linkedin-in"></i></a>
          </div>
        </div>
        
        <div class="col-md-4">
          <h4 class="footer-title">Contact</h4>
          <p>
            Legacy World School
            
            <br />
            Legacy Road, Near R.K. circle<br />
            Udaipur 313001<br />
           
            Email:  lws.udaipur@gmail.com
            Phone:  +91 766547108 <br> +91 9636352535
            
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          
          <p class="copyright">
            &copy; 2024 Legacy World School. All rights reserved. 
            <a href="#">Privacy Policy</a>
          </p>
          
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style scoped>
.luxury-footer {
  background-color: #222;
  color: #fff;
  font-family: 'Helvetica', sans-serif;
  padding: 40px 0;
}
.logo {
  max-width: 150px;
  margin-bottom: 20px;
}
.social-links {
  display: flex;
}
.social-link {
  color: #fff;
  font-size: 24px;
  margin-right: 10px;
  text-decoration: none;
}
.footer-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 15px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li a {
  color: #fff;
  text-decoration: none;
}
li a:hover {
  text-decoration: underline;
}
.disclaimer,
.copyright,
.credits {
  font-size: 14px;
  text-align: center;
  margin-bottom: 5px;
}
a {
  color: #fff;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}

  .mini-map {
    margin: 20px 0; /* Adjust margin as needed */
  }

  /* You can add additional CSS rules to style the iframe as needed */
  iframe {
    border: none; /* Removes the default border around iframes */
    /* Other styles if necessary */
  }
</style>