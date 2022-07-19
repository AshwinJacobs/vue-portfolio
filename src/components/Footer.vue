<template>
  <div>
    <footer>
      <p>&copy; Ashwin Dean Jacobs 2022</p>
    </footer>
  </div>
</template>
<script>
export default {};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;700&display=swap");

:root {
  --color-white: #eaeae0;
  --color-blue-dark: #1c4670;
  --color-blue-light: #278ab0;
  --color-neon: #1dc690;
  --color-black: #54627b;
  --color-mate-dark: #1d1e22;
}
* {
  margin: 0;
  padding: 0;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

html {
  box-sizing: border-box;
  font-size: 10px;
  scroll-behavior: smooth;
}

footer {
  font-weight: 300px;
  display: flex;
  justify-content: space-evenly;
  padding: 1rem;
  background: var(--color-mate-dark);
  border-top: 4px solid #ae1dc6;
}

footer > p {
  margin: 2rem;
  color: white;
  padding-top: 10px;
  font-size: 13px;
}

footer i {
  vertical-align: middle;
}

@media (max-width: 28.75em) {
  footer {
    flex-direction: column;
    text-align: center;
  }
}
</style>
