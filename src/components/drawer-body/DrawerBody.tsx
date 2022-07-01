import { DrawerBody as DrawerBodyC } from "@chakra-ui/react";
import { ReactNode } from "react";
import { PropsBase } from "../../cores/types";

interface IProps extends PropsBase {
  /** @uxpinignoreprop */
  children: ReactNode;
}

/**
 * @uxpindocurl https://v1.chakra-ui.com/docs/components/overlay/drawer#usage
 *
 * @uxpinwrappers
 * SkipContainerWrapper
 */
export function DrawerBody(props: IProps) {
  const { children } = props;

  return <DrawerBodyC>{children}</DrawerBodyC>;
}
