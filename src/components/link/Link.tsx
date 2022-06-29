import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Link as LinkC } from "@chakra-ui/react";
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
  /**
   * @uxpindescription If true, the link will open in new tab
   **/
  isExternal?: boolean;
  onClick?: () => void;
}

/**
 * @uxpindocurl https://v1.chakra-ui.com/docs/components/navigation/link#usage
 *
 * @uxpinwrappers
 * SkipContainerWrapper
 */
export function Link(props: IProps) {
  const { uxpinRef, children, isExternal } = props;

  return (
    <LinkC {...props} ref={uxpinRef}>
      {children}
      {isExternal && <ExternalLinkIcon mx="2px" />}
    </LinkC>
  );
}
