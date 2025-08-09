import React from "react";

class Cart extends React.Component {
  render() {
    return (
      <table border="1" align="center" style={{ color: "green", fontSize: "18px" }}>
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Price (₹)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.item.map((item, index) => (
            <tr key={index}>
              <td>{item.itemname}</td>
              <td>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default Cart;
