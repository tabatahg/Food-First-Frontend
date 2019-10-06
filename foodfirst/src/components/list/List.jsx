import React from "react";
import OrganizationsList from "./OrganizationsList";
import { organizations } from "../../data/organization";
import { FilterList } from "./FilterList";

const List = () => {
  const organizedList = FilterList(organizations);
  return <OrganizationsList organizations={organizedList} />;
};

export default List;
