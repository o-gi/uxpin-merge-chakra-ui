import { Badge as BadgeC, ThemeTypings } from "@chakra-ui/react";
import { LegacyRef, ReactNode } from "react";
import { PropsBase } from "../../cores/types";

interface IProps extends PropsBase {
  /** @uxpinignoreprop */
  uxpinRef: LegacyRef<HTMLDivElement>;
  /**
   * @uxpinpropname Label
   * @uxpincontroltype input
   */
  children: ReactNode;
  colorScheme?: ThemeTypings["colorSchemes"];
  variant?: ThemeTypings["components"]["Badge"]["variants"];
}

/**
 * @uxpindocurl https://v1.chakra-ui.com/docs/components/data-display/Badge#usage
 *
 * @uxpinwrappers
 * SkipContainerWrapper
 */
export function Badge(props: IProps) {
  const { uxpinRef, children } = props;

  return (
    <BadgeC {...props} ref={uxpinRef}>
      {children}
    </BadgeC>
  );
}
