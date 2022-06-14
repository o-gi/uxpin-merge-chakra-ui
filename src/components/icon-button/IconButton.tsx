import { IconButton as IconButtonC, ThemeTypings } from "@chakra-ui/react";
import { PropsBase } from "../../cores/types";
import { IconName, IconSelector } from "../../IconSelector";

interface IProps extends PropsBase {
  ariaLabel: string;
  colorScheme?: ThemeTypings["components"]["Code"]["variants"];
  /**
   * @uxpinpropname Icon
   */
  iconName?: IconName;
  variant?: "ghost" | "outline" | "solid" | "link" | "unstyled";
  size?: "lg" | "md" | "sm" | "xs";
  isActive?: boolean;
  isDisabled?: boolean;
  isLoading?: boolean;
  isRound?: boolean;
  onClick?: () => void;
}

/**
 * @uxpindocurl https://v1.chakra-ui.com/docs/components/components/components/layout/IconButton#usage
 */
export function IconButton(props: IProps) {
  const { ariaLabel, iconName, colorScheme, size } = props;
  return (
    <IconButtonC
      {...props}
      aria-label={ariaLabel}
      icon={IconSelector(iconName, "JSXElement")}
      colorScheme={colorScheme}
      size={size}
    />
  );
}
