module.exports = {
  plugins: [
    require("postcss-import-ext-glob"),
    require("postcss-import"),
    require("precss"),
    require("postcss-extend-rule"),
    require("postcss-color-mod-function"),
    require("postcss-scale")
  ]
};
