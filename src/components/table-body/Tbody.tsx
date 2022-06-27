import { Tbody as TbodyC } from "@chakra-ui/react";
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
export function Tbody(props: IProps) {
  const { children } = props;

  return <TbodyC {...props}>{children}</TbodyC>;
}
