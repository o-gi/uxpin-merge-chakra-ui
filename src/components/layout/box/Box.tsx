import { Box as BoxC } from "@chakra-ui/react";
import { LegacyRef } from "react";
import { PropsBase, TextAlign } from "../../../cores/types";

interface IProps extends PropsBase {
  /** @uxpinignoreprop */
  uxpinRef: LegacyRef<HTMLDivElement>;
  textAlign: TextAlign;
}

/**
 * @uxpinwrappers
 * SkipContainerWrapper
 *
 * @uxpindocurl https://v1.chakra-ui.com/docs/components/layout/box#usage
 */
export const Box = (props: IProps) => {
  const { uxpinRef, textAlign } = props;
  return (
    <BoxC ref={uxpinRef} {...props} textAlign={textAlign}>
      {props.children}
    </BoxC>
  );
};
