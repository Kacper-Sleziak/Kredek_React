import '../css/App.css';
import Nav from './Nav'
import Pizza from './Pizza'

import React, {useState} from "react";

function App() {

  const [pizzas, setPizzas] = useState(
    [
      {
        name: "hawajska",
        spicy: 2,
        time: 15,
        price: 26,
      },

      {
        name: "peporni",
        spicy: 8,
        time: 25,
        price: 35,
      },

      {
        name: "afrykanska",
        spicy: 10,
        time: 35,
        price: 40,
      },

      {
        name: "serowa",
        spicy: 1,
        time: 15,
        price: 55,
      },

    ]
  )

  const [price, setPrice] = useState(0);
  const [spicy, setSpicy] = useState(0);
  const [time, setTime] = useState(0);
  const [name, setName] = useState("");

  const renderPizzas = () => {
    return(
      pizzas.map((pizza) => (
        <Pizza
        name={pizza.name}
        price={pizza.price}
        spicy={pizza.spicy}
        time={pizza.time}
        />
      ))
    );
  }

  const createPizza = () => {
    const pizza = {
      name: name,
      spicy: spicy,
      time: time,
      price: price,
    }

    setPizzas([...pizzas, pizza]);

    setPrice(0);
    setSpicy(0);
    setTime(0);
    setName("");
  }

  return (
    <>
      <Nav/>
      <div 
      id="main_box"
      >
        {renderPizzas()}
      </div>

      <div
      id="inputs"
      >
        <div>
          <span>Nazwa</span>
          <input
          onChange={(e) => setName(e.target.value)}
          >

          </input>
        </div>
        
        <div>
          <span>Cena</span>
          <input
          onChange={(e) => setPrice(e.target.value)}
          >
          </input>
        </div>
        
        <div>
          <span>Ostrość</span>
          <input
          onChange={(e) => setSpicy(e.target.value)}
          >

          </input>
        </div>
        
        <div>
          <span>Czas przygotowania</span>
          <input
          onChange={(e) => setTime(e.target.value)}
          >
          </input>
        </div>

        <button
        id="pizza_button"
        onClick={(e) => createPizza()}
        >
        Dodaj pizze
        </button>
      </div>

    </>
  );
}

export default App;
