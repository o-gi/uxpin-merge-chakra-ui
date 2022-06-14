import { Kbd as KbdC } from "@chakra-ui/react";
import { ReactNode } from "react";
import { PropsBase } from "../../cores/types";

interface IProps extends PropsBase {
  /**
   * @uxpinpropname Label
   * @uxpincontroltype input
   */
  children: ReactNode;
}

/**
 * @uxpindocurl https://v1.chakra-ui.com/docs/components/data-display/Kbd#usa
 *
 * @uxpinwrappers
 * SkipContainerWrapper
 */
export function Kbd(props: IProps) {
  const { children } = props;

  return <KbdC {...props}>{children}</KbdC>;
}
