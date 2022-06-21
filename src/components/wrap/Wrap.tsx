import { Wrap as WrapC } from "@chakra-ui/react";
import { LegacyRef, ReactNode } from "react";
import {
  AlignItems,
  Basis,
  Direction,
  Justify,
  PropsBase,
  Shrink,
  Wrap,
} from "../../cores/types";

interface IProps extends PropsBase {
  /** @uxpinignoreprop */
  uxpinRef: LegacyRef<HTMLDivElement>;
  /** @uxpinignoreprop */
  children: ReactNode;
  align?: AlignItems;
  basis?: Basis;
  direction?: Direction;
  justify?: Justify;
  shrink?: Shrink;
  wrap?: Wrap;
}

/**
 * @uxpindocurl https://v1.chakra-ui.com/docs/components/data-display/Wrap#usage
 *
 * @uxpinwrappers
 * SkipContainerWrapper
 */
export function Wrap(props: IProps) {
  const { uxpinRef, children } = props;

  return (
    <WrapC {...props} ref={uxpinRef}>
      {children}
    </WrapC>
  );
}
