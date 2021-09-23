const withMDX = require("@next/mdx");
const composePlugins = require("next-compose-plugins");

const nextMDX = {
  pageExtensions: ["js", "mdx"]
};

const nextConfig = {
  images: {
    domains: ["source.unsplash.com"]
  }
};

module.exports = composePlugins([withMDX(nextMDX)], nextConfig);
