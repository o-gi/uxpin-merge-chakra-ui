import { PinInput as PinInputC } from "@chakra-ui/react";
import { ReactNode } from "react";
import { PropsBase } from "../../cores/types";

interface IProps extends PropsBase {
  /** @uxpinignoreprop */
  children: ReactNode;
  type: "number" | "alphanumeric";
  id?: string;
  name?: string;
  placeholder?: string;
  defaultValue?: string;
  otp?: boolean;
  mask?: boolean;
  manageFocus?: boolean;
  size?: "xs" | "sm" | "md" | "lg";
  variant?: "outline" | "flushed" | "filled" | "unstyled";
  isDisabled?: boolean;
  isInvalid?: boolean;
  /** @uxpinpropname onChange */
  onChange?: () => void;
  /** @uxpinpropname onComplete */
  onComplete?: () => void;
}

/**
 * @uxpindocurl https://v1.chakra-ui.com/docs/components/form/pin-input#usage
 */
export function PinInput(props: IProps) {
  const { children } = props;
  return <PinInputC {...props}>{children}</PinInputC>;
}
