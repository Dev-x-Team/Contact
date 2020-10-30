<template>
  <div>
    <Nuxt />
  </div>
</template>

<style lang="scss">
@font-face {
  font-family: DF;
  src: url(/fonts/df.otf);
}

@font-face {
  font-family: Hacked;
  src: url(/fonts/HACKED.ttf);
}

$color: #121312;

html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.btn {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid $color;
  color: $color;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.btn:hover {
  color: #fff;
  background-color: $color;
}

</style>
