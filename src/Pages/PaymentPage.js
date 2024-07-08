import React, { useState } from "react";
import "./PaymentPage.css";

export default function PaymentPage() {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [nameOnCard, setNameOnCard] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Payment submitted:", {
      cardNumber,
      expiryDate,
      cvv,
      nameOnCard,
    });
  };

  const handlePayment = () => {
    alert("Thank you for shopping!");
  };

  return (
    <div className="PaymentPage">
      <div>
        <h2>Payment</h2>
      </div>
      <form onSubmit={handleSubmit} className="card-payment-form">
        <label>
          <input
            placeholder="Card number"
            className="cardnumber"
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            required
          />
        </label>

        <label></label>
        <label className="details">
          <input
            type="text"
            className="exp-date"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            placeholder="Exp. date"
            required
          />
          <input
            placeholder="CVV"
            className="cvv"
            type="text"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            required
          />
        </label>

        <label>
          <input
            placeholder="Name on Card"
            className="cardname"
            type="text"
            value={nameOnCard}
            onChange={(e) => setNameOnCard(e.target.value)}
            required
          />
        </label>

        <label className="checkbox">
          <input id="checkbox" type="checkbox" name="checkbox" />
          <p>Use shipping address as billing address </p>
        </label>

        <h3>Remember me</h3>
        <label className="checkbox">
          <input id="checkbox" type="checkbox" name="checkbox" />{" "}
          <p> Save my information for faster checkout</p>
        </label>
        <button type="submit" onClick={handlePayment}>
          Pay Now
        </button>
      </form>
    </div>
  );
}
