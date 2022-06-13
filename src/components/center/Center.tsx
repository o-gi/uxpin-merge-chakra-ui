import {
  Center as CenterC,
  Circle as CircleC,
  Square as SquareC,
} from "@chakra-ui/react";
import { LegacyRef, ReactNode } from "react";
import { PropsBase } from "../../cores/types";

interface IProps extends PropsBase {
  /** @uxpinignoreprop */
  uxpinRef: LegacyRef<HTMLDivElement>;
  children: ReactNode;
  variant?: "Center" | "Square" | "Circle" | undefined;
}

/**
 * @uxpindocurl https://v1.chakra-ui.com/docs/components/data-display/Center#usag
 *
 * @uxpinwrappers
 * SkipContainerWrapper
 */
export function Center(props: IProps) {
  const { uxpinRef, children, variant } = props;

  if (variant === "Center")
    return (
      <CenterC {...props} ref={uxpinRef}>
        {children}
      </CenterC>
    );

  if (variant === "Square")
    return (
      <SquareC {...props} ref={uxpinRef}>
        {children}
      </SquareC>
    );

  if (variant === "Circle")
    return (
      <CircleC {...props} ref={uxpinRef}>
        {children}
      </CircleC>
    );

  return (
    <CenterC {...props} ref={uxpinRef}>
      {children}
    </CenterC>
  );
}
