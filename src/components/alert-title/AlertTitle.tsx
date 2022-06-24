import { AlertTitle as AlertTitleC, ThemeTypings } from "@chakra-ui/react";
import { ReactNode } from "react";
import { PropsBase } from "../../cores/types";

interface IProps extends PropsBase {
  /**
   * @uxpinpropname Label
   * @uxpincontroltype input
   */
  children: ReactNode;
  fontSize?: ThemeTypings["fontSizes"];
  fontWeight?: ThemeTypings["fontWeights"];
}

/**
 * @uxpindocurl https://v1.chakra-ui.com/docs/components/feedback/alert#usage
 */
export function AlertTitle(props: IProps) {
  const { children } = props;
  return <AlertTitleC {...props}>{children}</AlertTitleC>;
}
