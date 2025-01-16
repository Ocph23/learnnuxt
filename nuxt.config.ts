// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  app:{
    head:{
      title:"Learn NuxtJs",
      meta:[
        {name:'description', content:'learn nuxt'}
      ],
      link:[
        {rel:'stylesheet', href:'/assets/main.css'}
      ]
    }
  }

})