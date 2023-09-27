import React from "react";

function Images(props) {
  const { title, explanation, media_type, url, date } = props.viewData;
  return (
    <>
      <h1>Nasa Günün Fotoğrafı</h1>
      <img src={url} alt={title} />
      <h2>{title}</h2>
      <p>{explanation}</p>
      <p>Date: {date}</p>
    </>
  );
}
export default Images;
