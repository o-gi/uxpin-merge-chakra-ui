import { PopoverContent as PopoverContentC } from "@chakra-ui/react";
import { ReactNode } from "react";
import { PropsBase } from "../../cores/types";

interface IProps extends PropsBase {
  /** @uxpinignoreprop */
  children: ReactNode;
}

/**
 * @uxpindocurl https://v1.chakra-ui.com/docs/components/overlay/popover#basic-usage
 */
export function PopoverContent(props: IProps) {
  const { children } = props;

  return <PopoverContentC {...props}>{children}</PopoverContentC>;
}
