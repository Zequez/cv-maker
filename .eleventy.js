const fs = require("fs");
const yaml = require("js-yaml");

module.exports = function (config) {
  config.setLiquidOptions({
    dynamicPartials: true,
  });

  config.addDataExtension("yml", (contents) => yaml.load(contents));

  // Static assets to pass through
  // config.addPassthroughCopy("./src/fonts");
  // config.addPassthroughCopy("./src/images");
  // config.addPassthroughCopy("./src/favicon.ico");
  // config.addPassthroughCopy("./src/manifest.json");
  // config.addPassthroughCopy("./src/robots.txt");

  return {
    dir: {
      input: "11ty",
      output: "public",
    },
    passthroughFileCopy: true,
  };
};
