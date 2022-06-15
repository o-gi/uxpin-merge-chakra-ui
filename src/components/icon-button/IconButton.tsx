import { IconButton as IconButtonC, ThemeTypings } from "@chakra-ui/react";
import { PropsBase } from "../../cores/types";
import { IconName, IconSelector } from "../../IconSelector";

interface IProps extends PropsBase {
  /**
   * @uxpinpropname Icon
   */
  iconName: IconName;
  ariaLabel: string;
  colorScheme?: ThemeTypings["components"]["Code"]["variants"];
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
  const { ariaLabel, onClick, iconName } = props;
  return (
    <IconButtonC
      {...props}
      icon={IconSelector(iconName, "JSXElement")}
      aria-label={ariaLabel}
      onClick={onClick}
    />
  );
}
