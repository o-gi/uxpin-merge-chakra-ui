import { TableCaption as TableCaptionC } from "@chakra-ui/react";
import { ReactNode } from "react";
import { PropsBase } from "../../cores/types";

interface IProps extends PropsBase {
  /**
   * @uxpinpropname Label
   * @uxpincontroltype input
   */
  children: ReactNode;
  placement?: "top" | "bottom";
}

/**
 * @uxpindocurl https://v1.chakra-ui.com/docs/components/data-display/table#simple-table
 *
 * @uxpinwrappers
 * SkipContainerWrapper
 */
export function TableCaption(props: IProps) {
  const { children } = props;

  return <TableCaptionC {...props}>{children}</TableCaptionC>;
}
