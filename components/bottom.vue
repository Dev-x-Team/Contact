<template>
  <div class="container__bottom">
    <fai icon="terminal" />&nbsp; by &nbsp;<fai icon="signature" />&nbsp; with ❤️
  </div>
</template>
<script>
import Vue from "vue";

import { library, config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

config.autoAddCss = false;

library.add(fab);
library.add(fas);

Vue.component("fai", FontAwesomeIcon);

Vue.config.productionTip = false;

export default {
  name: "Bottom",
  asyncData({ payload }) {
    return { repos: payload };
  }
};
</script>