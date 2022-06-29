import { PlacementWithLogical, Tooltip as TooltipC } from "@chakra-ui/react";
import { LegacyRef, ReactNode } from "react";
import { PropsBase } from "../../cores/types";

interface IProps extends PropsBase {
  /** @uxpinignoreprop */
  uxpinRef: LegacyRef<HTMLInputElement>;
  /** @uxpinignoreprop */
  children: ReactNode;
  label?: string;
  "aria-label"?: string;
  "aria-describedby"?: string;
  "aria-labelledby"?: string;
  direction?: "ltr" | "rtl";
  arrowPadding: number;
  arrowShadowColor?: string;
  arrowSize?: number;
  hasArrow?: boolean;
  closeDelay?: number;
  defaultIsOpen?: boolean;
  isDisabled?: boolean;
  placement?: PlacementWithLogical;
  openDelay?: number;
  /** @uxpinpropname onBlue */
  onBlur?: () => void;
  /** @uxpinpropname onChange */
  onChange?: () => void;
  /** @uxpinpropname onFocus */
  onFocus?: () => void;
  /** @uxpinpropname onOpen */
  onOpen?: () => void;
  /** @uxpinpropname onClose */
  onClose?: () => void;
}

/**
 * @uxpindocurl https://v1.chakra-ui.com/docs/components/form/Tooltip#usage
 */
export function Tooltip(props: IProps) {
  const { uxpinRef, children } = props;

  return (
    <TooltipC {...props} ref={uxpinRef}>
      {children}
    </TooltipC>
  );
}
