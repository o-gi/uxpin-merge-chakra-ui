import { Skeleton as SkeletonC, ThemeTypings } from "@chakra-ui/react";
import { LegacyRef, ReactNode } from "react";
import { PropsBase } from "../../cores/types";

interface IProps extends PropsBase {
  /** @uxpinignoreprop */
  uxpinRef: LegacyRef<HTMLDivElement>;
  /** @uxpinignoreprop */
  children: ReactNode;
  startColor?: ThemeTypings["colors"];
  endColor?: ThemeTypings["colors"];
  isLoaded?: boolean;
  fadeDuration?: number;
  speed?: number;
}

/**
 * @uxpindocurl https://v1.chakra-ui.com/docs/components/feedback/skeleton#usage
 */
export function Skeleton(props: IProps) {
  const { uxpinRef, children } = props;

  return (
    <SkeletonC {...props} ref={uxpinRef}>
      {children}
    </SkeletonC>
  );
}
