<template>
  <div>
    <section
      :style="{ backgroundColor: '#' + repo.colorHex }"
      class="hero has-text-centered"
    >
      <div class="hero-body">
        <div class="container">
          <figure
            :style="{ maxWidth: '10%', margin: '0 auto' }"
            v-html="repo.svgLogo"
          ></figure>
          <h1 class="title has-text-light is-size-1">
            {{ repo.projectName }}
          </h1>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  asyncData({ payload }) {
    if (payload) return { repo: payload };
  },
};
</script>