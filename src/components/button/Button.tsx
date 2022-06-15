import { Button as ButtonC, ThemeTypings } from "@chakra-ui/react";
import { ReactNode } from "react";
import { PropsBase } from "../../cores/types";
import { IconName, IconSelector } from "../../IconSelector";

interface IProps extends PropsBase {
  /**
   * @uxpinpropname Label
   * @uxpincontroltype input
   */
  children: ReactNode;
  onClick?: () => void;
  colorScheme?: ThemeTypings["colorSchemes"];
  size?: "lg" | "md" | "sm" | "xs";
  variant?: ThemeTypings["components"]["Button"]["variants"];
  /**
   * @uxpinpropname LeftIcon
   */
  iconNameLeft?: IconName;
  /**
   * @uxpinpropname RightIcon
   */
  iconNameRight?: IconName;
  isActive?: boolean;
  isDisabled?: boolean;
  isFullWidth?: boolean;
  isLoading?: boolean;
  loadingText?: string;
}

/**
 * @uxpindocurl https://v1.chakra-ui.com/docs/components/form/button#usage
 */
export function Button(props: IProps) {
  const { children, onClick, iconNameLeft, iconNameRight } = props;

  return (
    <ButtonC
      {...props}
      leftIcon={
        iconNameLeft ? IconSelector(iconNameLeft, "JSXElement") : undefined
      }
      rightIcon={
        iconNameRight ? IconSelector(iconNameRight, "JSXElement") : undefined
      }
      onClick={onClick}
    >
      {children}
    </ButtonC>
  );
}
