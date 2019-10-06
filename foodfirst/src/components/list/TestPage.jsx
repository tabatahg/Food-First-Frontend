import React from "react";
import { FilterList } from "./FilterList";
import { organizations } from "./testList";

const TestPage = () => {
  const organization = FilterList(organizations);
  console.log(organization);
  return <></>;
};

export default TestPage;
