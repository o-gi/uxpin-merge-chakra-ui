import { Checkbox } from "../../checkbox";
import { CheckboxGroup } from "../CheckboxGroup";

export default (
  <CheckboxGroup
    uxpId="CheckboxGroup"
    spacing="5"
    direction="row"
    defaultValue={["c1", "c3"]}
  >
    <Checkbox uxpId="CheckboxGroupCHild-1" value="c1">
      Checkbox 1
    </Checkbox>
    <Checkbox uxpId="CheckboxGroupCHild-2" value="c2">
      Checkbox 2
    </Checkbox>
    <Checkbox uxpId="CheckboxGroupCHild-3" value="c3">
      Checkbox 3
    </Checkbox>
  </CheckboxGroup>
);
