<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">contact.dev-x</h1>

      <div>
        <div class="card">
          <h3>Contacts &rarr;</h3>

          <ul v-for="repo in repos" :key="repo.projectName">
            <li>
              {{ repo.projectName }}

              <strong v-if="repo.hashtag">{{ repo.hashtag_name }}</strong>

              <a :href="repo.repoUrl">
                <a :class="`button--${repo.conStyle}`">
                  <font-awesome-icon :icon="['fab', `${repo.faI}`]" />
                </a>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faDev } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faGithubAlt);
library.add(faDev);
library.add(faTwitter);

Vue.component("font-awesome-icon", FontAwesomeIcon);

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
