// Next Types
/** @type {import('next').NextConfig} */

// Path
const path = require("path");

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(`${__dirname}src`, "styles")],
  },
};
