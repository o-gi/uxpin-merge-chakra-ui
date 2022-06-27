import {
  PinInputField as PinInputFieldC,
  ThemeTypings,
} from "@chakra-ui/react";
import { PropsBase } from "../../cores/types";

interface IProps extends PropsBase {
  id?: string;
  name?: string;
  variant?: ThemeTypings["components"]["Input"]["variants"];
}

/**
 * @uxpindocurl https://v1.chakra-ui.com/docs/components/form/pin-input#usage
 */
export function PinInputField(props: IProps) {
  const {} = props;

  return <PinInputFieldC {...props} />;
}
