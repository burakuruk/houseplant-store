import React from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Container className="text-center">
        <h1>Welcome to Houseplant Store</h1>
        <p>Your home for the best indoor plants.</p>
        <Button as={Link} to="/products" variant="success" size="lg">
          Get Started
        </Button>
      </Container>
    </div>
  );
};

export default LandingPage;
