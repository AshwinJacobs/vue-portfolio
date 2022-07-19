<template>
  <header class="container-fluid">
    <h1>Welcome</h1>
    <h3>I Am Ashwin Jacobs</h3>
    <h3>A Inspired Web-Developer</h3>
  </header>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/Navbar.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
};
</script>
<style scoped>
@import url(https://fonts.googleapis.com/css?family=Roboto:400,700);

html,
body {
  height: 100%;
  margin: 0;
}

header {
  background: url("https://i.postimg.cc/K8npjQgw/vortex-1264042-1920.jpg");
  background-size: cover;

  /* CENTER TITLE Y */
  display: flex;
  flex-direction: column;
  justify-content: center;

  /* CENTER TITLE X */
  align-items: center;
  height: 100vh;
}

h1,
h3 {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  color: rgb(13, 24, 225);
  font-size: 35px;
}

h1 {
  font-size: 40px;
}
.text-content {
  margin-bottom: 100px;
}
</style>
