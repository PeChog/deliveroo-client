import React, { useEffect, useState } from "react";
import axios from "axios";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import Header from "./components/Header/Header";
import Restaurant from "./components/Restaurant/Restaurant";
import Content from "./components/Content/Content";

import "./App.scss";

library.add(faStar);

function App() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://pe-deliveroo-server.herokuapp.com/"
      );
      console.log(response.data);
      setData(response.data);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return isLoading ? (
    <div>en cours de chargement </div>
  ) : (
    <div className="App-container">
      <Header />
      <Restaurant data={data} />
      <Content data={data} />
    </div>
  );
}

export default App;
