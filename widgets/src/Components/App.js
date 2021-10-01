import React, { useState } from "react";
import Accordion from "./Accordion";
import Search from "./Search";
import Dropdown from "./Dropdown";
import Translate from "./Translate";
import Convert from "./Convert";
import Route from "./Route";
import Header from "./Header";

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
  const [selected, setSelected] = useState(options[0]);
  return (
    <div>
      <Header />
      <Route path='/'>
        <Accordion items={items} />
      </Route>
      <Route path='/list'>
        <Search />
      </Route>
      <Route path='/dropdown'>
        <Dropdown
          label='sleecet color'
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path='/translate'>
        <Translate />
      </Route>
    </div>
  );
};
