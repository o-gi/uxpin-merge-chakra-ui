import {
  Alert as AlertC,
  AlertDescription,
  AlertIcon,
  ThemeTypings,
} from "@chakra-ui/react";
import { LegacyRef, ReactNode } from "react";
import { PropsBase } from "../../cores/types";
import { AlertTitle } from "../alert-title";

interface IProps extends PropsBase {
  /** @uxpinignoreprop */
  uxpinRef: LegacyRef<HTMLDivElement>;
  /**
   * @uxpinpropname Description
   */
  children: ReactNode;
  title?: string;
  colorScheme?: ThemeTypings["colorSchemes"];
  status?: "success" | "info" | "warning" | "error";
  variant?: "subtle" | "left-accent" | "top-accent" | "solid";
}

/**
 * @uxpindocurl https://v1.chakra-ui.com/docs/components/feedback/alert#usage
 */
export function Alert(props: IProps) {
  const { uxpinRef, children, title } = props;

  return (
    <AlertC {...props} ref={uxpinRef}>
      <AlertIcon />
      {title && <AlertTitle>{title}</AlertTitle>}
      <AlertDescription>{children}</AlertDescription>
    </AlertC>
  );
}
