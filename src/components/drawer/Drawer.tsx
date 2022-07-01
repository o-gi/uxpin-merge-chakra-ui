import {
  Drawer as DrawerC,
  SlideDirection,
  useDisclosure,
} from "@chakra-ui/react";
import React, { ReactNode, useRef } from "react";

interface IProps {
  /** @uxpinignoreprop */
  children: ReactNode;
  open: boolean;
  id?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "full";
  placement?: SlideDirection;
  autoFocus?: boolean;
  blockScrollOnMount?: boolean;
  closeOnEsc?: boolean;
  closeOnOverlayClick?: boolean;
  isFullHeight?: boolean;

  /**
   * @uxpinpropname onCloseComplete
   */
  onCloseComplete?: () => void;
  /**
   * @uxpinpropname onEsc
   */
  onEsc?: () => void;
  /**
   * @uxpinpropname onOverlayClick
   */
  onOverlayClick?: () => void;
}

/**
 * @uxpindocurl https://v1.chakra-ui.com/docs/components/overlay/drawer#usage
 *
 * @uxpinwrappers
 * SkipContainerWrapper
 */
export function Drawer(props: IProps) {
  const { children, open = false, onCloseComplete } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);

  React.useEffect(() => {
    if (open) onOpen();
    else onClose();
  }, [open]);

  return (
    <DrawerC
      isOpen={isOpen}
      finalFocusRef={btnRef}
      onClose={onClose}
      {...props}
    >
      {children}
    </DrawerC>
  );
}
