import { Checkbox as CheckboxC, ThemeTypings } from "@chakra-ui/react";
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
  size?: "sm" | "md" | "lg";
  colorScheme?: ThemeTypings["colorSchemes"];
  spacing?: string;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  isInvalid?: boolean;
}

/**
 * @uxpindocurl https://v1.chakra-ui.com/docs/components/form/checkbox#usage
 *
 * @uxpinwrappers
 * SkipContainerWrapper
 */
export function Checkbox(props: IProps) {
  const { uxpinRef, children, ariaLabel } = props;

  return (
    <CheckboxC {...props} ref={uxpinRef} aria-label={ariaLabel}>
      {children}
    </CheckboxC>
  );
}
