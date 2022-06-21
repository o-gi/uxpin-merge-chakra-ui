import { Center } from "../../center/";
import { WrapItem } from "../../wrap-item/";
import { Wrap } from "../Wrap";

export default (
  <Wrap uxpId="Wrap" w="600px">
    <WrapItem uxpId="WrapItem-1">
      <Center uxpId="WrapItemChild-1" w="180px" h="80px" bg="red.200">
        Box 1
      </Center>
    </WrapItem>
    <WrapItem uxpId="WrapItem-2">
      <Center uxpId="WrapItemChild-2" w="180px" h="80px" bg="green.200">
        Box 2
      </Center>
    </WrapItem>
    <WrapItem uxpId="WrapItem-3">
      <Center uxpId="WrapItemCHild-3" w="180px" h="80px" bg="tomato">
        Box 3
      </Center>
    </WrapItem>
    <WrapItem uxpId="WrapItem-4">
      <Center uxpId="WrapItemCHild-4" w="180px" h="80px" bg="blue.200">
        Box 4
      </Center>
    </WrapItem>
  </Wrap>
);
