import {
  SkeletonCircle as SkeletonCircleC,
  ThemeTypings,
} from "@chakra-ui/react";
import { PropsBase } from "../../cores/types";

interface IProps extends PropsBase {
  boxSize?: string;
  startColor?: ThemeTypings["colors"];
  endColor?: ThemeTypings["colors"];
  isLoaded?: boolean;
  fadeDuration?: number;
  speed?: number;
}

/**
 * @uxpindocurl https://v1.chakra-ui.com/docs/components/feedback/skeleton#circle-and-text-skeleton
 */
export function SkeletonCircle(props: IProps) {
  return <SkeletonCircleC {...props} />;
}
