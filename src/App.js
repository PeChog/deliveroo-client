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
  const [cart, setCart] = useState([]);

  const total = 0;

  const addToCart = (meal) => {
    const newCart = [...cart];
    const mealExists = newCart.find((elem) => elem.id === meal.id);
    if (mealExists) {
      mealExists.quantity++;
    } else {
      const newMeal = { ...meal, quantity: 1 };
      newCart.push(newMeal);
    }
    setCart(newCart);
  };

  const removeFromCart = (meal) => {
    const newCart = [...cart];
    const mealInTab = newCart.find((elem) => elem.id === meal.id);
    if (mealInTab.quantity === 1) {
      newCart.splice(mealInTab, 1);
    } else {
      mealInTab.quantity--;
    }

    setCart(newCart);
  };

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
      <Content
        data={data}
        addToCart={addToCart}
        cart={cart}
        removeFromCart={removeFromCart}
        total={total}
      />
    </div>
  );
}

export default App;
