import { defaultSx } from "../../../cores/default-sx";
import { Avatar } from "../../avatar/Avatar";
import { AvatarGroup } from "../AvatarGroup";

export default (
  <AvatarGroup uxpId="AvatarGroup" size="md" max={2} sx={defaultSx}>
    <Avatar
      uxpId="AvatarGroupChild-1"
      name="Ryan Florence"
      src="https://bit.ly/ryan-florence"
    />
    <Avatar
      uxpId="AvatarGroupChild-2"
      name="Segun Adebayo"
      src="https://bit.ly/sage-adebayo"
    />
    <Avatar
      uxpId="AvatarGroupChild-3"
      name="Kent Dodds"
      src="https://bit.ly/kent-c-dodds"
    />
    <Avatar
      uxpId="AvatarGroupChild-4"
      name="Prosper Otemuyiwa"
      src="https://bit.ly/prosper-baba"
    />
    <Avatar
      uxpId="AvatarGroupChild-5"
      name="Christian Nwamba"
      src="https://bit.ly/code-beast"
    />
  </AvatarGroup>
);
