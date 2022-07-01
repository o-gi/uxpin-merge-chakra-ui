import { DrawerFooter as DrawerFooterC } from "@chakra-ui/react";
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
export function DrawerFooter(props: IProps) {
  const { children } = props;

  return <DrawerFooterC>{children}</DrawerFooterC>;
}
