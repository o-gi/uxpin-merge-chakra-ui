import { Grid as GridC } from "@chakra-ui/react";
import { LegacyRef, ReactNode } from "react";
import { PropsBase } from "../../cores/types";

interface IProps extends PropsBase {
  /** @uxpinignoreprop */
  uxpinRef: LegacyRef<HTMLDivElement>;
  /** @uxpinignoreprop */
  children: ReactNode;
  area?: string;
  templateRows: string;
  templateColumns: string;
  gap: number;
}

/**
 * @uxpindocurl https://v1.chakra-ui.com/docs/components/layout/grid#template-columns
 *
 * @uxpinwrappers
 * SkipContainerWrapper
 */
export function Grid(props: IProps) {
  const { uxpinRef, children } = props;

  return (
    <GridC {...props} ref={uxpinRef}>
      {children}
    </GridC>
  );
}
