import { SimpleGrid as SimpleGridC } from "@chakra-ui/react";
import { LegacyRef, ReactNode } from "react";
import { PropsBase } from "../../cores/types";

interface IProps extends PropsBase {
  /** @uxpinignoreprop */
  uxpinRef: LegacyRef<HTMLDivElement>;
  /** @uxpinignoreprop */
  children: ReactNode;
  columns?: number;
  spacing?: string;
  /**
   * @uxpinpropname -x
   */
  spacingX?: string;
  /**
   * @uxpinpropname -y
   */
  spacingY?: string;
  minChildWidth?: string;
}

/**
 * @uxpindocurl https://v1.chakra-ui.com/docs/components/layout/simple-grid#usage
 */
export function SimpleGrid(props: IProps) {
  const { uxpinRef, children } = props;

  return (
    <SimpleGridC {...props} ref={uxpinRef}>
      {children}
    </SimpleGridC>
  );
}
