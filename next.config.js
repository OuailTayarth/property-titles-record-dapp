const path = require("path");

module.exports = {
  reactStrictMode: false,
  sassOptions: {
    includePaths: [path.join(__dirname, "css")],
  },

  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
};
