import React from "react";

const ImageList = (props) => {
  // const images = props.fatimages.map((arg) => {
  //   return <img alt={arg.description} key={arg.id} src={arg.urls.regular} />;
  // });  destructured refactor below
  const images = props.fatimages.map(({ description, id, urls }) => {
    return <img alt={description} key={id} src={urls.regular} />;
  });
  return <div>{images}</div>;
};

export default ImageList;
