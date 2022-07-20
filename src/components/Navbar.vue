<template>
  <div>
    <nav>
      <ul class="my-0">
        <li class="blue"><router-link to="/">Home</router-link></li>
        <li class="purple">
          <router-link to="/Projects">Projects</router-link>
        </li>
        <li class="yellow">
          <router-link to="/Testimonials">Testimonials</router-link>
        </li>
        <li class="pink"><router-link to="/about">About</router-link></li>
        <li class="green"><router-link to="/Contact">Contact</router-link></li>
      </ul>
    </nav>
  </div>
</template>
<script>
export default {
  name: "Navbar",
};
</script>
<style>
/* font used */

body,
* {
  margin: 0;
  padding: 0;
}
body {
  width: 100%;
  height: 100vh;
  background-image: url("https://s33.postimg.cc/obnod1hj3/pexels19.jpg");
  background-repeat: repeat;
  background-size: cover;
  background-position: center;
}

dl,
ol,
ul {
  margin-top: 0;
  margin-bottom: 0rem;
}
ul {
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0, 0.8);
}
ul li {
  padding: 15px 20px;
  display: inline-block;
  list-style: none;
}
ul li a {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 30px;
  text-decoration: none;
  color: grey;
  transition: all ease 0.25s;
}

/* Neon effect when we hover over a link */
.blue a:hover {
  color: white;
  text-shadow: 0 0 5px #4242f4, 0 0 10px #425af4, 0 0 20px #42f4e8,
    0 0 40px #42f4e8, 0 0 80px #42f4e8, 0 0 90px #42f4e8, 0 0 100px #42f4e8,
    0 0 150px #42f4e8;
}
.purple a:hover {
  color: white;
  text-shadow: 0 0 5px #b555dd, 0 0 10px #b555dd, 0 0 20px #b555dd,
    0 0 40px #b555dd, 0 0 80px #b555dd, 0 0 90px #b555dd, 0 0 100px #b555dd,
    0 0 150px #b555dd;
}
.pink a:hover {
  color: white;
  text-shadow: 0 0 5px #b555dd, 0 0 10px #b555dd, 0 0 20px #b555dd,
    0 0 40px #b555dd, 0 0 80px #b555dd, 0 0 90px #b555dd, 0 0 100px #b555dd,
    0 0 150px #b555dd;
}
.green a:hover {
  color: white;
  text-shadow: 0 0 5px #4242f4, 0 0 10px #425af4, 0 0 20px #42f4e8,
    0 0 40px #42f4e8, 0 0 80px #42f4e8, 0 0 90px #42f4e8, 0 0 100px #42f4e8,
    0 0 150px #42f4e8;
}
.yellow a:hover {
  color: white;
  text-shadow: 0 0 5px #4242f4, 0 0 10px #425af4, 0 0 20px #42f4e8,
    0 0 40px #42f4e8, 0 0 80px #42f4e8, 0 0 90px #42f4e8, 0 0 100px #42f4e8,
    0 0 150px #42f4e8;
}

/* "RESPONSIVE" for small devices */
@media only screen and (max-width: 700px) {
  body {
    height: 100%;
  }
  ul {
    height: 100%;
  }
  ul li {
    display: block;
    text-align: center;
    padding-top: 4rem;
  }
  ul li:last-child {
    padding-bottom: 7.2rem;
  }
}
</style>
