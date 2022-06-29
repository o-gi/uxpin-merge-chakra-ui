import { BreadcrumbItem } from "../../breadcrumb-item";
import { BreadcrumbLink } from "../../breadcrumb-link";
import { Breadcrumb } from "../Breadcrumb";

export default (
  <Breadcrumb uxpId="Breadcrumb" separator="-">
    <BreadcrumbItem uxpId="BreadcrumbChild-1">
      <BreadcrumbLink href="#" uxpId="BreadcrumbChild-1-1">
        Home
      </BreadcrumbLink>
    </BreadcrumbItem>

    <BreadcrumbItem uxpId="BreadcrumbChild-2">
      <BreadcrumbLink uxpId="BreadcrumbChild-2-1" href="#">
        Docs
      </BreadcrumbLink>
    </BreadcrumbItem>

    <BreadcrumbItem uxpId="BreadcrumbChild-3" isCurrentPage>
      <BreadcrumbLink uxpId="BreadcrumbChild-3-1" href="#">
        Breadcrumb
      </BreadcrumbLink>
    </BreadcrumbItem>
  </Breadcrumb>
);
