const path = require("path");

module.exports = {
  i18n: {
    locales: ["en", "es", "fr"],
    defaultLocale: "en",
  },
  localePath: path.resolve("./locales"),
};
