<template>
  <nav class="navbar navbar-expand-lg" :class="{ 'scrolled': scrolled }">
    <div class="container">
      <a class="navbar-brand" href="#">
        <img src="logo.png" alt="Realtor logo" class="logo" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent" ref="navbarCollapse">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" href="#about" @click="collapseNavbar">About Us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#legacy" @click="collapseNavbar">True Legacy</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#programs" @click="collapseNavbar">Programs</a>
        </li>
        <li class="nav-item">
          <button class="contact-btn" :class="{ 'scrolled': scrolled }" @click="collapseNavbar">Admissions</button>
        </li>
      </ul>
    </div>
    </div>
  </nav>
</template>


<script>
export default {
  name: "Navbar",
  data() {
    return {
      scrolled: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    collapseNavbar() {
      // Check if the screen width is less than or equal to 768 pixels
      if (window.innerWidth <= 768) {
        // Check if the navbar collapse is visible
        if (this.$refs.navbarCollapse.classList.contains('show')) {
          const bsCollapse = new bootstrap.Collapse(this.$refs.navbarCollapse, {
            toggle: false
          });
          bsCollapse.hide();
        }
      }
    },
    handleScroll() {
      this.scrolled = window.scrollY > 0;
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap');

.navbar {
  background-color: transparent;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.navbar.scrolled {
  background-color: #ffffff;
}

.logo {
  height: 80px; /* Increase the logo size */
  width: auto;
}

.navbar-brand,
.nav-link {
  color: #ffffff;
  font-family: 'Playfair Display', serif;
  transition: color 0.3s ease;
}

.navbar.scrolled .navbar-brand,
.navbar.scrolled .nav-link {
  color: #000000; /* Black color when scrolled */
}

.nav-link:hover {
  color: #f73e41; /* red color */
}

.navbar.scrolled .nav-link:hover {
  color: #f73e41; /* red color when scrolled */
}

.navbar-toggler-icon {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3E%3Cpath stroke='rgba(255, 255, 255, 1)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
}

.navbar.scrolled .navbar-toggler-icon {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3E%3Cpath stroke='rgba(0, 0, 0, 1)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
}
  
.contact-btn {
  font-family: 'Playfair Display', serif;
  font-size: 1rem;
  font-weight: 400;
  padding: 0.5rem 1.5rem; /* Increase right padding */
  margin-left: 1rem; /* Add left margin */
  border: none;
  border-radius: 0.25rem;
  background-color: #ffffff;
  color: #f73e41; /* red text */
  transition: background-color 0.3s ease, color 0.3s ease;
}

.contact-btn:hover {
  background-color: #f73e41; /* red background */
  color: #ffffff; /* White text */
}

.contact-btn.scrolled {
  background-color: #f73e41; /* Gold background */
  color: #ffffff; /* red text */
}

.contact-btn.scrolled:hover {
  background-color: #ffffff; /* White background */
  color: #f73e41; /* red text */
}
  @media (max-width: 768px) {
    .navbar {
      background-color: #ffffff; /* Set the navbar background to white for mobile */
    }

    .navbar-toggler-icon {
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3E%3Cpath stroke='rgba(0, 0, 0, 1)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E"); /* Ensure the toggler icon is visible against a white background */
    }

    .logo {
      height: 30px; /* Adjusted logo size for mobile screens */
    }

    .navbar-brand,
    .nav-link {
      color: #000000; /* Set text color to black for better contrast against the white background */
    }

    .navbar-nav {
      margin-top: 15px;
    }

    .nav-item {
      margin-bottom: 5px; /* Add space between menu items */
    }

    .contact-btn {
      padding: 0.5rem 1rem; /* Adjust button padding for smaller screens */
      font-size: 0.9rem; /* Adjust font size for smaller screens */
      margin: 0 0 5px; /* Adjust margin for smaller screens */
      display: block; /* Make the button take the full width */
      width: 100%; /* Make sure button stretches to full width */
      background-color: #f73e41; /* Set button background color for better visibility */
      color: #ffffff; /* Set button text color for better visibility */
    }
  }
</style>