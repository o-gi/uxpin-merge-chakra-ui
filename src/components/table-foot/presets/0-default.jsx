import { Th } from "../../table-th";
import { Tr } from "../../table-tr";
import { Tfoot } from "../Tfoot";

export default (
  <Tfoot uxpId="Tfoot">
    <Tr uxpId="TfootChildTr">
      <Th uxpId="TfootChildTh-1">To convert</Th>
      <Th uxpId="TfootChildTh-2">into</Th>
      <Th uxpId="TfootChildTh-3" isNumeric>
        multiply by
      </Th>
    </Tr>
  </Tfoot>
);
