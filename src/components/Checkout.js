import React from "react";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";
import { useCartContext } from "../context/cart_context";
import FormatPrice from "../Helpers/FormatPrice";
import { NavLink } from "react-router-dom";

const Checkout = () => {
  const { user, isAuthenticated } = useAuth0();
  const { cart, total_price, shipping_fee, clearCart } = useCartContext();

  if (cart.length === 0) {
    return (
      <EmptyDiv>
        <h3>No Cart in Item</h3>
      </EmptyDiv>
    );
  }

  const checkoutConfirm=()=>{
    clearCart();
    alert("congratulation!!! Your order is on the way !!!");
  }

  return (
    <Wrapper>
      <div className="right-side">
        <div className="receipt">
          <h2 className="receipt-heading">Receipt Summary</h2>
          <div>
            <table className="table">
              <tr>
                <td>Subtotal</td>
                <td className="price">
                  <FormatPrice price={total_price} />
                </td>
              </tr>
              <tr>
                <td>Shipping Fee</td>
                <td className="price">
                  <FormatPrice price={shipping_fee} />
                </td>
              </tr>
              <tr className="total">
                <td>Total</td>
                <td className="price">
                  <FormatPrice price={shipping_fee + total_price} />
                </td>
              </tr>
            </table>
          </div>
        </div>

        <div className="payment-info">
          <h3 className="payment-heading">Payment Information</h3>
          <form
            className="form-box"
            enctype="text/plain"
            method="get"
            target="_blank"
          >
            <div>
              <label for="full-name">Full Name: </label>
              {isAuthenticated && (
                <input
                  id="full-name"
                  name="full-name"
                  value={user.name}
                  required
                  type="text"
                />
              )}
            </div>

            <div>
              <label for="credit-card-num">
                Card Number:
                <span className="card-logos">
                  <i className="card-logo"></i>
                  <i className="card-logo"></i>
                  <i className="card-logo"></i>
                  <i className="card-logo"></i>{" "}
                </span>
              </label>
              <input
                id="credit-card-num"
                name="credit-card-num"
                placeholder="1111-2222-3333-4444"
                required
                type="text"
              />
            </div>

            <div>
              <p className="expires">Expires on: </p>
              <div className="card-expiration">
                <label for="expiration-month">Month: </label>
                <select id="expiration-month" name="expiration-month" required>
                  <option value="">Month:</option>
                  <option value="">January</option>
                  <option value="">February</option>
                  <option value="">March</option>
                  <option value="">April</option>
                  <option value="">May</option>
                  <option value="">June</option>
                  <option value="">July</option>
                  <option value="">August</option>
                  <option value="">September</option>
                  <option value="">October</option>
                  <option value="">November</option>
                  <option value="">December</option>
                </select>

                <label className="expiration-year"> Year: </label>
                <select id="expiration-year" name="expiration-year" required>
                  <option value="">Year</option>
                  <option value="">2023</option>
                  <option value="">2024</option>
                  <option value="">2025</option>
                  <option value="">2026</option>
                </select>
              </div>
            </div>

            <div>
              <label for="cvv">CVV: </label>
              <input
                id="cvv"
                name="cvv"
                placeholder="415"
                type="text"
                required
              />
            </div>

            <NavLink to="/">
              <button className="btn" onClick={checkoutConfirm}>
                Confirm
              </button>
            </NavLink>
          </form>

          <p className="footer-text">
            Your credit card information is encrypted
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

const EmptyDiv = styled.div`
  display: grid;
  place-items: center;
  height: 50vh;

  h3 {
    font-size: 4.2rem;
    text-transform: capitalize;
    font-weight: 300;
  }
`;
const Wrapper = styled.section`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 62.5%;
  }

  body {
    background: url("https://images.pexels.com/photos/2876787/pexels-photo-2876787.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2");
    background-position: center;
    background-size: cover;
    backdrop-filter: blur(8px);
    color: #3c3c39;

    display: flex;
    justify-content: center;
    height: 100vh;
    font-family: "Monsterrat", sans-serif;
    position: relative;
    padding: 8rem 0;
  }

  .checkout-container {
    max-width: 70%;
    height: 50rem;
    display: flex;
    justify-content: center;
  }

  em {
    font-style: normal;
    font-weight: 700;
  }

  hr {
    color: #fff;
    margin-bottom: 1.2rem;
  }

  /* Right Side of container */

  .right-side {
    background-color: #fff;
    padding: 1.8rem 3.2rem;
  }

  .receipt {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    border-bottom: solid 1px;
    margin-bottom: 1rem;
  }

  .receipt-heading {
    font-size: 2.6rem;
    text-align: center;
    font-weight: bold;
  }

  .table {
    border-collapse: separate;
    border-spacing: 0 1.5rem;
    color: #64645f;
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    width: 100%;
  }

  .total td {
    font-size: 1.4rem;
    font-weight: 900;
  }

  .price {
    text-align: end;
  }

  /* Payment Section */

  .payment-heading {
    font-size: 1.4rem;
    margin-bottom: 1rem;
  }

  .form-box {
    display: grid;
    grid-template-rows: 1fr;
    gap: 1.5rem;
  }

  .card-logo {
    font-size: 2rem;
  }

  .expires,
  .form-box label {
    font-size: 1.2rem;
    font-weight: 700;
  }

  .form-box input {
    font-family: inherit;
    font-size: 1.2rem;
    padding: 0.5rem;
    width: 100%;
  }

  .form-box select {
    padding: 0.5rem;
  }

  .form-box #cvv {
    width: 25%;
  }

  .cvv-info:link,
  .cvv-info:visited {
    color: inherit;
    text-decoration: underline;
  }

  .cvv-info:hover,
  .cvv-info:active {
    color: #5f7986;
    text-decoration: none;
  }

  .btn {
    background-color: #4c616b;
    border: none;
    border-radius: 8px;
    color: #eff2f3;
    font-size: 1.6rem;
    font-weight: 700;
    letter-spacing: 0.5px;
    margin-bottom: 1rem;
    padding: 1.5rem;
    cursor: pointer;
    width: 100%;
  }

  .btn:hover {
    background-color: #5f7986;
    transition: ease-out 0.1s;
  }

  .footer-text {
    font-size: 1rem;
    text-align: center;
  }

  .form-box *:focus {
    outline: none;
    box-shadow: 0 0 0 0.8rem rgba(139, 139, 107, 0.5);
    border-radius: 8px;
  }
`;

export default Checkout;
