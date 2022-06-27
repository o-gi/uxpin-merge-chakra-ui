import { Th as ThC } from "@chakra-ui/react";
import { ReactNode } from "react";
import { PropsBase } from "../../cores/types";

interface IProps extends PropsBase {
  /**
   * @uxpinpropname Label
   * @uxpinconTholtype input
   */
  children: ReactNode;
  isNumeric?: boolean;
}

/**
 * @uxpindocurl https://v1.chakra-ui.com/docs/components/data-display/table#simple-table
 *
 * @uxpinwrappers
 * SkipContainerWrapper
 */
export function Th(props: IProps) {
  const { children } = props;

  return <ThC {...props}>{children}</ThC>;
}
