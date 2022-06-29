import { AlertDialogBody } from "../../alert-dialog-body";
import { AlertDialogFooter } from "../../alert-dialog-footer";
import { AlertDialogHeader } from "../../alert-dialog-header";
import { Button } from "../../button";
import { AlertDialog } from "../AlertDialog";

export default (
  <AlertDialog uxpId="AlertDialog">
    <AlertDialogHeader
      uxpId="AlertDialogHeader"
      fontSize="lg"
      fontWeight="bold"
    >
      Delete Customer
    </AlertDialogHeader>
    <AlertDialogBody uxpId="AlertDialogBody">
      Are you sure? You can't undo this action afterwards.
    </AlertDialogBody>
    <AlertDialogFooter uxpId="AlertDialogFooter">
      <Button uxpId="AlertDialogButton-1">Cancel</Button>
      <Button uxpId="AlertDialogButton-2" colorScheme="red" ml={3}>
        Delete
      </Button>
    </AlertDialogFooter>
  </AlertDialog>
);
