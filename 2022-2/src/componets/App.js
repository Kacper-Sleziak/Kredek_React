import { useState, useEffect } from "react";
import Nav from './Nav'
import '../css/App.css'
import Pizza from './Pizza'
import { render } from "@testing-library/react";

function App() {
  // State z lista obiektow pizza do wysiwetlania
  const [pizzas, setPizzas] = useState(
    [
      {
        name: "peporni",
        spicy: 3,
        time: 15,
        price: 35,
      },
      {
        name: "capricciosa",
        spicy: 2,
        time: 25,
        price: 40,
      }, 
      {
        name: "margarita",
        spicy: 6,
        time: 10,
        price: 22,
      },

      {
        name: "hawajska",
        spicy: 0,
        time: 40,
        price: 50,
      },

    ]
  )
  
  // staty zapisujące zmiany tet fieldow
  const [price, setPrice] = useState(0);
  const [spicy, setSpicy] = useState(0);
  const [time, setTime] = useState(0);
  const [name, setName] = useState("");
  
  // funkcja odpowiadajaca za wysiwetlanie komponetow pizzy
  const renderPizzas = () => {
    return(
      pizzas.map((pizza) => (
        <Pizza
          key={pizza.name}
          name={pizza.name}
          spiciness={pizza.spicy}
          price={pizza.price}
          time={pizza.time}
        />
      ))
    );
  }
  
  const createPizza = () => {
    var newPizza = {
      name: name,
      spicy: spicy,
      time: time,
      price: price,
    }

    setPizzas([...pizzas, newPizza])

    setPrice(0);
    setSpicy(0);
    setTime(0);
    setName("")

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
          <span>Name</span>
          <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          >

          </input>
        </div>
        
        <div>
          <span>Price</span>
          <input
          onChange={(e) => setPrice(e.target.value)}
          value={price}
          >
          </input>
        </div>
        
        <div>
          <span>Spicness</span>
          <input
          onChange={(e) => setSpicy(e.target.value)}
          value={spicy}
          >

          </input>
        </div>
        
        <div>
          <span>Time</span>
          <input
          onChange={(e) => setTime(e.target.value)}
          value={time}
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
