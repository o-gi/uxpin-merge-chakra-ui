import { FormControl as FormControlC } from "@chakra-ui/react";
import { LegacyRef, ReactNode } from "react";
import { PropsBase } from "../../cores/types";

interface IProps extends PropsBase {
  /** @uxpinignoreprop */
  uxpinRef: LegacyRef<HTMLDivElement>;
  /** @uxpinignoreprop */
  children: ReactNode;
  isDisabled?: boolean;
  isInvalid?: boolean;
  isReadOnly?: boolean;
  isRequired?: boolean;
}

/**
 * @uxpindocurl https://v1.chakra-ui.com/docs/components/form/form-control#usage
 */
export function FormControl(props: IProps) {
  const { uxpinRef, children } = props;

  return (
    <FormControlC {...props} ref={uxpinRef}>
      {children}
    </FormControlC>
  );
}
