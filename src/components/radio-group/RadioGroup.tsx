import {
  RadioGroup as RadioGroupC,
  StackDirection,
  ThemeTypings,
} from "@chakra-ui/react";
import { StringOrNumber } from "@chakra-ui/utils";
import { LegacyRef, ReactNode } from "react";
import { PropsBase } from "../../cores/types";
import { Stack } from "../stack";

interface IProps extends PropsBase {
  /** @uxpinignoreprop */
  uxpinRef: LegacyRef<HTMLDivElement>;
  /** @uxpinignoreprop */
  children: ReactNode;
  defaultValue?: StringOrNumber;
  colorScheme?: ThemeTypings["colorSchemes"];
  spacing?: string;
  direction?: StackDirection;
  isDisabled?: boolean;
}

/**
 * @uxpindocurl https://v1.chakra-ui.com/docs/components/form/Radio#Radiogroup
 */

export function RadioGroup(props: IProps) {
  const { children, spacing, direction } = props;

  return (
    <RadioGroupC {...props}>
      <Stack spacing={spacing} direction={direction}>
        {children}
      </Stack>
    </RadioGroupC>
  );
}
