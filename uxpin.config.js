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
      {
        name: "Typography",
        include: ["src/components/typography/text/Text.tsx"],
      },
    ],
    wrapper: "src/UXPinWrapper.tsx",
    webpackConfig: "uxpin.webpack.config.js",
  },
  name: "merge-chakra-ui",
};
