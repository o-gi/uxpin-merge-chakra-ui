import { MenuButton as MenuButtonC } from "@chakra-ui/react";
import { ReactNode } from "react";
import { PropsBase } from "../../cores/types";
import { Button } from "../button/Button";

interface IProps extends PropsBase {
  /** @uxpinignoreprop */
  children: ReactNode;
}
/**
 * @uxpindocurl https://v1.chakra-ui.com/docs/components/overlay/menu#usage
 *
 * @uxpinwrappers
 * SkipContainerWrapper
 */
export function MenuButton(props: IProps) {
  const { children } = props;

  return (
    <MenuButtonC as={Button} iconNameRight="ChevronDownIcon" {...props}>
      {children}
    </MenuButtonC>
  );
}
