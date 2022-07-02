import { ModalFooter as ModalFooterC } from "@chakra-ui/react";
import { ReactNode } from "react";
import { PropsBase } from "../../cores/types";

interface IProps extends PropsBase {
  /** @uxpinignoreprop */
  children: ReactNode;
}

/**
 * @uxpindocurl https://v1.chakra-ui.com/docs/components/overlay/modal#usage
 *
 * @uxpinwrappers
 * SkipContainerWrapper
 */
export function ModalFooter(props: IProps) {
  const { children } = props;

  return <ModalFooterC>{children}</ModalFooterC>;
}
