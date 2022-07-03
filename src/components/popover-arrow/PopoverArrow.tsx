import { PopoverArrow as PopoverArrowC } from "@chakra-ui/react";
import { PropsBase } from "../../cores/types";

interface IProps extends PropsBase {}

/**
 * @uxpindocurl https://v1.chakra-ui.com/docs/components/overlay/popover#basic-usage
 */
export function PopoverArrow(props: IProps) {
  return <PopoverArrowC {...props} />;
}
