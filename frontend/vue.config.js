const { defineConfig } = require("@vue/cli-service");

const SitemapPlugin = require('sitemap-webpack-plugin').default;

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      new SitemapPlugin({base: "https://becep.sk/", paths: [
        {
            path: '/',
            lastmod: new Date().toISOString().slice(0,10),
            priority: 0.8,
            changefreq: 'hourly'
        },
        {
          path: '/dokumenty',
          lastmod: new Date().toISOString().slice(0,10),
          priority: 0.8,
          changefreq: 'hourly'
        },
        {
          path: '/statistiky',
          lastmod: new Date().toISOString().slice(0,10),
          priority: 0.8,
          changefreq: 'hourly'
        },
        {
          path: '/galeria',
          lastmod: new Date().toISOString().slice(0,10),
          priority: 0.8,
          changefreq: 'hourly'
        },
        {
          path: '/video',
          lastmod: new Date().toISOString().slice(0,10),
          priority: 0.8,
          changefreq: 'hourly'
        },
        {
          path: '/archiv',
          lastmod: new Date().toISOString().slice(0,10),
          priority: 0.8,
          changefreq: 'hourly'
        },
        {
          path: '/video',
          lastmod: new Date().toISOString().slice(0,10),
          priority: 0.8,
          changefreq: 'hourly'
        },
        {
          path: '/aplikacia',
          lastmod: new Date().toISOString().slice(0,10),
          priority: 0.8,
          changefreq: 'hourly'
        },
        {
          path: '/aktuality',
          lastmod: new Date().toISOString().slice(0,10),
          priority: 0.8,
          changefreq: 'hourly'
        },
        {
          path: '/vizia-nula',
          lastmod: new Date().toISOString().slice(0,10),
          priority: 0.8,
          changefreq: 'hourly'
        },
        {
          path: '/cookies',
          lastmod: new Date().toISOString().slice(0,10),
          priority: 0.8,
          changefreq: 'hourly'
        },
        {
          path: '/kontakty',
          lastmod: new Date().toISOString().slice(0,10),
          priority: 0.8,
          changefreq: 'hourly'
        },
        {
          path: '/vyhlasenie-o-pristupnosti',
          lastmod: new Date().toISOString().slice(0,10),
          priority: 0.8,
          changefreq: 'hourly'
        },
        {
          path: '/vyhladavanie',
          lastmod: new Date().toISOString().slice(0,10),
          priority: 0.8,
          changefreq: 'hourly'
        },
    ], options: {
          filename: 'sitemap.xml',
          lastmod: true,
          changefreq: 'hourly',
          priority: 0.8
      }})
    ],
    module: {
      rules: [
        {
          test: /\.(pdf)$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "[name].[ext]",
                esModule: false,
              },
            },
          ],
        },
      ],
    },
  },
});
