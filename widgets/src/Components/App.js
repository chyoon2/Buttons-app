import React from "react";
import Accordion from "./Accordion";

const items = [
  { title: "what is React", content: "react is a front end js framework" },
  { title: "why", content: "react is a fav" },
  { title: "how?", content: "by components" },
];

export default () => {
  return (
    <div>
      <Accordion items={items}></Accordion>
    </div>
  );
};
