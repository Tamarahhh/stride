import React from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "./CheckOut.css";
import { Link } from "react-router-dom";

export default function CheckoutPage() {
  return (
    <div className="CheckoutPage">
      <h2>Checkout</h2>
      <Form>
        <Form.Group as={Col} controlId="formGridEmail">
          <p className="label">Email</p>
          <Form.Control
            type="email"
            placeholder="Enter email"
            className="email-input"
            required
          />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridFirstname">
          <p className="label">Shipping address</p>
          <Form.Control
            type="text"
            placeholder="Firstname"
            className="firstname"
          />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridLastname">
          <Form.Control
            type="text"
            placeholder="Lastname"
            className="lastname"
          />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPhoneNumber">
          <Form.Control
            type="phonenumber"
            placeholder="+234"
            className="phonenumber"
          />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridAddress1">
          <Form.Control
            type="address"
            placeholder="Adress"
            className="mb-3 address"
          />
        </Form.Group>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Control placeholder="City" className="location" />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridZip">
            <Form.Control
              type="text"
              placeholder="Country"
              className="location"
            />
          </Form.Group>
        </Row>{" "}
      </Form>
      <Link to="/payment">
        {" "}
        <button className="paymentButton">Proceed to Payment</button>
      </Link>
    </div>
  );
}
