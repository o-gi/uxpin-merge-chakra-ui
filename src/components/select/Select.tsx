import { Select as SelectC, ThemeTypings } from "@chakra-ui/react";
import { LegacyRef } from "react";
import { PropsBase } from "../../cores/types";

interface SelectItem {
  value: string;
  label: string;
}

interface IProps extends PropsBase {
  /** @uxpinignoreprop */
  uxpinRef: LegacyRef<HTMLSelectElement>;
  items?: SelectItem[];
  placeholder?: string;
  /** @uxpinpropname onChange */
  onChange?: () => void;
  colorScheme?: ThemeTypings["colorSchemes"];
  errorBorderColor?: ThemeTypings["colors"];
  focusBorderColor?: ThemeTypings["colors"];
  isDisabled?: boolean;
  isFullWidth?: boolean;
  isInvalid?: boolean;
  isReadOnly?: boolean;
  isRequired?: boolean;
  size?: "lg" | "md" | "sm" | "xs";
  variant?: ThemeTypings["components"]["Select"]["variants"];
}

/**
 * @uxpindocurl https://v1.chakra-ui.com/docs/components/form/select#usage
 */
export function Select(props: IProps) {
  const { uxpinRef, items, onChange } = props;

  return (
    <SelectC {...props} ref={uxpinRef} onChange={onChange}>
      {items?.map((item) => {
        return (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        );
      })}
    </SelectC>
  );
}
