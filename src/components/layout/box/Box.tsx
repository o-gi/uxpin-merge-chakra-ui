import { Box as BoxC } from "@chakra-ui/react";
import { LegacyRef, ReactNode } from "react";
import { PropsBase, TextAlign } from "../../../cores/types";

interface IProps extends PropsBase {
  /** @uxpinignoreprop */
  uxpinRef: LegacyRef<HTMLDivElement>;
  children: ReactNode;
  textAlign?: TextAlign;
}

/**
 * @uxpinwrappers
 * SkipContainerWrapper
 *
 * @uxpindocurl https://v1.chakra-ui.com/docs/components/layout/box#usage
 */
export const Box = (props: IProps) => {
  const { uxpinRef, children, textAlign } = props;
  return (
    <BoxC {...props} ref={uxpinRef} textAlign={textAlign}>
      {children}
    </BoxC>
  );
};
