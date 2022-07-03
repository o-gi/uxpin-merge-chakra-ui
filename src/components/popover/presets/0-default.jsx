import { Button } from "../../button";
import { PopoverArrow } from "../../popover-arrow";
import { PopoverBody } from "../../popover-body";
import { PopoverCloseButton } from "../../popover-close-button";
import { PopoverContent } from "../../popover-content/PopoverContent";
import { PopoverHeader } from "../../popover-header";
import { PopoverTrigger } from "../../popover-trigger";
import { Popover } from "../Popover";

export default (
  <Popover uxpId="Popover">
    <PopoverTrigger uxpId="PopoverTrigger">
      <Button uxpId="PopoverTriggerButton">Trigger</Button>
    </PopoverTrigger>
    <PopoverContent uxpId="PopoverContent">
      <PopoverArrow uxpId="PopoverArrow" />
      <PopoverCloseButton uxpId="PopoverCloseButton" />
      <PopoverHeader uxpId="PopoverHeader">Confirmation!</PopoverHeader>
      <PopoverBody uxpId="PopoverBody">
        Are you sure you want to have that milkshake?
      </PopoverBody>
    </PopoverContent>
  </Popover>
);
