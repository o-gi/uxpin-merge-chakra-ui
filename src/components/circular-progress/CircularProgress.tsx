import {
  CircularProgress as CircularProgressC,
  CircularProgressLabel,
  ThemeTypings,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { PropsBase } from "../../cores/types";

interface IProps extends PropsBase {
  /**
   * @uxpinpropname Label
   * @uxpincontroltype input
   */
  children?: ReactNode;
  value: number;
  size?: string;
  color?: ThemeTypings["colors"];
  thickness?: string;
  isIndeterminate?: boolean;
}

/**
 * @uxpindocurl https://v1.chakra-ui.com/docs/components/feedback/circular-progress#usage
 *
 * @uxpinwrappers
 * SkipContainerWrapper
 */
export function CircularProgress(props: IProps) {
  const { children } = props;
  return (
    <CircularProgressC {...props}>
      <CircularProgressLabel>{children}</CircularProgressLabel>
    </CircularProgressC>
  );
}
