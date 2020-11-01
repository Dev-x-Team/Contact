<template>
  <div>
    <Nuxt />
    <Bottom />
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
  min-height: 97vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.container__bottom {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
