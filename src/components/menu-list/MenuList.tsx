import { MenuList as MenuListC } from "@chakra-ui/react";
import { LegacyRef, ReactNode } from "react";
import { PropsBase } from "../../cores/types";

interface IProps extends PropsBase {
  /** @uxpinignoreprop */
  uxpinRef: LegacyRef<HTMLDivElement>;
  /** @uxpinignoreprop */
  children: ReactNode;
}

/**
 * @uxpindocurl https://v1.chakra-ui.com/docs/components/overlay/menu#usage
 *
 * @uxpinwrappers
 * SkipContainerWrapper
 */
export function MenuList(props: IProps) {
  const { uxpinRef, children } = props;

  return (
    <MenuListC {...props} ref={uxpinRef}>
      {children}
    </MenuListC>
  );
}
