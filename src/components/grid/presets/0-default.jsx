import { GridItem } from "../../grid-item/";
import { Grid } from "../Grid";

export default (
  <Grid
    uxpId="Grid"
    h="200px"
    templateRows="repeat(2, 1fr)"
    templateColumns="repeat(5, 1fr)"
    gap={4}
  >
    <GridItem uxpId="GridChild-1" rowSpan={2} colSpan={1} bg="tomato" />
    <GridItem uxpId="GridChild-2" colSpan={2} bg="papayawhip" />
    <GridItem uxpId="GridChild-3" colSpan={2} bg="papayawhip" />
    <GridItem uxpId="GridChild-4" colSpan={4} bg="tomato" />
  </Grid>
);
