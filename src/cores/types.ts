import { ThemeTypings } from "@chakra-ui/react";
import { CSSObject } from "@emotion/serialize";
import { ReactNode } from "react";

export interface PropsBase {
  children: ReactNode;
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
