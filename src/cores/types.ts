import { ThemeTypings } from "@chakra-ui/react";
import { CSSObject } from "@emotion/serialize";
import { ReactNode } from "react";

export interface PropsBase {
  children: ReactNode;
  sx: CSSObject;
  // w: ThemeTypings["sizes"];
  // h: ThemeTypings["sizes"];
  // minW: ThemeTypings["sizes"];
  // maxW: ThemeTypings["sizes"];
  // minH: ThemeTypings["sizes"];
  // maxH: ThemeTypings["sizes"];
  // bg: ThemeTypings["colors"];
  // p: ThemeTypings["sizes"];
  // pt: ThemeTypings["sizes"];
  // pr: ThemeTypings["sizes"];
  // pb: ThemeTypings["sizes"];
  // pl: ThemeTypings["sizes"];
  // px: ThemeTypings["sizes"];
  // py: ThemeTypings["sizes"];
  // m: ThemeTypings["sizes"];
  // mt: ThemeTypings["sizes"];
  // mr: ThemeTypings["sizes"];
  // mb: ThemeTypings["sizes"];
  // ml: ThemeTypings["sizes"];
  // mx: ThemeTypings["sizes"];
  // my: ThemeTypings["sizes"];
  color: ThemeTypings["colors"];
  border: ThemeTypings["borders"];
  borderColor: ThemeTypings["colors"];
  /**
   * @uxpinpropname Radius
   */
  /**
   * @uxpinpropname -top
   */
  borderTop: ThemeTypings["borders"];
  /**
   * @uxpinpropname -right
   */
  borderRight: ThemeTypings["borders"];
  /**
   * @uxpinpropname -btm
   */
  borderBottom: ThemeTypings["borders"];
  /**
   * @uxpinpropname -left
   */
  borderLeft: ThemeTypings["borders"];
  /**
   * @uxpinpropname Radius
   */
  borderRadius: ThemeTypings["radii"];
  /**
   * @uxpinpropname -top-left
   */
  borderTopLeftRadius: ThemeTypings["radii"];
  /**
   * @uxpinpropname -top-tight
   */
  borderTopRightRadius: ThemeTypings["radii"];
  /**
   * @uxpinpropname -btm-right
   */
  borderBottomRightRadius: ThemeTypings["radii"];
  /**
   * @uxpinpropname -btm-left
   */
  borderBottomLeftRadius: ThemeTypings["radii"];
  /**
   * @uxpinpropname Shadow
   */
  boxShadow: ThemeTypings["shadows"];
}
