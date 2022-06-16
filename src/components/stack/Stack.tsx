import {
  Stack as StackC,
  StackDirection,
  StackDivider,
  ThemeTypings,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { AlignItems, Justify, PropsBase, Wrap } from "../../cores/types";

interface IProps extends PropsBase {
  /** @uxpinignoreprop */
  children: ReactNode;
  direction?: StackDirection;
  spacing?: ThemeTypings["space"];
  divider?: boolean;
  dividerColor?: ThemeTypings["colors"];
  align?: AlignItems;
  justify?: Justify;
  wrap?: Wrap;
}

/**
 * @uxpindocurl https://v1.chakra-ui.com/docs/components/layout/Stack#usage
 *
 * @uxpinwrappers
 * SkipContainerWrapper
 */
export function Stack(props: IProps) {
  const { children, divider = false, dividerColor } = props;
  return (
    <div>
      <StackC
        {...props}
        divider={
          divider ? <StackDivider borderColor={dividerColor} /> : undefined
        }
      >
        {children}
      </StackC>
    </div>
  );
}
