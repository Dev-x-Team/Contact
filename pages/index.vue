<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">contact.dev-x</h1>
      <div class="links">
        <a
          href="https://dev.to/abdfnx"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          <font-awesome-icon :icon="['fab', 'dev']" />
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          <font-awesome-icon :icon="['fab', 'github-alt']" />
        </a>

      </div>

      <div>
        <div class="card">
          <h3>Documentation &rarr;</h3>
          <p>Find in-depth information about Next.js features and API.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import { faDev } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faGithubAlt);
library.add(faDev);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

export default Vue.extend({});
</script>

<style>
@font-face {
  font-family: DF;
  src: url(/fonts/df.otf);
}

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: DF;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.card {
  cursor: pointer;
  margin: 1rem;
  flex-basis: 45%;
  padding: 1.5rem;
  text-align: left;
  color: inherit;
  text-decoration: none;
  border: 1px solid #eaeaea;
  border-radius: 2px;
  transition: rgba(0, 0, 0, 0.25) 0.25s ease-in;
  transition-property: rgba(0, 0, 0, 0.25);
  transition-duration: 0.25s;
  transition-timing-function: ease-in;
  transition-delay: 0s;
  flex-direction: column;
}

.card:hover,
.card:focus,
.card:active {
  color: #0070f3;
  box-shadow: 7px 7px 2px 1px black;
}

.card h3 {
  margin: 0 0 1rem 0;
  font-size: 1.5rem;
}

.card p {
  margin: 0;
  font-size: 1.25rem;
  line-height: 1.5;
}
</style>
