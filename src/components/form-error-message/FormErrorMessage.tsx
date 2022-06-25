import {
  FormErrorMessage as FormErrorMessageC,
  ThemeTypings,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { PropsBase } from "../../cores/types";

interface IProps extends PropsBase {
  /**
   * @uxpinpropname Label
   */
  children: ReactNode;
  htmlFor: string;
  fontSize?: ThemeTypings["fontSizes"];
  fontWeight?: ThemeTypings["fontWeights"];
}

/**
 * @uxpindocurl https://v1.chakra-ui.com/docs/components/form/form-control#usage
 */
export function FormErrorMessage(props: IProps) {
  const { children } = props;
  return <FormErrorMessageC {...props}>{children}</FormErrorMessageC>;
}
