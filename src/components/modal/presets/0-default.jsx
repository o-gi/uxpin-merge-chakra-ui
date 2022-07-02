import { Button } from "../../button";
import { ModalBody } from "../../modal-body";
import { ModalFooter } from "../../modal-footer";
import { ModalHeader } from "../../modal-header";
import { Modal } from "../Modal";

export default (
  <Modal uxpId="Modal">
    <ModalHeader uxpId="ModalHeader" fontSize="lg" fontWeight="bold">
      Modal Title
    </ModalHeader>
    <ModalBody uxpId="ModalBody">
      Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco
      deserunt aute id consequat veniam incididunt duis in sint irure nisi.
      Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor esse
      quis.
    </ModalBody>
    <ModalFooter uxpId="ModalFooter">
      <Button uxpId="ModalButton-1">Close</Button>
      <Button uxpId="ModalButton-2" colorScheme="red" ml={3}>
        Action
      </Button>
    </ModalFooter>
  </Modal>
);
