<template>
  <div v-for="test in testimonials" :key="test.id">
    <div class="row">
      <div class="col-12">
        <ul class="cards flex-container">
          <li class="flex-item">
            <div class="card">
              <h3>{{ test.name }}</h3>
              <p>"{{ test.quote }}"</p>
              <p>{{ test.month }} | {{ test.year }}</p>
            </div>
          </li>
        </ul>
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
          name: "Tyla Johannes",
          year: "2017",
          month: "Jan 21",
          quote:
            "Ashwin Jacobs, showed me true dedication, passion and willingness to assist, when I had difficulties with IT related issues. He went above and beyond to fix these issues and provided a professional service.",
        },
        {
          id: 2,
          name: "Marshalino Jankowski",
          year: "2018",
          month: "April 08",
          quote:
            "Ashwin's code speaks for itself being a brilliant future coder with a never give up attitude. He is both helpful and caring and has helped everyone who is in need. Paired with his amazing ideas and coding ability, he is assured to be an asset to any workplace and team.",
        },
        {
          id: 3,
          name: "Keenan Rhoode",
          year: "2019",
          month: "02 March",
          quote:
            "Ashwin Jacobs the solution to all my IT related problems my go to guy so far through all the years that I've known him he has never said no to when I have asked for assistance with my laptop or computer setup. He is a driven hard working determined and doesn't give up, meaning he will not stop until he finds the source of the problem and a solution that solve it as well. He not only assist's me in solving my IT related problems but explains what he did how he did it and how to avoid this problem in the future which I think is a characteristics people lack ",
        },
        {
          id: 4,
          name: "Zoë Van Der Schyff",
          year: "2020",
          month: "April 26",
          quote:
            "Ashwin Jacobs is a talented guy with many skills . He works hard and is consistently striving to maintain his focus and to achieve his goals in life",
        },
        {
          id: 5,
          name: "Carla Lawrence",
          year: "2021",
          month: "May 21",
          quote:
            "Ashwin Jacobs is an excellent web developer. His approach and attitude towards his work is praise worthy . Ashwin is definitely an asset to any team or organization because of his reliability, analytical skills and professionalism.",
        },
        {
          id: 6,
          name: "Natheerah",
          year: "2022",
          month: "May 10",
          quote:
            "Ashwin is very passionate about what he does and is always able to help people in need. He's very approachable and has an amazing personality",
        },
        {
          id: 7,
          name: "Jason Wandrag",
          year: "2022",
          month: "May 22",
          quote:
            "Ashwin is one of the most dedicated students I have ever had the pleasure of teaching. He always has a positive attitude and shows up to class every day. If he needs extra assistance, I am more than happy to help him out and answer any questions he may have. His assignments are always completed on time, if not earlier!",
        },
      ],
    };
  },
};
</script>
<style scoped>
.flex-container {
  position: relative;
  z-index: 1;
}

/* Card styles */

.cards {
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: center;
}

.card {
  max-width: 53rem;
  position: relative;
  padding: 1rem;
  background-color: #060c21;
  color: #fff;
  align-items: center;
}

.card::before {
  content: "";
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  z-index: -2;
}

.card::after {
  content: "";
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  z-index: -3;
  filter: blur(10px);
}

.card:nth-child(3n + 1)::before,
.card:nth-child(3n + 1)::after {
  background: linear-gradient(235deg, #ff005e, #060c2158, #004cff);
}

h3 {
  margin-bottom: 1rem;
}

p {
  margin-bottom: 1rem;
}

a {
  text-decoration: underline;
}

a:hover {
  color: rgb(137, 255, 0);
  cursor: pointer;
}
</style>
