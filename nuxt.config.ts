// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  nitro: { static: true },
  ssr: false,
  modules: ["@nuxt/ui", "nuxt-mapbox"],
  ui: {
    global: true,
    icons: ["ep"],
  },
  runtimeConfig: {
    mongodbUri: "mongodb://user:pwd@127.0.1:27017",
    jwtSecret: "mysecretjwtPassword",
    public: {
      addressBaseUrl: "http://localhost:7878",
    },
  },
  css: ["@/assets/theme.scss"],
  mapbox: {
    accessToken:
      "pk.eyJ1IjoibWFlbGRhbnQiLCJhIjoiY2xrbXhzdmlkMGM2NDNlcXN2M2k5ODEwdCJ9.--hivfMEK8GcJnF5XVjwuA",
  },
});
