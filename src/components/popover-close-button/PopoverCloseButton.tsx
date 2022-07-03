import { PopoverCloseButton as PopoverCloseButtonC } from "@chakra-ui/react";
import { PropsBase } from "../../cores/types";

interface IProps extends PropsBase {}

/**
 * @uxpindocurl https://v1.chakra-ui.com/docs/components/overlay/popover#basic-usage
 */
export function PopoverCloseButton(props: IProps) {
  return <PopoverCloseButtonC {...props} />;
}
