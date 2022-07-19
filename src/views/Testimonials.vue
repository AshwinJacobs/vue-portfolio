<template>
  <div class="Testimonials">
    <h1 class="testimonials-heading">MY TESTIMONIALS</h1>
    <div v-for="test in testimonials" :key="test.id">
      <img src="" />
      <div class="text-light">
        <div class="container">
  <div class="flex-grid-thirds">
    <div class="col">
      <a href="#/" class="card card-1">
        <h3 class="card-heading">{{ test.name }}</h3>
        <p class="card-content">  {{ test.quote }}</p>
        <span class="card-cta">{{ test.email }}</span>
      </a>
    </div>
        
       
        {{ test.occupation }}
       
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      testimonials: [
        {
          id: 1,
          name: "Ashwin Jacobs",
          img: "",
          email: "ashwin.dean21@gmail.com",
          occupation: "Colleague",
          quote:
            "I would like to formally recommend Hilmi Mallick for his consistent work. He is time driven and helps his peers in class.His always focused when doing his work and keeps track of his steps for planning a website. I know that Hilmi Mallick has the potential and skills to be an excellent addition to the company.",
        },
        {
          id: 2,
          name: "Lihle Goliath",
          img: "",
          email: "lihlegoliath2@gmail.com",
          occupation: "Colleague",
          quote:
            "Hilmi Mallick,A down to earth person with great ambitions, also supporting him is his hardwork in all aspects of his life. I think with his dedication he will better himself and people around him.",
        },
        {
          id: 3,
          name: "Lunga Booi",
          img: "",
          email: "lungalucasbooi@gmail.com",
          occupation: "Colleague",
          quote:
            "Hilmi is a curious person, he'll search the information from its core. He breaks the complex problem into its simplest form. He has great analytical skills.",
        },
        {
          id: 4,
          name: "Tshimologo King Mabena",
          img: "",
          email: "tshimologokingmabena@gmail.com",
          occupation: "Colleague",
          quote:
            "Hilmi is a very energetic, hardworking, disciplined and talented young man. He strives to improve himself consistently and those he comes into contact with. He is kind, polite, humble and very attentive to every detail. He has good intuition and sense of awareness of all tasks at hand.",
        },
        {
          id: 5,
          name: "Carla Lawrence",
          img: "",
          email: "carlaamylawrence@gmail.com",
          occupation:
            "Hilmi Malllick is an exceptional web developer. He is laser focused, highly skilled and determined to take on any task given to him. His ambition bleeds into all aspects of his life both personal and professional. It is a pleasure to have worked alongside him and I can, without a doubt, say that Hilmi would be the perfect addition to any team.",
        },
        // { id: 6, name: "", img: "", email: "", occupation: "", quote: "" },
      ],
    };
  },
};
</script>
<style></style>
