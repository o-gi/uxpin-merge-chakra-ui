import { Tbody } from "../../table-body";
import { TableCaption } from "../../table-caption/TableCaption";
import { Tfoot } from "../../table-foot";
import { Thead } from "../../table-head";
import { Td } from "../../table-td";
import { Th } from "../../table-th";
import { Tr } from "../../table-tr";
import { Table } from "../Table";

export default (
  <Table uxpId="Table">
    <TableCaption uxpId="TableChild-1">
      Imperial to metric conversion factors
    </TableCaption>
    <Thead uxpId="TableHead">
      <Tr uxpId="TableHeadTr">
        <Th uxpId="TableHeadTh-1">To convert</Th>
        <Th uxpId="TableHeadTh-2">into</Th>
        <Th uxpId="TableHeadTh-3" isNumeric>
          multiply by
        </Th>
      </Tr>
    </Thead>
    <Tbody uxpId="TableBody">
      <Tr uxpId="TableBodyTr-1">
        <Td uxpId="TableBodyTd-1">inches</Td>
        <Td uxpId="TableBodyTd-2">millimetres (mm)</Td>
        <Td uxpId="TableBodyTd-3" isNumeric>
          25.4
        </Td>
      </Tr>
      <Tr uxpId="TableBodyTr-1">
        <Td uxpId="TableBodyTd-4">feet</Td>
        <Td uxpId="TableBodyTd-5">centimetres (cm)</Td>
        <Td uxpId="TableBodyTd-6" isNumeric>
          30.48
        </Td>
      </Tr>
      <Tr uxpId="TableBodyTr-1">
        <Td uxpId="TableBodyTd-7">yards</Td>
        <Td uxpId="TableBodyTd-8">metres (m)</Td>
        <Td uxpId="TableBodyTd-9" isNumeric>
          0.91444
        </Td>
      </Tr>
    </Tbody>
    <Tfoot uxpId="TableFoot">
      <Tr uxpId="TableFootTr">
        <Th uxpId="TableFootTh-1">To convert</Th>
        <Th uxpId="TableFootTh-2">into</Th>
        <Th uxpId="TableFootTh-3" isNumeric>
          multiply by
        </Th>
      </Tr>
    </Tfoot>
  </Table>
);
