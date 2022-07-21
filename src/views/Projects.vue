<template>
  <div class="container">
    <div class="flex-grid-thirds">
      <div class="col">
        <div class="Projects">
          <div v-for="(Pro, index) in Projects" :key="Pro.id">
            <div class="text-light">
              <div class="card card-1">
                <h3 class="card-heading">{{ Pro.name }}</h3>
                <p class="card-content">
                  {{ Pro.Description }}
                </p>
                <img class="img-fluid" v-bind:src="Pro.img" />
                <ul>
                  <li class="button-icon-rotate Github">
                    <a :id="index" :href="Pro.github" target="_blank">
                      <i class="fa-brands fa-github"></i>Github
                    </a>
                  </li>
                  <li class="button-icon-rotate Netlify">
                    <a :id="index" :href="Pro.Netlify" target="_blank"
                      ><i class="fa-solid fa-n"> </i>Netlify</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      Projects: [
        {
          id: 1,
          name: "BMI Calculator",
          img: "https://i.postimg.cc/8PXdPQnc/BMI.png",
          github: "https://github.com/AshwinJacobs/BMI-Calculator",
          Netlify: "https://bmi-balanced-lifestyle321.netlify.app",
        },
        {
          id: 2,
          name: "Tempreture Converter",
          img: "https://i.postimg.cc/3rBCVDXg/Temp.png",
          github: "https://github.com/AshwinJacobs/Temperature-Converter",
          Netlify: "https://temp-hot-cold-321.netlify.app",
        },
        {
          id: 3,
          name: "Calculator",
          img: "https://i.postimg.cc/L87VvKzw/Calculator.png",
          github: "https://github.com/AshwinJacobs/My-new-Calculator",
          Netlify: "https://calculator-12345.netlify.app",
        },
        {
          id: 4,
          name: "Ashwin's Estates",
          img: "https://i.postimg.cc/1X9049Qn/Ashwin-Estate-s.png",
          github: "https://github.com/AshwinJacobs/Java_End_Of_Module",
          Netlify: "https://end-of-java-module.netlify.app",
        },
        {
          id: 5,
          name: "Fake-Store",
          img: "https://i.postimg.cc/MGQmFP5T/fake-store.png",
          github: "https://github.com/AshwinJacobs/API-Fake-Store",
          Netlify: "https://comforting-starlight-790ffa.netlify.app",
        },
        {
          id: 6,
          name: "Portfolio",
          img: "https://i.postimg.cc/xdMLRkjN/Portfolio.png",
          github: "https://github.com/AshwinJacobs/Final-Portfolio",
          Netlify: "https://cheerful-marzipan-71be45.netlify.app",
        },
      ],
    };
  },
};
</script>
<style scoped>
.container {
  max-width: 1200px;

  margin: 0 auto;
}

.flex-grid {
  display: flex;
}
.flex-grid .col {
  flex: 1;
}
.flex-grid-thirds {
  display: flex;
  justify-content: space-between;
}
.flex-grid-thirds .col {
  width: 31%;
}

@media (max-width: 400px) {
  .flex-grid,
  .flex-grid-thirds {
    display: block;
  }

  .flex-grid .col,
  .flex-grid-thirds .col {
    width: 50%;
    margin: 0 0 50px 0;
  }
}

.card {
  background-color: #1f1f1f;
  border-radius: 10px;
  color: #fff;
  display: block;
  overflow: hidden;
  padding: 20px 30px;
  position: relative;
  text-decoration: none;
  transition: background-color 300ms ease-in-out;
  width: 100%;
}

.card::before {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.card:hover {
  background-color: transparent;
}

.card > * {
  z-index: 10;
}

.card-heading {
  font-size: 28px;
  font-family: "Orbitron", sans-serif;
  font-weight: 700;
  margin: 0;
}

.card-cta {
  font-weight: 600;
  font-size: 16px;
  text-transform: uppercase;
}

.card-1 {
  border: 1px solid rgb(56, 105, 255);
  box-shadow: 0 3px 15px 2px rgba(56, 105, 255, 0.5);
}

.card-1::before {
  background: rgb(56, 105, 255);
  background: linear-gradient(
    90deg,
    rgba(56, 105, 255, 1) 0%,
    rgba(10, 52, 179, 1) 100%
  );
}

.card-1 {
  border: 1px solid rgb(230, 24, 95);
  box-shadow: 0 3px 15px 2px rgba(230, 24, 95, 0.9);
}

.card-1::before {
  background-color: rgb(230, 24, 95);
  background-color: linear-gradient(
    135deg,
    rgba(230, 24, 95, 1) 0%,
    rgba(121, 0, 42, 1) 100%
  );
}

ul {
  max-width: 600px;
  margin: 0 auto;
  padding: 0;
  list-style: none;
}

@keyframes neon-efect-suave {
  0% {
    border: 2px solid #ff05bca9;
    box-shadow: 0px 0px 10px 0px #ff05bca9, inset 0px 0px 10px 0px #ff05bca9;
  }
  0% {
    border: 2px solid #ff05bca9;
    box-shadow: 0px 0px 5px 0px #ff05bca9, inset 0px 0px 10px 0px #ff05bca9;
  }
  0% {
    border: 2px solid transparent;
    box-shadow: none;
  }
  0% {
    border: 2px solid #ff05bca9;
    box-shadow: 0px 0px 5px 0px #ff05bca9, inset 0px 0px 10px 0px #ff05bca9;
  }
  100% {
    border: 2px solid transparent;
    box-shadow: none;
  }
}
.container,
.container-fluid,
.container-lg,
.container-md,
.container-sm,
.container-xl,
.container-xxl {
  width: 100%;
  padding-right: var(--bs-gutter-x, 0.75rem);
  padding-left: var(--bs-gutter-x, 0.75rem);
  margin-right: auto;
  margin-left: auto;
}

.button-icon-rotate > a {
  border: 1px solid #fff;
  display: flex;
  margin: -12px 0;
  text-align: center;
  padding: 20px;
  text-decoration: none;
  color: #fff;
  transition: 0.5s;
  text-transform: uppercase;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  text-shadow: 0px 0px 10px #ff05bc;
  width: 26rem;
}
.button-icon-rotate > a > i {
  font-size: 28px;
  transition: 0.5s;
}
.button-icon-rotate > a:hover {
  background-color: #a18400;
  color: #000;
  transform: scale(1.05);
}
.button-icon-rotate > a:hover > i {
  transform: scale(1.7) rotate(360deg);
}
.button-icon-rotate > a {
  -webkit-animation: neon-efect-suave infinite alternate 1s ease-in-out;
  animation: neon-efect-suave infinite alternate 1s ease-in-out;
}

.button-icon-rotate.Github > a:hover {
  color: #fff;
  box-shadow: 0px 0px 10px 0px #0238a4 !important;
  border-color: #030ba2 !important;
  background-color: #060498;
  text-shadow: 0px 0px 10px white;
}

.button-icon-rotate.Netlify > a:hover {
  color: #fff;
  box-shadow: 0px 0px 10px 0px #9146ff !important;
  border-color: #9146ff !important;
  background-color: #9146ff;
  text-shadow: 0px 0px 10px white;
}
[type="button"]:not(:disabled),
[type="reset"]:not(:disabled),
[type="submit"]:not(:disabled),
button:not(:disabled) {
  cursor: pointer;
  display: none;
}
</style>
