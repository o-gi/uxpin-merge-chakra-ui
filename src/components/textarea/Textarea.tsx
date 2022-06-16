import { Textarea as TextareaC, ThemeTypings } from "@chakra-ui/react";
import { PropsBase } from "../../cores/types";

interface IProps extends PropsBase {
  placeholder?: string;
  size?: "xs" | "sm" | "md" | "lg";
  variant?: ThemeTypings["components"]["Textarea"]["variants"];
  isDisabled?: boolean;
  isInvalid?: boolean;
  isFullWidth?: boolean;
  isReadOnly?: boolean;
}

/**
 * @uxpindocurl https://v1.chakra-ui.com/docs/components/form/textarea#usage
 */
export function Textarea(props: IProps) {
  const {} = props;

  return <TextareaC {...props} />;
}
