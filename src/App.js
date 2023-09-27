import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [data, setData] = useState("");
  const api = "IYBU0pBFuMtzU9WT5k5fl2eMSQpF5pqkLa2lgF0k";

  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=" + api)
      .then((response) => {
        setData(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  });

  return (
    <div className="App">
      <h1>Nasa Günün Fotoğrafı</h1>
      <img src={data.url} alt={data.title} />
      <h2>{data.title}</h2>
      <p>{data.explanation}</p>
      <p>Date: {data.date}</p>
    </div>
  );
}

export default App;
