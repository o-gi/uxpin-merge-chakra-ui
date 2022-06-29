import { BreadcrumbLink as BreadcrumbLinkC } from "@chakra-ui/react";
import { LegacyRef, ReactNode } from "react";
import { PropsBase } from "../../cores/types";

interface IProps extends PropsBase {
  /** @uxpinignoreprop */
  uxpinRef: LegacyRef<HTMLAnchorElement>;
  /**
   * @uxpinpropname Label
   * @uxpincontroltype input
   */
  children: ReactNode;
  href?: string;
}

/**
 * @uxpindocurl https://v1.chakra-ui.com/docs/components/navigation/breadcrumb#usage
 *
 * @uxpinwrappers
 * SkipContainerWrapper
 */
export function BreadcrumbLink(props: IProps) {
  const { uxpinRef, children } = props;

  return (
    <BreadcrumbLinkC {...props} ref={uxpinRef}>
      {children}
    </BreadcrumbLinkC>
  );
}
