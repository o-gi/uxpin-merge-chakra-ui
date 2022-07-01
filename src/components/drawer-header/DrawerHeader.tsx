import { DrawerHeader as DrawerHeaderC } from "@chakra-ui/react";
import { ReactNode } from "react";
import { PropsBase } from "../../cores/types";

interface IProps extends PropsBase {
  /** @uxpinignoreprop */
  children: ReactNode;
}

/**
 * @uxpindocurl https://v1.chakra-ui.com/docs/components/overlay/drawer#basic-drawer
 *
 * @uxpinwrappers
 * SkipContainerWrapper
 */
export function DrawerHeader(props: IProps) {
  const { children } = props;

  return <DrawerHeaderC>{children}</DrawerHeaderC>;
}
