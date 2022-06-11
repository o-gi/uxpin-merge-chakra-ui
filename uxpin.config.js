module.exports = {
  components: {
    categories: [
      {
        name: "Layout",
        include: [
          "src/components/box/Box.tsx",
          "src/components/stack/Stack.tsx",
        ],
      },
      {
        name: "Data Display",
        include: ["src/components/Tag/Tag.tsx"],
      },
      {
        name: "Typography",
        include: [
          "src/components/text/Text.tsx",
          "src/components/heading/Heading.tsx",
        ],
      },
    ],
    wrapper: "src/UXPinWrapper.tsx",
    webpackConfig: "uxpin.webpack.config.js",
  },
  name: "merge-chakra-ui",
};
