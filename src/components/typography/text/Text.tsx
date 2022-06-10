import { SystemProps, Text as TextC, ThemeTypings } from "@chakra-ui/react";
import { LegacyRef, ReactNode } from "react";
import { Orientation, PropsBase, TextAlign } from "../../../cores/types";

interface IProps extends PropsBase {
  /** @uxpinignoreprop */
  uxpinRef: LegacyRef<HTMLDivElement>;
  /**
   * @uxpinpropname  Text
   * @uxpincontroltype input
   */
  children: ReactNode;
  fontSize: ThemeTypings["fontSizes"];
  fontWeight: ThemeTypings["fontWeights"];
  as:
    | "i"
    | "u"
    | "abbr"
    | "cite"
    | "del"
    | "em"
    | "ins"
    | "kbd"
    | "mark"
    | "s"
    | "samp"
    | "sub"
    | "sup";
  textAlign: TextAlign;
  casing: SystemProps["textTransform"];
  colorScheme: ThemeTypings["colorSchemes"];
  decoration: SystemProps["textDecoration"];
  orientation: Orientation;
}

/**
 * @uxpindocurl https://v1.chakra-ui.com/docs/components/typography/text#changing-the-font-size
 */
export const Text = (props: IProps) => {
  const {
    as,
    textAlign,
    casing,
    decoration,
    orientation,
    fontSize,
    fontWeight,
  } = props;
  return (
    <TextC
      {...props}
      as={as}
      textAlign={textAlign}
      casing={casing}
      decoration={decoration}
      orientation={orientation}
      fontSize={fontSize}
      fontWeight={fontWeight}
    >
      {props.children}
    </TextC>
  );
};
