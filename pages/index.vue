<template>
  <div class="container">
      <div>
        <div class="card">
          <h3><img src="/assets/icons/brand.png" width="190" /></h3>

          <ul v-for="repo in repos" :key="repo.desc">
            <li>
              {{ repo.desc }}

              <strong v-if="repo.hashtag">{{ repo.hashtag_name }}</strong>

              <a :href="repo.repoUrl">
                <a :style="{ color: repo.conStyle }" class="btn">
                  <fai v-if="repo.brand" :icon="['fab', `${repo.faI}`]" />
                  <fai v-if="repo.solid" :icon="repo.faI" />
                </a>
              </a>
            </li>
          </ul>
        </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

import { library, config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

// This is important, we are going to let Nuxt.js worry about the CSS
config.autoAddCss = false;

/* 
  You can add your icons directly in this plugin. See other examples for how you
  can add other styles or just individual icons.
*/
library.add(fab);
library.add(fas);

// Register the component globally
Vue.component("fai", FontAwesomeIcon);

Vue.config.productionTip = false;

export default {
  asyncData({ payload }) {
    return { repos: payload };
  }
};
</script>

<style lang="scss">
@import "index.scss";
</style>
