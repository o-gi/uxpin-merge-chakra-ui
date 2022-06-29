import { BreadcrumbItem as BreadcrumbItemC } from "@chakra-ui/react";
import { LegacyRef, ReactNode } from "react";
import { PropsBase } from "../../cores/types";

interface IProps extends PropsBase {
  /** @uxpinignoreprop */
  uxpinRef: LegacyRef<HTMLLIElement>;
  /** @uxpinignoreprop */
  children: ReactNode;
  isCurrentPage?: boolean;
  isLastChild?: boolean;
}

/**
 * @uxpindocurl https://v1.chakra-ui.com/docs/components/navigation/breadcrumb#usage
 *
 * @uxpinwrappers
 * SkipContainerWrapper
 */
export function BreadcrumbItem(props: IProps) {
  const { uxpinRef, children } = props;

  return (
    <BreadcrumbItemC {...props} ref={uxpinRef}>
      {children}
    </BreadcrumbItemC>
  );
}
