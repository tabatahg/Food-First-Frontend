import React from "react";
import OrganizationsList from "./OrganizationsList";
import { organizations } from "../../data/organization";

const List = () => {
  return <OrganizationsList organizations={organizations} />;
};

export default List;
