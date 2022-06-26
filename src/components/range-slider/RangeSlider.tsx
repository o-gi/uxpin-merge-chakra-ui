import {
  RangeSlider as RangeSliderC,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  ThemeTypings,
} from "@chakra-ui/react";
import { LegacyRef } from "react";
import { Orientation, PropsBase } from "../../cores/types";

interface IProps extends PropsBase {
  /** @uxpinignoreprop */
  uxpinRef: LegacyRef<HTMLDivElement>;
  "aria-label"?: string[];
  "aria-labelledby"?: string[];
  "aria-valuetext"?: string[];
  id?: string;
  name?: string;
  defaultValue?: number[];
  colorScheme?: ThemeTypings["colorSchemes"];
  min?: number;
  max?: number;
  step?: number;
  size?: "lg" | "md" | "sm";
  orientation?: Orientation;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  isReversed?: boolean;
  /** @uxpinpropname onChange */
  onChange?: () => void;
  /** @uxpinpropname onChangeEnd */
  onChangeEnd?: () => void;
  /** @uxpinpropname onChangeStart */
  onChangeStart?: () => void;
}

/**
 * @uxpindocurl https://v1.chakra-ui.com/docs/components/form/range-slider#usage
 */
export function RangeSlider(props: IProps) {
  const { uxpinRef } = props;

  return (
    <RangeSliderC {...props} ref={uxpinRef}>
      <RangeSliderTrack>
        <RangeSliderFilledTrack />
      </RangeSliderTrack>
      <RangeSliderThumb index={0} />
      <RangeSliderThumb index={1} />
    </RangeSliderC>
  );
}
