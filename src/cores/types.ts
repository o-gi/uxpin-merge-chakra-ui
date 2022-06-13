import { ThemeTypings } from "@chakra-ui/react";
import { CSSObject } from "@emotion/serialize";

export interface PropsBase {
  bg?: ThemeTypings["colors"];
  color?: ThemeTypings["colors"];
  /**
   * @uxpinpropname Width
   */
  w?: ThemeTypings["space"];
  /**
   * @uxpinpropname Height
   */
  h?: ThemeTypings["space"];
  /**
   * @uxpinpropname Margin
   */
  m?: ThemeTypings["space"];
  /**
   * @uxpinpropname -t
   */
  mt?: ThemeTypings["space"];
  /**
   * @uxpinpropname -r
   */
  mr?: ThemeTypings["space"];
  /**
   * @uxpinpropname -b
   */
  mb?: ThemeTypings["space"];
  /**
   * @uxpinpropname -l
   */
  ml?: ThemeTypings["space"];
  /**
   * @uxpinpropname -x
   */
  mx?: ThemeTypings["space"];
  /**
   * @uxpinpropname -y
   */
  my?: ThemeTypings["space"];
  /**
   * @uxpinpropname Padding
   */
  p?: ThemeTypings["space"];
  /**
   * @uxpinpropname -t
   */
  pt?: ThemeTypings["space"];
  /**
   * @uxpinpropname -r
   */
  pr?: ThemeTypings["space"];
  /**
   * @uxpinpropname -b
   */
  pb?: ThemeTypings["space"];
  /**
   * @uxpinpropname -l
   */
  pl?: ThemeTypings["space"];
  /**
   * @uxpinpropname -x
   */
  px?: ThemeTypings["space"];
  /**
   * @uxpinpropname -y
   */
  py?: ThemeTypings["space"];
  border?: ThemeTypings["borders"];
  /**
   * @uxpinpropname -color
   */
  borderColor?: ThemeTypings["colors"];
  /**
   * @uxpinpropname -top
   */
  borderTop?: ThemeTypings["borders"];
  /**
   * @uxpinpropname -right
   */
  borderRight?: ThemeTypings["borders"];
  /**
   * @uxpinpropname -btm
   */
  borderBottom?: ThemeTypings["borders"];
  /**
   * @uxpinpropname -left
   */
  borderLeft?: ThemeTypings["borders"];
  /**
   * @uxpinpropname Radius
   */
  borderRadius?: ThemeTypings["radii"];
  /**
   * @uxpinpropname -top-left
   */
  borderTopLeftRadius?: ThemeTypings["radii"];
  /**
   * @uxpinpropname -top-tight
   */
  borderTopRightRadius?: ThemeTypings["radii"];
  /**
   * @uxpinpropname -btm-right
   */
  borderBottomRightRadius?: ThemeTypings["radii"];
  /**
   * @uxpinpropname -btm-left
   */
  borderBottomLeftRadius?: ThemeTypings["radii"];
  /**
   * @uxpinpropname Shadow
   */
  boxShadow?: ThemeTypings["shadows"];
  sx?: CSSObject;
}

export type TextAlign = "left" | "center" | "right";

export type Orientation = "horizontal" | "vertical";

export type ObjectPosition = "top" | "right" | "center" | "bottom" | "left";

export type ObjectFit = "contain" | "cover" | "fill" | "none" | "scale-down";

export type AlignItems =
  | "flex-start"
  | "flex-end"
  | "center"
  | "stretch"
  | "baseline";

export type Justify =
  | "flex-start"
  | "flex-end"
  | "center"
  | "space-between"
  | "space-around"
  | "space-evenly";

export type Wrap = "nowrap" | "wrap" | "wrap-reverse";
