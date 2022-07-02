import {
  Modal as ModalC,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface IProps {
  /** @uxpinignoreprop */
  children: ReactNode;
  open: boolean;
  id?: string;
  motionPreset?: "slideInBottom" | "slideInRight" | "scale" | "none";
  size?:
    | "xs"
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "6xl"
    | "full";
  isCentered?: boolean;
  autoFocus?: boolean;
  blockScrollOnMount?: boolean;
  closeOnEsc?: boolean;
  closeOnOverlayClick?: boolean;
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
 * @uxpindocurl https://v1.chakra-ui.com/docs/components/overlay/modal#usage
 *
 * @uxpinwrappers
 * SkipContainerWrapper
 */
export function Modal(props: IProps) {
  const { children, open = false } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();

  React.useEffect(() => {
    if (open) onOpen();
  }, [open]);

  return (
    <ModalC isOpen={isOpen} onClose={onClose} {...props}>
      <ModalOverlay>
        <ModalContent>{children}</ModalContent>
      </ModalOverlay>
    </ModalC>
  );
}
