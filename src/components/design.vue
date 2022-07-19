<template >
   <div class="about">
    <h1 class="text-light"> </h1>
  </div>
  <div class="Neon Header">
    <header class="Neon-Bottom"><h1 class="text-light"></h1></header>

    <p> </p>
     <p> </p>
      <p> </p>
  </div>

  <div class="Neon Content">
    <div class="Neon-Bottom Content-Body">

        </div>
  <div class="Neon Footer"></div>
  <div class="Neon-Bottom">
    <p class="mx-3 fs-5">information</p>
  </div>
</template>
<script>
export default {
    
}
</script>
<style >
    @import url("https://fonts.googleapis.com/css?family=ZCOOL+QingKe+HuangYou");

body {
  background: #35494a;
  color: white;
  font-family: "ZCOOL QingKe HuangYou", sans-serif;
  font-size: 18px;
  letter-spacing: 3px;
  line-height: 1.4;
}
p {
  color: white;
  margin-top: 0;
  margin-bottom: 5rem;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0 0 0.5rem;
  position: relative;
  text-shadow: 0 0 15px darkgray;
}
h1:after {
  background: #d7fc00;
  border: 2.5px solid #d7fc00;
  border-radius: 50px;
  box-shadow: 0 0 15px darkgrey;
  content: "";
  position: absolute;
  bottom: -6px;
  left: -2.5px;
  width: 100%;
}

header h1 {
  display: inline-block;
  margin: 0 0 calc(0.5rem + 5px);
}

.Neon {
  margin: 5vw;
  position: relative;
}
.Neon:before,
.Neon:after {
  background: #fe2d79;
  border: 2.5px solid #fe2d79;
  border-radius: 50px;
  box-shadow: 0 0 15px #a37c8f;
  content: "";
  display: block;
  height: calc(100% + 2.5vw);
  position: absolute;
  left: 0;
  top: 0;
  width: 0;
}
.Neon:after {
  left: auto;
  right: 0;
}
.Neon-Bottom {
  height: 100%;
  margin: 0 5vw;
  position: relative;
}
.Neon-Bottom:after {
  background: #fe2d79;
  border: 2.5px solid #fe2d79;
  border-radius: 50px;
  box-shadow: 0 0 15px #a08793;
  content: "";
  display: block;
  height: 0;
  position: absolute;
  left: -5vw;
  bottom: calc(-2.5vw - 5px);
  width: calc(100% + 10vw - 5px);
}

.Neon.Header {
  margin: 5vw 5vw 0;
}
.Neon.Header:before,
.Neon.Header:after {
  background: #fe2d79;
  border: 2.5px solid #fe2d79;
  box-shadow: 0 0 15px #a37c8f;
  height: calc(100% + 2.5vw);
}

.Neon.Content {
  margin: 5vw;
  position: relative;
}
.Neon.Content:before,
.Neon.Content:after {
  background: #d7fc00;
  border: 2.5px solid #d7fc00;
  box-shadow: 0 0 15px darkgray;
}
.Neon-Bottom.Content-Body {
  height: 100%;
  margin: 10vw 5vw 5vw;
  position: relative;
}
.Neon-Bottom.Content-Body:after {
  background: #d7fc00;
  border: 2.5px solid #d7fc00;
  box-shadow: 0 0 15px darkgray;
  position: absolute;
}
</style>