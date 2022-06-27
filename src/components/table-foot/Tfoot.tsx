import { Tfoot as TfootC } from "@chakra-ui/react";
import { ReactNode } from "react";
import { PropsBase } from "../../cores/types";

interface IProps extends PropsBase {
  /** @uxpinignoreprop */
  children: ReactNode;
}

/**
 * @uxpindocurl https://v1.chakra-ui.com/docs/components/data-display/table#simple-table
 *
 * @uxpinwrappers
 * SkipContainerWrapper
 */
export function Tfoot(props: IProps) {
  const { children } = props;

  return <TfootC {...props}>{children}</TfootC>;
}
