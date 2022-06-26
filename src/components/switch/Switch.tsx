import { Switch as SwitchC, ThemeTypings } from "@chakra-ui/react";
import { LegacyRef } from "react";
import { PropsBase } from "../../cores/types";

interface IProps extends PropsBase {
  /** @uxpinignoreprop */
  uxpinRef: LegacyRef<HTMLInputElement>;
  "aria-labeel"?: string;
  "aria-describedby"?: string;
  "aria-labelledby"?: string;
  id?: string;
  name?: string;
  colorScheme?: ThemeTypings["components"]["Switch"]["variants"];
  defaultChecked?: boolean;
  size?: "sm" | "md" | "lg";
  spacing?: number;
  tabIndex?: number;
  isDisabled?: boolean;
  isInvalid?: boolean;
  isReadOnly?: boolean;
  isRequired?: boolean;
  /** @uxpinpropname onBlue */
  onBlur?: () => void;
  /** @uxpinpropname onChange */
  onChange?: () => void;
  /** @uxpinpropname onFocus */
  onFocus?: () => void;
}

/**
 * @uxpindocurl https://v1.chakra-ui.com/docs/components/form/switch#usage
 */
export function Switch(props: IProps) {
  const { uxpinRef } = props;

  return <SwitchC {...props} ref={uxpinRef} />;
}
