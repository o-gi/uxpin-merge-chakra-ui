import {
  Heading as HeadingC,
  SystemProps,
  ThemeTypings,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { Orientation, PropsBase, TextAlign } from "../../../cores/types";

interface IProps extends PropsBase {
  /**
   * @uxpinpropname  Label
   * @uxpincontroltype input
   */
  children: ReactNode;
  fontSize?: ThemeTypings["fontSizes"];
  fontWeight?: ThemeTypings["fontWeights"];
  textAlign?: TextAlign;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  casing?: SystemProps["textTransform"];
  decoration?: SystemProps["textDecoration"];
  orientation?: Orientation;
}

/**
 * @uxpindocurl https://v1.chakra-ui.com/docs/components/typography/text#changing-the-font-size
 */
export const Heading = (props: IProps) => {
  const { children, fontSize, fontWeight, textAlign, as, orientation } = props;
  return (
    <HeadingC
      {...props}
      as={as}
      fontSize={fontSize}
      fontWeight={fontWeight}
      textAlign={textAlign}
      orientation={orientation}
    >
      {children}
    </HeadingC>
  );
};
