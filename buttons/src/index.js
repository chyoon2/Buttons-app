import React from "react";
import ReactDom from "react-dom";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";
import faker from "faker";

const App = () => {
  return (
    <div className='ui container comments'>
      <ApprovalCard>
        <div>
          <h4>Warning</h4>
        </div>
        Are you sure?
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author='Pam'
          timeAgo='Today at 4'
          text='hell yeah'
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author='Jason'
          timeAgo='Today at 3'
          text='hell no'
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author='Carlsbad'
          timeAgo='tofay'
          text='hell OK'
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDom.render(<App />, document.querySelector("#root"));
