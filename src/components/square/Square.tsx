import { Square as SquareC } from "@chakra-ui/react";
import { LegacyRef, ReactNode } from "react";
import { PropsBase } from "../../cores/types";

interface IProps extends PropsBase {
  /** @uxpinignoreprop */
  uxpinRef: LegacyRef<HTMLDivElement>;
  children: ReactNode;
  size?: string;
}

/**
 * @uxpindocurl https://v1.chakra-ui.com/docs/components/layout/center#square-and-circle
 *
 * @uxpinwrappers
 * SkipContainerWrapper
 */
export function Square(props: IProps) {
  const { uxpinRef, children, size } = props;
  return (
    <SquareC {...props} ref={uxpinRef} size={size}>
      {children}
    </SquareC>
  );
}