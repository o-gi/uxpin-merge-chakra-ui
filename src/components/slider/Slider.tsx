import {
  Slider as SliderC,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  ThemeTypings,
} from "@chakra-ui/react";
import { LegacyRef } from "react";
import { Orientation, PropsBase } from "../../cores/types";

interface IProps extends PropsBase {
  /** @uxpinignoreprop */
  uxpinRef: LegacyRef<HTMLDivElement>;
  "aria-labeel"?: string;
  "aria-describedby"?: string;
  "aria-valuetext"?: string;
  id?: string;
  name?: string;
  defaultValue?: number;
  colorScheme?: ThemeTypings["components"]["Slider"]["variants"];
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
 * @uxpindocurl https://v1.chakra-ui.com/docs/components/form/slider#usage
 */
export function Slider(props: IProps) {
  const { uxpinRef } = props;

  return (
    <SliderC {...props} ref={uxpinRef}>
      <SliderTrack>
        <SliderFilledTrack />
      </SliderTrack>
      <SliderThumb />
    </SliderC>
  );
}
