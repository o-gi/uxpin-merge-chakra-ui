import { Circle as CircleC } from "@chakra-ui/react";
import { LegacyRef, ReactNode } from "react";
import { PropsBase } from "../../cores/types";

interface IProps extends PropsBase {
  /** @uxpinignoreprop */
  uxpinRef: LegacyRef<HTMLDivElement>;
  /** @uxpinignoreprop */
  children: ReactNode;
}

/**
 * @uxpindocurl https://v1.chakra-ui.com/docs/components/layout/center#square-and-circle
 *
 * @uxpinwrappers
 * SkipContainerWrapper
 */
export function Circle(props: IProps) {
  const { uxpinRef, children } = props;
  return (
    <CircleC {...props} ref={uxpinRef}>
      {children}
    </CircleC>
  );
}
