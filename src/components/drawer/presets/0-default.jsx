import { Button } from "../../button";
import { DrawerBody } from "../../drawer-body";
import { DrawerCloseButton } from "../../drawer-close-button";
import { DrawerContent } from "../../drawer-content";
import { DrawerFooter } from "../../drawer-footer";
import { DrawerHeader } from "../../drawer-header";
import { DrawerOverlay } from "../../drawer-overlay";
import { Input } from "../../input";
import { Drawer } from "../Drawer";

export default (
  <Drawer uxpId="Drawer" open>
    <DrawerOverlay uxpId="DrawerOverlay" />
    <DrawerContent uxpId="DrawerContent">
      <DrawerCloseButton uxpId="DrawerCloseButton" />
      <DrawerHeader uxpId="DrawerHeader" fontSize="lg" fontWeight="bold">
        Create your account
      </DrawerHeader>
      <DrawerBody uxpId="DrawerBody">
        <Input uxpId="DrawerBodyInput" placeholder="Type here..." />
      </DrawerBody>
      <DrawerFooter uxpId="DrawerFooter">
        <Button uxpId="DrawerButton-1" variant="outline" mr={3}>
          Cancel
        </Button>
        <Button uxpId="DrawerButton-2" colorScheme="blue">
          Save
        </Button>
      </DrawerFooter>
    </DrawerContent>
  </Drawer>
);
