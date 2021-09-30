import React, { useState } from "react";
import Accordion from "./Accordion";
import Search from "./Search";
import Dropdown from "./Dropdown";
import Translate from "./Translate";
import Convert from "./Convert";

const items = [
  { title: "what is React", content: "react is a front end js framework" },
  { title: "why", content: "react is a fav" },
  { title: "how?", content: "by components" },
];
const options = [
  { label: "the color red", value: "red" },
  { label: "the color green", value: "green" },
  { label: "the color pink", value: "pink" },
];

export default () => {
  return (
    <div>
      <Translate />
    </div>
  );
};
