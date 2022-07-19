<template>
  <div class="home">
    <HelloWorld msg="" />
    <h1>Landing</h1>
  </div>
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
