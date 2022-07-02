module.exports = {
  components: {
    categories: [
      {
        name: "Layout",
        include: [
          "src/components/aspect-ratio/AspectRatio.tsx",
          "src/components/box/Box.tsx",
          "src/components/center/Center.tsx",
          "src/components/container/Container.tsx",
          "src/components/flex/Flex.tsx",
          "src/components/grid/Grid.tsx",
          "src/components/grid-item/GridItem.tsx",
          "src/components/flex-spacer/FlexSpacer.tsx",
          "src/components/square/Square.tsx",
          "src/components/circle/Circle.tsx",
          "src/components/simple-grid/SimpleGrid.tsx",
          "src/components/stack/Stack.tsx",
          "src/components/wrap/Wrap.tsx",
          "src/components/wrap-item/WrapItem.tsx",
        ],
      },
      {
        name: "Forms",
        include: [
          "src/components/button/Button.tsx",
          "src/components/button-group/ButtonGroup.tsx",
          "src/components/checkbox/Checkbox.tsx",
          "src/components/editable/Editable.tsx",
          "src/components/form-control/FormControl.tsx",
          "src/components/form-label/FormLabel.tsx",
          "src/components/form-helper-text/FormHelperText.tsx",
          "src/components/form-error-message/FormErrorMessage.tsx",
          "src/components/checkbox-group/CheckboxGroup.tsx",
          "src/components/icon-button/IconButton.tsx",
          "src/components/input/Input.tsx",
          "src/components/number-input/NumberInput.tsx",
          "src/components/pin-input/PinInput.tsx",
          "src/components/pin-input-field/PinInputField.tsx",
          "src/components/radio/Radio.tsx",
          "src/components/radio-group/RadioGroup.tsx",
          "src/components/select/Select.tsx",
          "src/components/slider/Slider.tsx",
          "src/components/range-slider/RangeSlider.tsx",
          "src/components/switch/Switch.tsx",
          "src/components/textarea/Textarea.tsx",
        ],
      },
      {
        name: "Data Display",
        include: [
          "src/components/badge/Badge.tsx",
          "src/components/code/Code.tsx",
          "src/components/divider/Divider.tsx",
          "src/components/kbd/Kbd.tsx",
          "src/components/table/Table.tsx",
          "src/components/table-caption/TableCaption.tsx",
          "src/components/table-head/Thead.tsx",
          "src/components/table-body/Tbody.tsx",
          "src/components/table-foot/Tfoot.tsx",
          "src/components/table-tr/Tr.tsx",
          "src/components/table-th/Th.tsx",
          "src/components/table-td/Td.tsx",
        ],
      },
      {
        name: "Feedback",
        include: [
          "src/components/alert/Alert.tsx",
          "src/components/alert-title/AlertTitle.tsx",
          "src/components/circular-progress/CircularProgress.tsx",
          "src/components/progress/Progress.tsx",
          "src/components/skeleton/Skeleton.tsx",
          "src/components/skeleton-circle/SkeletonCircle.tsx",
          "src/components/skeleton-text/SkeletonText.tsx",
          "src/components/spinner/Spinner.tsx",
        ],
      },
      {
        name: "Typography",
        include: [
          "src/components/text/Text.tsx",
          "src/components/heading/Heading.tsx",
        ],
      },
      {
        name: "Overlay",
        include: [
          "src/components/alert-dialog/AlertDialog.tsx",
          "src/components/alert-dialog-header/AlertDialogHeader.tsx",
          "src/components/alert-dialog-body/AlertDialogBody.tsx",
          "src/components/alert-dialog-footer/AlertDialogFooter.tsx",
          "src/components/drawer/Drawer.tsx",
          "src/components/drawer-overlay/DrawerOverlay.tsx",
          "src/components/drawer-content/DrawerContent.tsx",
          "src/components/drawer-close-button/DrawerCloseButton.tsx",
          "src/components/drawer-header/DrawerHeader.tsx",
          "src/components/drawer-body/DrawerBody.tsx",
          "src/components/drawer-footer/DrawerFooter.tsx",
          "src/components/menu/Menu.tsx",
          "src/components/menu-button/MenuButton.tsx",
          "src/components/menu-list/MenuList.tsx",
          "src/components/menu-item/MenuItem.tsx",
          "src/components/tooltip/Tooltip.tsx",
        ],
      },
      {
        name: "Navigation",
        include: [
          "src/components/breadcrumb/Breadcrumb.tsx",
          "src/components/breadcrumb-item/BreadcrumbItem.tsx",
          "src/components/breadcrumb-link/BreadcrumbLink.tsx",
          "src/components/link/Link.tsx",
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
      {
        name: "Other",
        include: ["src/components/close-button/CloseButton.tsx"],
      },
    ],
    wrapper: "src/UXPinWrapper.tsx",
    webpackConfig: "uxpin.webpack.config.js",
  },
  name: "merge-chakra-ui",
};
