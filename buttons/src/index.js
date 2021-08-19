import React from "react";
import ReactDom from "react-dom";
import CommentDetail from "./CommentDetail";
import faker from "faker";

const App = () => {
  return (
    <div className='ui container comments'>
      <CommentDetail
        author='Pam'
        timeAgo='Today at 4'
        text='hell yeah'
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author='Jason'
        timeAgo='Today at 3'
        text='hell no'
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author='Carlsbad'
        timeAgo='tofay'
        text='hell OK'
        avatar={faker.image.avatar()}
      />
    </div>
  );
};

ReactDom.render(<App />, document.querySelector("#root"));
