import React from "react";
import './imageList.css';

const ImageList = (props) => {
  const images = props.images.map(({ urls, id, description }) => {
    return <img src={urls.regular} alt={description} key={id} />;
  });
  return <div className="image-list">{images}</div>;
};

export default ImageList;
