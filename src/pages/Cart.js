import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, increaseQuantity, decreaseQuantity } from "../redux/cartSlice";
import { Container, Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch();

  return (
    <Container className="mt-5">
      <h1>Your Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>${item.price}</td>
                  <td>{item.quantity}</td>
                  <td>
                    <Button variant="outline-primary" size="sm" onClick={() => dispatch(increaseQuantity(item.id))}>+</Button>
                    <Button variant="outline-secondary" size="sm" onClick={() => dispatch(decreaseQuantity(item.id))}>-</Button>
                    <Button variant="danger" size="sm" onClick={() => dispatch(removeFromCart(item.id))}>Remove</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <h3>Total: ${totalPrice.toFixed(2)}</h3>
          <Button variant="success">Checkout (Coming Soon)</Button>
          <Link to="/products" className="btn btn-outline-primary ms-3">Continue Shopping</Link>
        </>
      )}
    </Container>
  );
};

export default Cart;
