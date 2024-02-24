import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./header";
import Footer from "./footer";
import Pizza from "./pizza";
import MenuHeading from "./MenuHeading";
import Button from "./Button";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  const pizzasList = pizzaData;
  // const pizzasList = []

  const hours = new Date().getHours();
  console.log(hours);
  const open = 14;
  const close = 22;
  const isOpen = hours >= open && hours < close;

  return (
    <div className="container">
      <Header />
      <MenuHeading /> 
      {
        isOpen && 
      pizzasList.length > 0 && (
        <ul className="pizzas">
          {pizzaData.map((pizza) => (
            <Pizza pizzaObject={pizza} />
          ))}
        </ul>
      )}
      {isOpen ? (
        <>
          <Footer />
          <Button />
        </>
      ) : (
        <h1> Please visit us during {open}:00 to {close}:00 hours </h1>
      )}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
