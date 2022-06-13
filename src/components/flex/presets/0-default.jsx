import { defaultSx } from "../../../cores/default-sx";
import { Box } from "../../box/";
import { FlexSpacer } from "../../flex-spacer";
import { Flex } from "../Flex";

export default (
  <Flex uxpId="Flex" sx={defaultSx}>
    <Box uxpId="FlexCHild-1" p="4" bg="red.400" sx={defaultSx}>
      Box 1
    </Box>
    <FlexSpacer uxpId="FlexCHildSpacer" />
    <Box uxpId="FlexChild-2" p="4" bg="green.400" sx={defaultSx}>
      Box 2
    </Box>
  </Flex>
);
