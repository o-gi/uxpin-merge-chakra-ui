import { Breadcrumb as BreadcrumbC } from "@chakra-ui/react";
import { LegacyRef, ReactElement, ReactNode } from "react";
import { PropsBase } from "../../cores/types";

interface IProps extends PropsBase {
  /** @uxpinignoreprop */
  uxpinRef: LegacyRef<HTMLDivElement>;
  /** @uxpinignoreprop */
  children: ReactNode;
  separator?: ReactElement;
  spacing?: string;
}

/**
 * @uxpindocurl https://v1.chakra-ui.com/docs/components/navigation/breadcrumb#usage
 *
 * @uxpinwrappers
 * SkipContainerWrapper
 */
export function Breadcrumb(props: IProps) {
  const { uxpinRef, children } = props;

  return (
    <BreadcrumbC {...props} ref={uxpinRef}>
      {children}
    </BreadcrumbC>
  );
}
