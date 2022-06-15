import { Divider as DividerC, ThemeTypings } from "@chakra-ui/react";
import { LegacyRef } from "react";
import { Orientation, PropsBase } from "../../cores/types";

interface IProps
  extends Pick<PropsBase, "w" | "h" | "borderColor" | "boxShadow"> {
  /** @uxpinignoreprop */
  uxpinRef: LegacyRef<HTMLHRElement>;
  orientation?: Orientation;
  variant?: ThemeTypings["components"]["Divider"]["variants"];
}

/**
 * @uxpindocurl https://v1.chakra-ui.com/docs/components/data-display/divider#usage
 */
export function Divider(props: IProps) {
  const { orientation, variant } = props;

  return <DividerC {...props} orientation={orientation} variant={variant} />;
}
