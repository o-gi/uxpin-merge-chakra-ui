import { PlacementWithLogical, Popover as PopoverC } from "@chakra-ui/react";
import { LegacyRef, ReactNode } from "react";
import { Orientation, PropsBase } from "../../cores/types";

interface IProps extends PropsBase {
  /** @uxpinignoreprop */
  uxpinRef: LegacyRef<HTMLInputElement>;
  /** @uxpinignoreprop */
  children: ReactNode;
  id?: string;
  isLazy?: boolean;
  isOpen?: boolean;
  matchWidth?: boolean;
  direction?: "ltr" | "rtl";
  flip?: boolean;
  gutter?: number;
  arrowPadding: number;
  arrowShadowColor?: string;
  arrowSize?: number;
  hasArrow?: boolean;
  orientation?: Orientation;
  closeDelay?: number;
  defaultIsOpen?: boolean;
  isDisabled?: boolean;
  placement?: PlacementWithLogical;
  openDelay?: number;
  trigger?: "click" | "hover";
  /** @uxpinpropname onOpen */
  onOpen?: () => void;
  /** @uxpinpropname onClose */
  onClose?: () => void;
}

/**
 * @uxpindocurl https://v1.chakra-ui.com/docs/components/overlay/popover#basic-usage
 */
export function Popover(props: IProps) {
  const { children } = props;

  return <PopoverC {...props}>{children}</PopoverC>;
}
