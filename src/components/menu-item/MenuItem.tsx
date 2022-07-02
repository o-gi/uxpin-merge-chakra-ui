import { MenuItem as MenuItemC } from "@chakra-ui/react";
import { LegacyRef, ReactNode } from "react";
import { PropsBase } from "../../cores/types";

interface IProps extends PropsBase {
  /** @uxpinignoreprop */
  uxpinRef: LegacyRef<HTMLDivElement>;
  /**
   * @uxpinpropname Label
   * @uxpincontroltype input
   */
  children: ReactNode;
  closeOnSelect?: boolean;
  isChecked?: boolean;
  isDisabled?: boolean;
  isFocusable?: boolean;
  value?: string;
}

/**
 * @uxpindocurl https://v1.chakra-ui.com/docs/components/overlay/menu#usage
 *
 * @uxpinwrappers
 * SkipContainerWrapper
 */
export function MenuItem(props: IProps) {
  const { children } = props;

  return <MenuItemC {...props}>{children}</MenuItemC>;
}
