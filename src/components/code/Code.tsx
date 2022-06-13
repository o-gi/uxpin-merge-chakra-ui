import { Code as CodeC, ThemeTypings } from "@chakra-ui/react";
import { LegacyRef, ReactNode } from "react";
import { PropsBase } from "../../cores/types";

interface IProps extends PropsBase {
  /** @uxpinignoreprop */
  uxpinRef: LegacyRef<HTMLDivElement>;
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
  const { uxpinRef, children, colorScheme, variant } = props;

  return (
    <CodeC
      {...props}
      ref={uxpinRef}
      colorScheme={colorScheme}
      variant={variant}
    >
      {children}
    </CodeC>
  );
}
