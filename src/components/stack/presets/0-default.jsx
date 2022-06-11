import { defaultSx } from "../../../cores/default-sx";
import { Box } from "../../box/Box";
import { Stack } from "../Stack";

export default (
  <Stack uxpId="Stack" spacing="0" sx={defaultSx}>
    <Box uxpId="StackChild-1" sx={{ w: "40px", h: "40px", bg: "yellow.200" }}>
      1
    </Box>
    <Box uxpId="StackChild-2" sx={{ w: "40px", h: "40px", bg: "tomato" }}>
      2
    </Box>
    <Box uxpId="StackChild-3" sx={{ w: "40px", h: "40px", bg: "pink.100" }}>
      3
    </Box>
  </Stack>
);
