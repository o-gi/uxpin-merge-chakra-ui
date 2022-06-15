import { ButtonGroup as ButtonGroupC, ThemeTypings } from "@chakra-ui/react";
import { LegacyRef, ReactNode } from "react";
import { PropsBase } from "../../cores/types";

interface IProps extends PropsBase {
  /** @uxpinignoreprop */
  uxpinRef: LegacyRef<HTMLDivElement>;
  /** @uxpinignoreprop */
  children: ReactNode;
  isAttached?: boolean;
  isDisabled?: boolean;
  spacing?: string;
  variant?: ThemeTypings["components"]["Button"]["variants"];
}

/**
 * @uxpindocurl https://v1.chakra-ui.com/docs/components/form/button#grouping-buttons
 */

export function ButtonGroup(props: IProps) {
  const { uxpinRef, children } = props;

  return (
    <ButtonGroupC {...props} ref={uxpinRef}>
      {children}
    </ButtonGroupC>
  );
}
