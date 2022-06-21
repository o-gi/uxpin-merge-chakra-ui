import { WrapItem as WrapItemC } from "@chakra-ui/react";
import { LegacyRef, ReactNode } from "react";
import { PropsBase } from "../../cores/types";

interface IProps extends PropsBase {
  /** @uxpinignoreprop */
  uxpinRef: LegacyRef<HTMLLIElement>;
  /** @uxpinignoreprop */
  children: ReactNode;
}

/**
 * @uxpindocurl https://v1.chakra-ui.com/docs/components/layout/wrap#usage
 *
 * @uxpinwrappers
 * SkipContainerWrapper
 */
export function WrapItem(props: IProps) {
  const { uxpinRef, children } = props;

  return (
    <WrapItemC {...props} ref={uxpinRef}>
      {children}
    </WrapItemC>
  );
}
