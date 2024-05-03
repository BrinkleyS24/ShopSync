// HomeScreen.js

import React from 'react';
import { Container, Row, Col, Button, Carousel } from 'react-bootstrap'; // Import React Bootstrap components
import './HomeScreen.css';

function HomeScreen() {

  const brandLogos = [
    'logo1.png',
    'logo2.png',
    'logo3.png',
    // Add more logos
  ];
  // Sample data for recommendations and recently viewed items
  const recommendedProducts = [
    { id: 1, name: 'Product A' },
    { id: 2, name: 'Product B' },
    // Add more products
  ];

  const recentlyViewedItems = [
    { id: 1, name: 'Item X' },
    { id: 2, name: 'Item Y' },
    // Add more items
  ];

  // Handle search logic (you can replace this with your own implementation)
  const handleSearch = (query) => {
    console.log('Search query:', query);
    // Implement your search functionality here
  };

  return (
    <Container className="home-container">
      <header>
        <h1 className="text-center">Welcome to ShopSync</h1>
        <p className="text-muted text-center">Your universal shopping experience</p>
      </header>

      <Row>
        <Col md={6}>
          {/* Features section */}
          <section className="features">
            <h2>Key Features</h2>
            <ul>
              <li>Shop from multiple stores in one place</li>
              <li>Universal shopping cart for easy checkout</li>
              <li>Secure payment gateway</li>
              <li>Personalized user experience</li>
            </ul>
          </section>
        </Col>
        <Col md={6}>
          {/* Product Recommendations */}
          <section className="recommended-products">
            <h2>Recommended for You</h2>
            <ul>
              {recommendedProducts.map((product) => (
                <li key={product.id}>{product.name}</li>
              ))}
            </ul>
          </section>
        </Col>
      </Row>

      <section className="brand-logos">
        <h2>Brands You Can Shop From</h2>
        <Carousel>
          {brandLogos.map((logo, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block mx-auto"
                src={logo}
                alt={`Brand Logo ${index + 1}`}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </section>

      {/* Recently Viewed Items */}
      <section className="recently-viewed">
        <h2>Recently Viewed</h2>
        <ul>
          {recentlyViewedItems.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </section>

      {/* CTA section */}
      <section className="cta text-center">
        <h2>Get Started</h2>
        <p>Sign up now to start shopping!</p>
        <Button variant="primary" className="signup-button">
          Sign Up
        </Button>
      </section>

      <footer className="text-center text-muted">
        <p>© 2024 ShopSync. All rights reserved.</p>
      </footer>
    </Container>
  );
}

export default HomeScreen;
