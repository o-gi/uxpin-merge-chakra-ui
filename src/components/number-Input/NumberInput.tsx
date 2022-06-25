import {
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput as NumberInputC,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/react";
import { LegacyRef } from "react";
import { PropsBase } from "../../cores/types";

interface IProps extends PropsBase {
  /** @uxpinignoreprop */
  uxpinRef: LegacyRef<HTMLDivElement>;
  "aria-labeel"?: string;
  "aria-describedby"?: string;
  "aria-labelledby"?: string;
  id?: string;
  name?: string;
  defaultValue?: number;
  min?: number;
  max?: number;
  step?: number;
  precision?: number;
  keepWithinRange?: boolean;
  clampValueOnBlur?: boolean;
  size?: "xs" | "sm" | "md" | "lg";
  variant?: "outline" | "filled" | "flushed" | "unstyled";
  /** @uxpinpropname onBlue */
  onBlur?: () => void;
  /** @uxpinpropname onChange */
  onChange?: () => void;
  /** @uxpinpropname onFocus */
  onFocus?: () => void;
  /** @uxpinpropname onInvalid */
  onInvalid?: () => void;
}

/**
 * @uxpindocurl https://v1.chakra-ui.com/docs/components/form/number-input#usage
 */
export function NumberInput(props: IProps) {
  const { uxpinRef } = props;

  return (
    <NumberInputC {...props} ref={uxpinRef}>
      <NumberInputField />
      <NumberInputStepper>
        <NumberIncrementStepper />
        <NumberDecrementStepper />
      </NumberInputStepper>
    </NumberInputC>
  );
}
