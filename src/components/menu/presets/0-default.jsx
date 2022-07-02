import { MenuButton } from "../../menu-button/";
import { MenuItem } from "../../menu-item/";
import { MenuList } from "../../menu-list/";
import { Menu } from "../Menu";

export default (
  <Menu uxpId="Menu">
    <MenuButton uxpId="MenuButton">Actions</MenuButton>
    <MenuList uxpId="MenuList">
      <MenuItem uxpId="MenuListItem-1">Download</MenuItem>
      <MenuItem uxpId="MenuListItem-2">Create a Copy</MenuItem>
      <MenuItem uxpId="MenuListItem-3">Mark as Draft</MenuItem>
      <MenuItem uxpId="MenuListItem-4">Delete</MenuItem>
      <MenuItem uxpId="MenuListItem-5">Attend a Workshop</MenuItem>
    </MenuList>
  </Menu>
);
