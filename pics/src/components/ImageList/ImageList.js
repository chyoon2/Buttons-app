import React from "react";
import "../ImageList.css";
import ImageCard from "../ImageCard";

const ImageList = (props) => {
  // const images = props.fatimages.map((arg) => {
  //   return <img alt={arg.description} key={arg.id} src={arg.urls.regular} />;
  // });  destructured refactor below
  const images = props.fatimages.map((arg) => {
    return <ImageCard key={arg.id} image={arg} />;
  });
  return <div className='image-list'>{images}</div>;
};

export default ImageList;
