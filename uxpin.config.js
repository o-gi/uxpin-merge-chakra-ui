module.exports = {
  components: {
    categories: [
      {
        name: "Layout",
        include: [
          "src/components/box/Box.tsx",
          "src/components/center/Center.tsx",
          "src/components/flex/Flex.tsx",
          "src/components/flex-spacer/FlexSpacer.tsx",
          "src/components/square/Square.tsx",
          "src/components/circle/Circle.tsx",
          "src/components/stack/Stack.tsx",
        ],
      },
      {
        name: "Forms",
        include: ["src/components/icon-button/IconButton.tsx"],
      },
      {
        name: "Data Display",
        include: [
          "src/components/badge/Badge.tsx",
          "src/components/code/Code.tsx",
          "src/components/divider/Divider.tsx",
          "src/components/kbd/Kbd.tsx",
          "src/components/tag/Tag.tsx",
        ],
      },
      {
        name: "Feedback",
        include: ["src/components/spinner/Spinner.tsx"],
      },
      {
        name: "Typography",
        include: [
          "src/components/text/Text.tsx",
          "src/components/heading/Heading.tsx",
        ],
      },
      {
        name: "Media and icons",
        include: [
          "src/components/avatar/Avatar.tsx",
          "src/components/icon/Icon.tsx",
          "src/components/image/Image.tsx",
        ],
      },
    ],
    wrapper: "src/UXPinWrapper.tsx",
    webpackConfig: "uxpin.webpack.config.js",
  },
  name: "merge-chakra-ui",
};
