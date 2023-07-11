<template>
  <footer class="luxury-footer">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <img src="logo.png" alt="Realtor Logo" class="logo" />
          <div class="social-links">
            <a href="#" class="social-link"><i class="fab fa-facebook-f"></i></a>
            <a href="#" class="social-link"><i class="fab fa-instagram"></i></a>
            <a href="#" class="social-link"><i class="fab fa-youtube"></i></a>
            <a href="#" class="social-link"><i class="fab fa-linkedin-in"></i></a>
          </div>
        </div>
        <div class="col-md-4">
          <h4 class="footer-title">Sitemap</h4>
          <ul>
            <li><a href="#">Home Search</a></li>
            <li><a href="#">Become a Luxury Realtor Group Insider</a></li>
          </ul>
        </div>
        <div class="col-md-4">
          <h4 class="footer-title">Contact</h4>
          <p>
            123 Luxury Avenue<br />
            San Diego, CA 12345<br />
            Real Estate License Number: 1234567<br />
            Phone: (123) 456-7890<br />
            Email: info@luxuryrealtor.com
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <p class="disclaimer">
            This website is provided for informational purposes only. It is not
            intended to be legal, financial, or tax advice. Please consult a
            qualified professional for assistance in these areas.
          </p>
          <p class="copyright">
            &copy; 2023 Luxury Realtor Group. All rights reserved. |
            <a href="#">Privacy Policy</a>
          </p>
          <p class="credits">
            Designed and developed by
            <a href="https://www.luxurypresence.com/" target="_blank"
              >Luxury Presence</a
            >
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
</style>