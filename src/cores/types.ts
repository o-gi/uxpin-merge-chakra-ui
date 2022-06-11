import { ThemeTypings } from "@chakra-ui/react";
import { CSSObject } from "@emotion/serialize";

export interface PropsBase {
  sx: CSSObject;
  color?: ThemeTypings["colors"];
  border?: ThemeTypings["borders"];
  borderColor?: ThemeTypings["colors"];
  /**
   * @uxpinpropname Radius
   */
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
