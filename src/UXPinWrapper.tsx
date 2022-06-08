import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "@chakra-ui/theme";
import React from "react";

interface IProps {
  children: React.ReactNode;
}
export default function UXPinWrapper({ children }: IProps) {
  return (
    <React.StrictMode>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </React.StrictMode>
  );
}
