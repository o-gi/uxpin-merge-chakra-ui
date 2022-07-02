import { Menu as MenuC, PlacementWithLogical } from "@chakra-ui/react";
import { ReactNode } from "react";
import { PropsBase } from "../../cores/types";

interface IProps extends PropsBase {
  /** @uxpinignoreprop */
  children: ReactNode;
  id?: string;
  isOpen?: boolean;
  placement?: PlacementWithLogical;
  gutter?: number;
  arrowPadding?: number;
  autoSelect?: boolean;
  closeOnBlur?: boolean;
  closeOnSelect?: boolean;
  computePositionOnMount?: boolean;
  defaultIsOpen?: boolean;
  direction?: "ltr" | "rtl";
  flip?: boolean;
  /**
   * @uxpinpropname onClose
   */
  onClose?: () => void;
  /**
   * @uxpinpropname onOpen
   */
  onOpen?: () => void;
}

/**
 * @uxpindocurl https://v1.chakra-ui.com/docs/components/overlay/menu#usage
 *
 * @uxpinwrappers
 * SkipContainerMenuper
 */
export function Menu(props: IProps) {
  const { children } = props;

  return <MenuC {...props}>{children}</MenuC>;
}
