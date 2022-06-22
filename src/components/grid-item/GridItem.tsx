import { GridItem as GridItemC } from "@chakra-ui/react";
import { LegacyRef, ReactNode } from "react";
import { PropsBase } from "../../cores/types";

interface IProps extends PropsBase {
  /** @uxpinignoreprop */
  uxpinRef: LegacyRef<HTMLDivElement>;
  /** @uxpinignoreprop */
  children: ReactNode;
  area?: string;
  colEnd?: number;
  colSpan?: number;
  colStart?: number;
  rowEnd?: number;
  rowSpan?: number;
  rowStart?: number;
}

/**
 * @uxpindocurl https://v1.chakra-ui.com/docs/components/layout/grid#template-columns
 *
 * @uxpinwrappers
 * SkipContainerWrapper
 */
export function GridItem(props: IProps) {
  const { uxpinRef, children } = props;

  return (
    <GridItemC {...props} ref={uxpinRef}>
      {children}
    </GridItemC>
  );
}
