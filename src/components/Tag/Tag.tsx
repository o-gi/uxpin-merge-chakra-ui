import {
  Tag as TagC,
  TagLabel,
  TagLeftIcon,
  TagRightIcon,
  ThemeTypings,
} from "@chakra-ui/react";
import React from "react";
import IconSelector, { IconName } from "../../IconSelector";
interface IProps {
  label: string;
  colorScheme: ThemeTypings["colorSchemes"];
  size: ThemeTypings["components"]["Tag"]["sizes"];
  variant: ThemeTypings["components"]["Tag"]["variants"];
  iconLeft?: IconName;
  iconRight?: IconName;
}

export const Tag = (props: IProps) => {
  const { label, colorScheme, size, variant, iconLeft, iconRight } = props;

  return (
    <TagC size={size} key={size} variant={variant} colorScheme={colorScheme}>
      {iconLeft && <TagLeftIcon boxSize="12px" as={IconSelector(iconLeft)} />}
      <TagLabel>{label}</TagLabel>
      {iconRight && (
        <TagRightIcon boxSize="12px" as={IconSelector(iconRight)} />
      )}
    </TagC>
  );
};
