import { Container as ContainerC } from "@chakra-ui/react";
import { LegacyRef, ReactNode } from "react";
import { PropsBase } from "../../cores/types";

interface IProps extends PropsBase {
  /** @uxpinignoreprop */
  uxpinRef: LegacyRef<HTMLDivElement>;
  /** @uxpinignoreprop */
  children: ReactNode;
  /**
   * @uxpindescription Pixel such as 300px, 100px or Default Theme Sizes such as "md", "2xl".
   **/
  maxW?: string;
  /**
   * https://v1.chakra-ui.com/docs/components/layout/container#centering-the-children
   * @uxpindescription In some cases, the width of the content can be smaller than the container's width. You can use the centerContent prop to center the content. It renders a flexbox with flexDirection set to column and alignItems set to center.
   **/
  centerContent?: boolean;
}

/**
 * @uxpindocurl https://v1.chakra-ui.com/docs/components/layout/container#usage
 */
export function Container(props: IProps) {
  const { uxpinRef, children } = props;

  return (
    <ContainerC {...props} ref={uxpinRef}>
      {children}
    </ContainerC>
  );
}
