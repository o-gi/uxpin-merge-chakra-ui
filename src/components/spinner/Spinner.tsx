import { Spinner as SpinnerC, ThemeTypings } from "@chakra-ui/react";
import { PropsBase } from "../../cores/types";

interface IProps extends PropsBase {
  size?: "2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "full";
  speed?: string;
  thickness?: string;
  emptyColor?: ThemeTypings["colors"];
}

/**
 * @uxpindocurl https://v1.chakra-ui.com/docs/components/feedback/spinner#usage
 *
 * @uxpinwrappers
 * SkipContainerWrapper
 */
export function Spinner(props: IProps) {
  return <SpinnerC {...props} />;
}
