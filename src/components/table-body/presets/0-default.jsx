import { Td } from "../../table-td";
import { Tr } from "../../table-tr";
import { Tbody } from "../Tbody";

export default (
  <Tbody uxpId="Tbody">
    <Tr uxpId="TbodyChildTr-1">
      <Td uxpId="TbodyChildTd-1">inches</Td>
      <Td uxpId="TbodyChildTd-2">millimetres (mm)</Td>
      <Td uxpId="TbodyChildTd-3" isNumeric>
        25.4
      </Td>
    </Tr>
    <Tr uxpId="TbodyChildTr-2">
      <Td uxpId="TbodyChildTd-4">feet</Td>
      <Td uxpId="TbodyChildTd-5">centimetres (cm)</Td>
      <Td uxpId="TbodyChildTd-6" isNumeric>
        30.48
      </Td>
    </Tr>
    <Tr uxpId="TbodyChildTr-3">
      <Td uxpId="TbodyChildTd-7">yards</Td>
      <Td uxpId="TbodyChildTd-8">metres (m)</Td>
      <Td uxpId="TbodyChildTd-9" isNumeric>
        0.91444
      </Td>
    </Tr>
  </Tbody>
);
