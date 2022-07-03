import { PopoverHeader as PopoverHeaderC } from "@chakra-ui/react";
import { ReactNode } from "react";
import { PropsBase } from "../../cores/types";

interface IProps extends PropsBase {
  /** @uxpinignoreprop */
  children: ReactNode;
}

/**
 * @uxpindocurl https://v1.chakra-ui.com/docs/components/overlay/popover#basic-usage
 *
 * @uxpinwrappers
 * SkipContainerWrapper
 */
export function PopoverHeader(props: IProps) {
  const { children } = props;

  return <PopoverHeaderC {...props}>{children}</PopoverHeaderC>;
}
