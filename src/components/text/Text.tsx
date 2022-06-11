import { SystemProps, Text as TextC, ThemeTypings } from "@chakra-ui/react";
import { ReactNode } from "react";
import { Orientation, PropsBase, TextAlign } from "../../cores/types";

interface IProps extends PropsBase {
  /**
   * @uxpinpropname  Label
   * @uxpincontroltype input
   */
  children: ReactNode;
  fontSize?: ThemeTypings["fontSizes"];
  fontWeight?: ThemeTypings["fontWeights"];
  textAlign?: TextAlign;
  as?:
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
  casing?: SystemProps["textTransform"];
  decoration?: SystemProps["textDecoration"];
  orientation?: Orientation;
}

/**
 * @uxpindocurl https://v1.chakra-ui.com/docs/components/typography/text#changing-the-font-size
 */
export const Text = (props: IProps) => {
  const {
    children,
    fontSize,
    fontWeight,
    textAlign,
    as,
    casing,
    decoration,
    orientation,
  } = props;
  return (
    <TextC
      {...props}
      as={as}
      fontSize={fontSize}
      fontWeight={fontWeight}
      textAlign={textAlign}
      casing={casing}
      decoration={decoration}
      orientation={orientation}
    >
      {children}
    </TextC>
  );
};
