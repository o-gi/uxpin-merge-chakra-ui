module.exports = {
  components: {
    categories: [
      {
        name: "General",
        include: ["src/components/Tag/Tag.tsx"],
      },
    ],
    wrapper: "src/UXPinWrapper.tsx",
    webpackConfig: "uxpin.webpack.config.js",
  },
  name: "uxpin-merge-chakra-ui",
};
