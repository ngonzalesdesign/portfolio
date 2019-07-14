module.exports = {
  plugins: [
    require("precss"),
    require("postcss-import-ext-glob"),
    require("postcss-import"),
    require("postcss-extend-rule"),
    require("postcss-color-mod-function"),
    require("postcss-scale")
  ]
};
