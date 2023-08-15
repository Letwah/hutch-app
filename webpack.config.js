const webpack = require("webpack");

module.exports = {
  entry: "./src/main.jsx", // Update this to your entry file
  module: {
    rules: [
      // Your existing rules...
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      },
    ],
  },
  // Other configuration options...
};
