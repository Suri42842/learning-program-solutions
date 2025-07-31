 import React from "react";
import Cart from "./Cart";

class OnlineShopping extends React.Component {
  CartInfo = [
    { itemname: "Mobile", price: 12000 },
    { itemname: "Laptop", price: 55000 },
    { itemname: "Charger", price: 800 },
    { itemname: "Tab", price: 18000 },
    { itemname: "Pendrive", price: 500 }
  ];

  render() {
    return (
      <div>
        <h1 align="center">Shopping Cart</h1>
        <Cart item={this.CartInfo} />
      </div>
    );
  }
}

export default OnlineShopping;
