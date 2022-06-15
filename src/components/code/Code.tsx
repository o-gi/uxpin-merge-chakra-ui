import { Code as CodeC, ThemeTypings } from "@chakra-ui/react";
import { LegacyRef, ReactNode } from "react";
import { PropsBase } from "../../cores/types";

interface IProps extends PropsBase {
  /** @uxpinignoreprop */
  uxpinRef: LegacyRef<HTMLDivElement>;
  /**
   * @uxpinpropname Label
   * @uxpincontroltype input
   */
  children: ReactNode;
  colorScheme?: ThemeTypings["colorSchemes"];
  variant?: ThemeTypings["components"]["Code"]["variants"];
}

/**
 * @uxpindocurl https://v1.chakra-ui.com/docs/components/data-display/code#usage
 *
 * @uxpinwrappers
 * SkipContainerWrapper
 */
export function Code(props: IProps) {
  const { uxpinRef, children } = props;

  return (
    <CodeC {...props} ref={uxpinRef}>
      {children}
    </CodeC>
  );
}
