import { Select } from "../Select";

const items = [
  { label: "option1", value: "option 1" },
  { label: "option2", value: "option 2" },
  { label: "option3", value: "option 3" },
];

export default (
  <Select uxpId="Select" placeholder="Select option" items={items} />
);
