<template>
  <header class="container-fluid">
    <div class="container">
      <p class="neon white">Welcome</p>
      <p class="neon blue">I Am Ashwin Jacobs</p>
      <p class="neon purple">A Inspired Web-Developer</p>
    </div>
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
p {
  font-size: 50px;
  color: white;
}

.blue {
  text-shadow: 0px 0px 10px deepskyblue, 0px 0px 20px deepskyblue,
    0px 0px 30px deepskyblue, 0px 0px 40px deepskyblue, 0px 0px 70px deepskyblue,
    0px 0px 80px deepskyblue, 0px 0px 100px deepskyblue,
    0px 0px 120px deepskyblue;
}

.purple {
  text-shadow: 0px 0px 10px DarkMagenta, 0px 0px 20px DarkMagenta,
    0px 0px 30px DarkMagenta, 0px 0px 40px DarkMagenta, 0px 0px 70px DarkMagenta,
    0px 0px 80px DarkMagenta, 0px 0px 100px DarkMagenta,
    0px 0px 150px DarkMagenta;
}

.white {
  text-shadow: 0px 0px 10px Linen, 0px 0px 1px Linen, 0px 0px 1px Linen,
    0px 0px 40px Linen, 0px 0px 70px Linen, 0px 0px 50px Linen,
    0px 0px 100px Linen, 0px 0px 150px Linen;
}
.text-content {
  margin-bottom: 100px;
}
</style>
