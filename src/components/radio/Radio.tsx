import { Radio as RadioC, ThemeTypings } from "@chakra-ui/react";
import { LegacyRef, ReactNode } from "react";
import { PropsBase } from "../../cores/types";

interface IProps extends PropsBase {
  /** @uxpinignoreprop */
  uxpinRef: LegacyRef<HTMLInputElement>;
  /**
   * @uxpinpropname Label
   * @uxpincontroltype input
   */
  children: ReactNode;
  value?: string;
  ariaLabel: string;
  name?: string;
  isChecked?: boolean;
  onChange?: () => void;
  size?: "sm" | "md" | "lg";
  colorScheme?: ThemeTypings["colorSchemes"];
  spacing?: string;
  isFullWidth?: boolean;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  isInvalid?: boolean;
}

/**
 * @uxpindocurl https://v1.chakra-ui.com/docs/components/form/Radio#usage
 *
 * @uxpinwrappers
 * SkipContainerWrapper
 */
export function Radio(props: IProps) {
  const { uxpinRef, children, ariaLabel } = props;

  return (
    <RadioC {...props} ref={uxpinRef} aria-label={ariaLabel}>
      {children}
    </RadioC>
  );
}
