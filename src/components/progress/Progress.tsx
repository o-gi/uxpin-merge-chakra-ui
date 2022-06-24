import { Progress as ProgressC, ThemeTypings } from "@chakra-ui/react";
import { PropsBase } from "../../cores/types";

interface IProps extends PropsBase {
  value: number;
  size?: "xs" | "sm" | "md" | "lg";
  colorScheme?: ThemeTypings["colorSchemes"];
  hasStripe?: boolean;
  isIndeterminate?: boolean;
}

/**
 * @uxpindocurl https://v1.chakra-ui.com/docs/components/feedback/progress#usage
 */
export function Progress(props: IProps) {
  return <ProgressC {...props} />;
}
