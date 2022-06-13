import { defaultSx } from "../../../cores/default-sx";
import { Icon } from "../../icon/";
import { Square } from "../Square";

export default (
  <Square
    uxpId="Square"
    size="40px"
    bg="purple.700"
    color="white"
    sx={defaultSx}
  >
    <Icon uxpId="SquareChild-1" />
  </Square>
);
