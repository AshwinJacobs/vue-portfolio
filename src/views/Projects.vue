<template>
  <ul class="cards flex-container">
    <li class="flex-item">
      <div class="card">
        <h3>Card 1 header</h3>
        <p>Card content content content content content content content etc.</p>
        <a>Card link</a>
      </div>
    </li>
    <li class="flex-item">
      <div class="card">
        <h3>Card 2 header</h3>
        <p>Card content content content content content content content etc.</p>
        <a>Card link</a>
      </div>
    </li>
    <li class="flex-item">
      <div class="card">
        <h3>Card 3 header</h3>
        <p>Card content content content content content content content etc.</p>
        <a>Card link</a>
      </div>
    </li>
    <li class="flex-item">
      <div class="card">
        <h3>Card 4 header</h3>
        <p>Card content content content content content content content etc.</p>
        <a>Card link</a>
      </div>
    </li>
    <li class="flex-item">
      <div class="card">
        <h3>Card 5 header</h3>
        <p>Card content content content content content content content etc.</p>
        <a>Card link</a>
      </div>
    </li>
    <li class="flex-item">
      <div class="card">
        <h3>Card 6 header</h3>
        <p>Card content content content content content content content etc.</p>
        <a>Card link</a>
      </div>
    </li>
    <li class="flex-item">
      <div class="card">
        <h3>Card 7 header</h3>
        <p>Card content content content content content content content etc.</p>
        <a>Card link</a>
      </div>
    </li>
    <li class="flex-item">
      <div class="card">
        <h3>Card 8 header</h3>
        <p>Card content content content content content content content etc.</p>
        <a>Card link</a>
      </div>
    </li>
  </ul>
</template>
<script>
export default {};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css?family=Poppins:300,600");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Poppins", sans-serif;
  background-color: #060c21;
  padding: 2rem;
}

.flex-container {
  position: relative;
  z-index: 1;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

/* Card styles */

.cards {
  list-style-type: none;
  padding: 0;
}

.card {
  max-width: 30rem;
  height: 30rem;
  position: relative;
  padding: 1rem;
  background-color: #060c21;
  color: #fff;
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

.card:nth-child(3n + 0)::before,
.card:nth-child(3n + 0)::after {
  background: linear-gradient(235deg, #89ff00, #060c21, #00bcd4);
}

.card:nth-child(3n + 1)::before,
.card:nth-child(3n + 1)::after {
  background: linear-gradient(235deg, #ff005e, #060c21, #0436a2);
}

.card:nth-child(3n + 2)::before,
.card:nth-child(3n + 2)::after {
  background: linear-gradient(235deg, #772aff, #060c21, #2196f3);
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
ul {
  width: 100%;
  height: fit-content;
  background-color: rgb(0 0 0);
}
</style>
