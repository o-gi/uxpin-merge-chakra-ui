import {
  CheckboxGroup as CheckboxGroupC,
  StackDirection,
  ThemeTypings,
} from "@chakra-ui/react";
import { LegacyRef, ReactNode } from "react";
import { PropsBase } from "../../cores/types";
import { Stack } from "../stack";

interface IProps extends PropsBase {
  /** @uxpinignoreprop */
  uxpinRef: LegacyRef<HTMLDivElement>;
  /** @uxpinignoreprop */
  children: ReactNode;
  defaultValue?: string[];
  colorScheme?: ThemeTypings["colorSchemes"];
  spacing?: string;
  direction?: StackDirection;
  isDisabled?: boolean;
}

/**
 * @uxpindocurl https://v1.chakra-ui.com/docs/components/form/checkbox#checkboxgroup
 */

export function CheckboxGroup(props: IProps) {
  const { children, spacing, direction } = props;

  return (
    <CheckboxGroupC {...props}>
      <Stack spacing={spacing} direction={direction}>
        {children}
      </Stack>
    </CheckboxGroupC>
  );
}
