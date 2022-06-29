import {
  AlertDialog as AlertDialogC,
  AlertDialogContent,
  AlertDialogOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React, { ReactNode, useRef } from "react";

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
 * @uxpindocurl https://v1.chakra-ui.com/docs/components/overlay/alert-dialog#usage
 *
 * @uxpinwrappers
 * SkipContainerWrapper
 */
export function AlertDialog(props: IProps) {
  const { children, open = false } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef(null);

  React.useEffect(() => {
    if (open) onOpen();
  }, [open]);

  return (
    <AlertDialogC
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
      {...props}
    >
      <AlertDialogOverlay>
        <AlertDialogContent>{children}</AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialogC>
  );
}
