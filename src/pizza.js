import "./index.css";
import React from "react";

export default function Pizza({ pizzaObject }) {
  return (
    <main>
      <div className={`pizza  ${pizzaObject.soldOut ? "sold-out" : ""}`}>
        <li>
          <img src={pizzaObject.photoName} alt={pizzaObject.name} />
          <h3>{pizzaObject.name}</h3>
          <p>{pizzaObject.ingredients}</p>
          <span>{pizzaObject.soldOut ? "SOLD OUT" : pizzaObject.price}</span>
        </li>
      </div>
    </main>
  );
}
