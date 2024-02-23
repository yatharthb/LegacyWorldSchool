<template>
  <div class="programs py-5" id="programs">
    <div class="container">
      <transition name="fade">
        <h2 v-if="showTitle" class="text-center mb-4">Our Staged Growth Plan</h2>
      </transition>
      <div class="program-path">
        <transition-group name="slide" mode="out-in">
          <div v-if="showContent" class="program-stage" v-for="stage in stages" :key="stage.key">
            <div class="stage-icon-container">
              <img :src="stage.icon" class="stage-icon" :alt="stage.title + ' icon'"/>
            </div>
            <div class="stage-content">
              <h3>{{ stage.title }}</h3>
              <p>{{ stage.description }}</p>
            </div>
          </div>
        </transition-group>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Programs",
  data() {
    return {
      showTitle: false,
      showContent: false,
      stages: [
        {
          key: 'joey',
          title: 'JOEY - Age 2 - 3 years',
          description: 'Like the baby kangaroos, Children feel safe and happy when they feel the presence of warm embrace of a caretaker. The JOEY room is specially designed keeping in mind the needs of young children. The MAD activities (music, art and dance) keep them engaged and thrilled everyday.',
          icon: 'joey.png',
        },
        {
          key: 'fawn',
          title: 'FAWN - Age 3 - 4 years',
          description: 'As the children moving out of Babyhood  into Childhood, they are inquisitive, energetic and playful like a baby deer. The PED approach ie Play- Explore- Discover is adopted in the play rooms so that children learn actively while playing so that experiencing leads teaching. The playrooms have sensory gyms, numeracy and literacy station,art and design station and toysmania corners.',
          icon: 'kla.png',
        },
        {
          key: 'kindie',
          title: 'KINDIE 1 & 2 - Age 4 - 6 years ',
          description: 'The children of this age group learn from their surroundings and experiences.The Kindie station will provide Opportunities to children to develope their literacy and numeracy skills as well as to work in enhancing their ability to work in teams and to improve communication and interaction.Specially designed enhanced STEM labs will enhance their skills and knowledge of Science, Technology, Engineering, Arts and Mathematics.',
          icon: 'eagle.png',
        },
        {
          key: 'tiger',
          title: 'Grades 1 & 2 - Tigers and Leopards ',
          description: 'At Legacy Grade 1 and 2 kids roar with energy like playful tigers, pouncing onto new knowledge with curiosity and enthusiasm. Their enthusiasm often leads them to explore every nook and cranny of their environment, just like curious cubs exploring their territory. Meanwhile, some kids embody the stealth and grace of leopards, quietly observing before making their moves, showcasing a blend of keen observation and agility in their learning journey. Together, they create a vibrant ecosystem of learning, where children bring out their unique traits contributing to the dynamic nature of the classroom jungle.',
          icon: 'tiger.png',
        },
        {
          key: 'dolphin',
          title: 'Grades 3 to 5 - Dolphins ',
          description: 'In the vast sea of education, students in Grades 3 to 5 are like intrepid explorers, embarking on a journey of discovery and learning. Their classrooms resonate with the sounds of laughter and curiosity, mirroring the playful energy of a pod of dolphins. Just as dolphins exhibit intelligence and adaptability, these young explorers eagerly embrace new challenges, navigating the currents of knowledge with enthusiasm and a thirst for exploration. Together, they form bonds of friendship and cooperation, akin to the tight-knit social structures observed among dolphin communities. With their innate curiosity and passion for discovery, these students embody the spirit of the school, bringing a sense of wonder and joy to their academic adventures.',
          icon: 'dolphin.png',
        },

        // ... other stages
      ],
    };
  },
  mounted() {
    setTimeout(() => {
      this.showTitle = true;
      this.showContent = true;
    }, 500);
  },
};
</script>


<style scoped>
/* You can reuse the same transition styles */
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

/* Reuse the same background color for consistency */
.programs {
  background-color: #f9f9f9;
}
  .program-path {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .program-stage {
    display: flex;
    align-items: center;
    background-color: #fff; /* Default background */
    border-radius: 10px;
    margin-bottom: 20px;
    padding: 15px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s ease;
  }

  .program-stage:nth-child(odd) {
    background-color: #fff; /* Shade for odd stages */
  }

  .program-stage:hover {
    background-color: #e7e7e7; /* Hover effect */
  }

  .stage-icon-container {
    flex: 0 0 30%; /* Set the width to 30% of its parent */
    display: flex;
    justify-content: center; /* Center the icon horizontally */
    align-items: center; /* Center the icon vertically */
    text-align: center; /* Ensures that the icon centers in case it's an inline element */
    padding: 10px; /* Optional padding */
  }

  .stage-icon {
    max-width: 100%; /* Icon width will be 100% of the container, which is 30% of the parent width */
    height: auto; /* Height will adjust automatically */
  }

  .stage-content {
    flex-grow: 1;
    padding: 10px; /* Adjust padding as necessary */
  }

/* Reuse the same font styles for consistency */
h2 {
  font-family: "Playfair Display", serif;
}

.programs-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
}

.programs-text,
h3 {
  font-family: "Cormorant Garamond", serif;
  font-size: 20px;
  line-height: 1.6;
}

/* You can add or adjust styles here to fit the content of Programs.vue */
</style>