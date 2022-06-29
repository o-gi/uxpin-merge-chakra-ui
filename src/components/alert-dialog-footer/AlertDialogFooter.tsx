import { AlertDialogFooter as AlertDialogFooterC } from "@chakra-ui/react";
import { ReactNode } from "react";
import { PropsBase } from "../../cores/types";

interface IProps extends PropsBase {
  /** @uxpinignoreprop */
  children: ReactNode;
}

/**
 * @uxpindocurl https://v1.chakra-ui.com/docs/components/overlay/alert-dialog#usage
 *
 * @uxpinwrappers
 * SkipContainerWrapper
 */
export function AlertDialogFooter(props: IProps) {
  const { children } = props;

  return <AlertDialogFooterC>{children}</AlertDialogFooterC>;
}
