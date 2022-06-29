import { Box } from "../../box";
import { SimpleGrid } from "../SimpleGrid";

export default (
  <SimpleGrid uxpId="SimpleGrid" columns={2} spacing="10">
    <Box uxpId="SimpleGridCHild-1" bg="tomato" h="80px">
      Box 1
    </Box>
    <Box uxpId="SimpleGridChild-2" bg="tomato" h="80px">
      Box 2
    </Box>
    <Box uxpId="SimpleGridChild-3" bg="tomato" h="80px">
      Box 3
    </Box>
    <Box uxpId="SimpleGridChild-4" bg="tomato" h="80px">
      Box 4
    </Box>
    <Box uxpId="SimpleGridChild-5" bg="tomato" h="80px">
      Box 5
    </Box>
  </SimpleGrid>
);
