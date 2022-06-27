import { Tr as TrC } from "@chakra-ui/react";
import { ReactNode } from "react";
import { PropsBase } from "../../cores/types";

interface IProps extends PropsBase {
  children: ReactNode;
}

/**
 * @uxpindocurl https://v1.chakra-ui.com/docs/components/data-display/table#simple-table
 *
 * @uxpinwrappers
 * SkipContainerWrapper
 */
export function Tr(props: IProps) {
  const { children } = props;

  return <TrC {...props}>{children}</TrC>;
}
