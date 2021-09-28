import React from "react";
import Accordion from "./Accordion";
import Search from "./Search";

const items = [
  { title: "what is React", content: "react is a front end js framework" },
  { title: "why", content: "react is a fav" },
  { title: "how?", content: "by components" },
];

export default () => {
  return (
    <div>
      <Search></Search>
    </div>
  );
};
{
  /* <Accordion items={items}></Accordion> */
}
