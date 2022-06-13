import { Box as BoxC } from "@chakra-ui/react";
import { LegacyRef, ReactNode } from "react";
import { PropsBase, TextAlign } from "../../cores/types";
import { Heading } from "../heading/";

interface IProps extends PropsBase {
  /** @uxpinignoreprop */
  uxpinRef: LegacyRef<HTMLDivElement>;
  /** @uxpinignoreprop */
  children: ReactNode;
  textAlign?: TextAlign;
}

const boxPlaceholderText = "👇 drag components here";

const BoxPlaceholder = () => {
  return (
    <Heading textAlign="center" border="1px" borderColor="blackAlpha.400" p="2">
      {boxPlaceholderText}
    </Heading>
  );
};

/**
 * @uxpindocurl https://v1.chakra-ui.com/docs/components/layout/box#usage
 *
 * @uxpinwrappers
 * SkipContainerWrapper
 */
export function Box(props: IProps) {
  const { uxpinRef, children, textAlign, border } = props;

  if (children === boxPlaceholderText)
    return (
      <BoxC {...props} ref={uxpinRef}>
        <BoxPlaceholder />
      </BoxC>
    );

  return (
    <BoxC {...props} ref={uxpinRef} textAlign={textAlign}>
      {children ? children : <BoxPlaceholder />}
    </BoxC>
  );
}
