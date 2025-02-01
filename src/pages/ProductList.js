import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const products = [
  { id: 1, name: "Aloe Vera", price: 15, category: "Succulents", img: "/assets/aloe.jpg" },
  { id: 2, name: "Snake Plant", price: 20, category: "Indoor", img: "/assets/snake.jpg" },
  { id: 3, name: "Peace Lily", price: 18, category: "Flowering", img: "/assets/lily.jpg" },
];

const ProductList = () => {
  const dispatch = useDispatch();

  return (
    <Container className="mt-5">
      <Row>
        {products.map((product) => (
          <Col key={product.id} sm={12} md={6} lg={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src={product.img} style={{ height: "200px", objectFit: "cover" }} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>${product.price}</Card.Text>
                <Button variant="success" onClick={() => dispatch(addToCart(product))}>
                  Add to Cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;
