import { Input as InputC, ThemeTypings } from "@chakra-ui/react";
import { PropsBase } from "../../cores/types";

interface IProps extends PropsBase {
  placeholder?: string;
  size?: "xs" | "sm" | "md" | "lg";
  variant?: ThemeTypings["components"]["Input"]["variants"];
  isDisabled?: boolean;
  isInvalid?: boolean;
  isFullWidth?: boolean;
  isReadOnly?: boolean;
}

/**
 * @uxpindocurl https://v1.chakra-ui.com/docs/components/form/input#usage
 */
export function Input(props: IProps) {
  const {} = props;

  return <InputC {...props} />;
}
