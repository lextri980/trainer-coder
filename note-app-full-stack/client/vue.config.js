const { defineConfig } = require('@vue/cli-service')
const path = require("path");

module.exports = defineConfig({
  css: {
    loaderOptions: {
      sass: {
        sassOptions: {
          includePaths: ["./node_modules", "./src/assets"],
        },
      },
    },
  },
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        "@validations": path.resolve(
          __dirname,
          "src/services/validations/validation.js"
        ),
      },
    },
  },
})
