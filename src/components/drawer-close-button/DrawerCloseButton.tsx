import { DrawerCloseButton as DrawerCloseButtonC } from "@chakra-ui/react";
import { ReactNode } from "react";
import { PropsBase } from "../../cores/types";

interface IProps extends PropsBase {
  /** @uxpinignoreprop */
  children: ReactNode;
  onClick?: () => void;
}

/**
 * @uxpindocurl https://v1.chakra-ui.com/docs/components/overlay/drawer#usage
 *
 * @uxpinwrappers
 * SkipContainerWrapper
 */
export function DrawerCloseButton(props: IProps) {
  return <DrawerCloseButtonC />;
}
