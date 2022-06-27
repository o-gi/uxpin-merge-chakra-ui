import {
  Table as TableC,
  TableContainer,
  ThemeTypings,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { PropsBase } from "../../cores/types";

interface IProps extends PropsBase {
  /** @uxpinignoreprop */
  children: ReactNode;
  colorScheme?: ThemeTypings["colorSchemes"];
  size?: "sm" | "md" | "lg";
  variant?: ThemeTypings["components"]["Table"]["variants"];
}

/**
 * @uxpindocurl https://v1.chakra-ui.com/docs/components/data-display/table#simple-table
 */
export function Table(props: IProps) {
  const { children } = props;

  return (
    <TableContainer>
      <TableC {...props}>{children}</TableC>
    </TableContainer>
  );
}
