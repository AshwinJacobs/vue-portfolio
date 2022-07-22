<template>
  <div class="about"></div>
  <div class="Neon Header">
    <header class="Neon-Bottom">
      <h1 class="text-light about">About Me</h1>
    </header>
  </div>

  <div class="Neon Content">
    <div class="Neon-Bottom Content-Body">
      <span class="title text-light">Who I Am</span>
      <p>
        I am hardworking and work well in a team. I am time conscious and
        willing to learn new things. I find a way of comfort when working with
        new people and adapting to a new environment. I have good interpersonal
        skills and enjoy talking about new technology in the market, new
        smartphones, laptops and desktops.
      </p>
      <p></p>
    </div>
  </div>

  <div class="Neon Header">
    <header class="Neon-Bottom">
      <h1 class="text-light about">Resume</h1>
    </header>
  </div>

  <div class="Neon Content">
    <div class="Neon-Bottom Content-Body">
      <span class="title text-light"></span>
      <p>
        <span class="text-primary">2017</span> After completing my Matric I
        worked casually at a home based car workshop, working specifically on
        Honda vehicle's <br />
        <span class="text-primary">2018-2019</span> Studied at College Of Cape
        Town Started working on computers and laptops. After the course I
        provided a service for clients <br />
        <span class="text-primary">2018-2020</span> Studied at CPUT learnt to
        work on routers and switches, got to learn about cyber-ops and I loved
        it. My online platforms are highly secured.
      </p>
      <p>
        2017 Matric Certificate<br />
        2019 IT Essentials, CCNA Certificate<br />
        2020 CCNP Certificate
      </p>
    </div>
  </div>

  <div class="Neon Header">
    <header class="Neon-Bottom">
      <h1 class="text-light about">Skills</h1>
    </header>
  </div>

  <div class="Neon Content">
    <div class="Neon-Bottom Content-Body">
      <span class="title text-light"></span>
      <div class="container container-fluid">
        <i class="fa-brands fa-html5" id="github">
          <span> HTML </span>
        </i>
        <i class="fa-brands fa-css3-alt" id="Linkedin"> <span> CSS</span></i>

        <i class="fa-solid fa-database" id="Linkedin"> <span> SQL </span></i>
        <i class="fa-brands fa-vuejs" id="Linkedin"><span> VUE </span></i>
        <i class="fa-brands fa-bootstrap" id="Linkedin">
          <span> Bootstrap </span>
        </i>
        <i class="fa-brands fa-js-square" id="Linkedin"
          ><span> Javascript </span></i
        >
      </div>
    </div>
  </div>
  <div class="Neon Footer"></div>
  <div class="Neon-Bottom">
    <p class="info mx-3">
      Some Contact Information : <br /><span>Call: 061 046 2281</span><br />
      <span>Email: ashwin.dean21@gmail.com</span>
    </p>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=ZCOOL+QingKe+HuangYou");

body {
  background: #35494a;
  color: white;
  font-family: "ZCOOL QingKe HuangYou", sans-serif;
  font-size: 18px;
  letter-spacing: 3px;
  line-height: 1.4;
}
.title {
  font-size: 22px;
}
.about {
  font-size: 35px;
}
.info {
  font-size: 20px;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 89vw;
  flex-wrap: wrap;
  font-size: 7px;
}

#github,
#Linkedin {
  font-size: 5em;
  background-color: #18191f;
  color: #fff;
  box-shadow: 2px 2px 2px #00000080, 10px 1px 12px #00000080,
    2px 2px 10px #00000080, 2px 2px 3px #00000080, inset 2px 2px 10px #00000080,
    inset 2px 2px 10px #00000080, inset 2px 2px 10px #00000080,
    inset 2px 2px 10px #00000080;
  border-radius: 29px;
  padding: 11px 19px;
  margin: 11px 48px;
  animation: animate 3s linear infinite;
  text-shadow: 0 0 50px #0072ff, 0 0 100px #0072ff, 0 0 150px #0072ff,
    0 0 200px #0072ff;
}

#github {
  animation-delay: 0.1s;
}

@keyframes animate {
  from {
    filter: hue-rotate(0deg);
  }
  to {
    filter: hue-rotate(360deg);
  }
}

p {
  color: white;
  margin-top: 0;
  margin-bottom: 5rem;
  font-size: 20px;
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
  background: #1d2fab;
  border: 2.5px solid #004efc;
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
  box-shadow: 0 0 15px #a37c8f;
  height: calc(100% + 2.5vw);
}

.Neon.Content {
  margin: 0vw;
  position: relative;
}
.Neon.Content:before,
.Neon.Content:after {
  background: #0c06b5;
  border: 2.5px solid #181dba;
  box-shadow: 0 0 15px darkgray;
}
.Neon-Bottom.Content-Body {
  height: 100%;
  margin: 10vw 5vw 5vw;
  position: relative;
}
.Neon-Bottom.Content-Body:after {
  background: #3200fc;
  border: 2.5px solid #3f00fc;
  box-shadow: 0 0 15px darkgray;
  position: absolute;
}
</style>
