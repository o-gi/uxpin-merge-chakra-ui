import { CloseButton as CloseButtonC } from "@chakra-ui/react";
import { LegacyRef } from "react";
import { PropsBase } from "../../cores/types";

interface IProps extends PropsBase {
  /** @uxpinignoreprop */
  uxpinRef: LegacyRef<HTMLButtonElement>;
  size?: "lg" | "md" | "sm";
  isDisabled?: boolean;
  onClick?: () => void;
}

/**
 * @uxpindocurl https://v1.chakra-ui.com/docs/components/other/close-button#usage
 *
 * @uxpinwrappers
 * SkipContainerWrapper
 */
export function CloseButton(props: IProps) {
  const { uxpinRef } = props;

  return <CloseButtonC {...props} ref={uxpinRef} />;
}
