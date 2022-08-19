import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="card-border">
        <div className="border-1">
          <img src="sweatshirt.jpg" className="icon-1" alt="" />
          <img src="heart.png" className="icon-2" alt="" />
          <p className="font-1"><b>Black Fantasy Sweatshirt</b></p>
          <p className="font-2">Price<b>$200</b></p>
          <div className="border-2">
            <img src="cart.png" className="icon-3" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
