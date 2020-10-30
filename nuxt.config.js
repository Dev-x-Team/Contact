require("dotenv").config();

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: "static",

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "Contact",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/icon.svg" }]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    "@fortawesome/fontawesome-svg-core/styles.css",
    "ant-design-vue/dist/antd.css"
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ["@/plugins/antd-ui"],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build"
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  generate: {
    async routes() {
      const faunadb = require("faunadb");
      const query = faunadb.query;
      const slugify = require("slugify");
      const q = query;

      if (!process.env.FAUNA_SERVER_KEY) {
        throw new Error("FAUNA_SERVER_KEY not found.");
      }

      const client = new faunadb.Client({
        secret: process.env.FAUNA_SERVER_KEY
      });

      const result = await client.query(
        q.Map(
          q.Paginate(q.Match(q.Index("allRepos"))),
          q.Lambda("X", q.Get(q.Var("X")))
        )
      );

      const repos = result.data.map(repo => repo.data);
      const routes = repos.map(repo => {
        const repoUrlParts = repo.repoUrl.split("/");
        const repoOwner = repoUrlParts[repoUrlParts.length - 2];
        const repoName = repoUrlParts[repoUrlParts.length - 1];

        const slug = slugify(repoName, {
          remove: /[*+~.()'"!:@]/g
        });

        repo.slug = slug;
        repo.owner = repoOwner;
        repo.name = repoName;

        return {
          payload: repo
        };
      });

      routes.push({
        route: "/",
        payload: repos
      });
      return routes;
    }
  }
};
