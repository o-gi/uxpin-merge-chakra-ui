import { Icon as IconC, ThemeTypings } from "@chakra-ui/react";
import { PropsBase } from "../../cores/types";
import { IconName, IconSelector } from "../../IconSelector";

interface IProps extends PropsBase {
  as?: IconName;
  boxSize?: ThemeTypings["sizes"];
}

/**
 * @uxpindocurl https://v1.chakra-ui.com/docs/components/layout/Icon#usage
 */
export function Icon(props: IProps) {
  const { as, boxSize } = props;
  return <IconC {...props} as={IconSelector(as)} boxSize={boxSize} />;
}
