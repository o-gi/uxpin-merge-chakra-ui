module.exports = {
  components: {
    categories: [
      {
        name: "Layout",
        include: ["src/components/layout/box/Box.tsx"],
      },
      {
        name: "Data Display",
        include: ["src/components/Tag/Tag.tsx"],
      },
    ],
    wrapper: "src/UXPinWrapper.tsx",
    webpackConfig: "uxpin.webpack.config.js",
  },
  name: "uxpin-merge-chakra-ui",
};
