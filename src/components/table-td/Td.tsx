import { Td as TdC } from "@chakra-ui/react";
import { ReactNode } from "react";
import { PropsBase } from "../../cores/types";

interface IProps extends PropsBase {
  /**
   * @uxpinpropname Label
   * @uxpinconTdoltype input
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
export function Td(props: IProps) {
  const { children } = props;

  return <TdC {...props}>{children}</TdC>;
}
