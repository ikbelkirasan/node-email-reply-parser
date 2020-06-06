const path = require("path");

module.exports = {
  entry: "./index.js",
  target: "node",
  mode: "production",
  output: {
    filename: "email-parser.js",
    path: path.resolve(__dirname, "dist"),
    library: "EmailParser",
    libraryTarget: "var"
  },
};
