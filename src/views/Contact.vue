<template>
  <form
    class="container-fluid px-3"
    action="https://formspree.io/f/xayvrebw"
    method="POST"
  >
    <div class="container">
      <h2 class="mx-5 px-5 text-light">Contact Me</h2>
      <div class="row100">
        <div class="col">
          <div class="inputBox">
            <input type="text" name="name" required />
            <span class="text">First Name</span>
            <span class="line"></span>
          </div>
        </div>
        <div class="col">
          <div class="inputBox">
            <input type="text" name="name" required />
            <span class="text">Surname</span>
            <span class="line"></span>
          </div>
        </div>
        <div class="col">
          <div class="inputBox">
            <input type="email" name="email" required />
            <span class="text">Email</span>
            <span class="line"></span>
          </div>
        </div>
        <div class="col">
          <div class="inputBox">
            <input type="number" name="number" required />
            <span class="text">Phone</span>
            <span class="line"></span>
          </div>
        </div>
      </div>
      <div class="row100">
        <div class="col">
          <div class="inputBox textarea">
            <textarea required></textarea>
            <span class="text">Your Message..</span>
            <span class="line"></span>
          </div>
        </div>
      </div>
      <div class="row100">
        <div class="col">
          <input type="submit" value="Send" />
        </div>
      </div>
    </div>
  </form>
</template>
<script>
export default {};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #04192d;
}

.container {
  width: 100%;
  height: 91vh;
}

.container h2 {
  width: 95%;
  color: #1636a9;
  font-size: 36px;
  text-align: center;
  margin-bottom: 10px;
}

.container .row100 {
  position: relative;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
}

.container .row100 .col {
  position: relative;
  width: 100%;
  padding: 0 10px;
  margin: 30px 0 10px;
  transition: 0.3s;
}

.container .row100 .inputBox {
  position: relative;
  width: 100%;
  height: 40px;
  color: #ffffff;
}

.container .row100 .inputBox input,
.container .row100 .inputBox.textarea textarea {
  position: absolute;
  width: 100%;
  height: 100%;
  background: transparent;
  box-shadow: none;
  border: none;
  outline: none;
  font-size: 18px;
  padding: 0 10px;
  z-index: 1;
  color: rgb(242, 240, 240);
}

.container .row100 .inputBox .text {
  position: absolute;
  top: 0;
  left: 0;
  line-height: 40px;
  font-size: 18px;
  padding: 0 10px;
  display: block;
  transition: 0.3s;
  pointer-events: none;
}

.container .row100 .inputBox input:focus + .text,
.container .row100 .inputBox input:valid + .text {
  top: -35px;
  left: -10px;
}

.container .row100 .inputBox .line {
  position: absolute;
  bottom: 0;
  display: block;
  width: 100%;
  height: 5px;
  background: #7204859b;
  transition: 0.3s;
  border-radius: 2px;
  pointer-events: none;
}

.container .row100 .inputBox input:focus ~ .line,
.container .row100 .inputBox input:valid ~ .line {
  height: 100%;
}

.container .row100 .inputBox.textarea {
  position: relative;
  width: 100%;
  height: 100px;
  padding: 10px 0;
}

.container .row100 .inputBox.textarea textarea {
  width: 100%;
  height: 100%;
  resize: none;
}

.container .row100 .inputBox textarea:focus + .text,
.container .row100 .inputBox textarea:valid + .text {
  top: -35px;
  left: -10px;
}

.container .row100 .inputBox textarea:focus ~ .line,
.container .row100 .inputBox textarea:valid ~ .line {
  height: 100%;
}

input[type="submit"] {
  border: none;
  padding: 7px 35px;
  cursor: pointer;
  outline: none;
  background: #320a96;
  color: rgb(210, 198, 198);
  font-size: 18px;
  border-radius: 5px;
  transition: 0.3s;
}

input[type="submit"]:hover {
  background: #fff;
}
</style>
