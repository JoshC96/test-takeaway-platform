// MODULES
import React from 'react';
import API from "../routes/api"
import Cart from "../components/cart"

// COMPONENTS
import Layout from "../components/layout"
import SEO from "../components/seo"
import CheckoutProducts from "../components/checkout-products"

import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
  CardElement,
  Elements,
  useElements,
  useStripe
} from '@stripe/react-stripe-js';

// Custom styling can be passed to options when creating an Element.
const CARD_ELEMENT_OPTIONS = {
    style: {
      base: {
        color: '#32325d',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: '16px',
        '::placeholder': {
          color: '#aab7c4'
        }
      },
      invalid: {
        color: '#fa755a',
        iconColor: '#fa755a'
      }
    }
  };
  
const CheckoutForm = () => {
    const [error, setError] = useState(null);  
    const stripe = useStripe();
    const elements = useElements();

    // Handle real-time validation errors from the card Element.
    const handleChange = (event) => {
        if (event.error) {
            setError(event.error.message);
        } else {
            setError(null);
        }
    }

    // Handle form submission.
    const handleSubmit = async (event) => {
      event.preventDefault();

      if (!stripe || !elements) {
        // Stripe.js has not yet loaded.
        return;
      }


      // Amount intended to be collected by this payment.
      // A positive integer representing how much to charge in the smallest
      // currency unit (e.g., 100 cents to charge $1.00 or 100 to charge ¥100,
      // a zero-decimal currency). The minimum amount is $0.50 US or equivalent 
      // in charge currency. The amount value supports up to eight digits 
      // (e.g., a value of 99999999 for a USD charge of $999,999.99).

      //TODO: AMOUNT SHOULD BE VALIDATED
      console.log(Cart.priceTotal)
      const amountToCharge = Cart.priceTotal.toString().replace('.','');

      let secret = null; 
      await API.getStripeSecret(amountToCharge)
                .then(
                    res => secret = res.data.client_secret
                ).catch(
                    err => console.log(err)
                );

      // IF SECRET IS A STRING - PROCEED PAYMENT
      if(secret){
        const card = elements.getElement(CardElement);
        const result = await stripe.confirmCardPayment(secret, {
          payment_method: {
            card: card,
            billing_details: {
              name: "Josh Test",
            },
          }
        });

        if (result.error) {
            // Inform the user if there was an error.
            setError(result.error.message);
        } else {
            setError(null);
            if (result.paymentIntent.status === 'succeeded') {
              window.location.href = "/order-confirmed";
              // console.log(result);
              // alert("successful payment")
            }
        }
      }
      else{
        console.log("error getting secret");
        return;
      }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-row">
                <label htmlFor="customer-name">
                    Full Name
                </label>
                <input id="customer-name" type="text" name="customer-name" />
            </div>
            <div className="form-row">
                <label htmlFor="customer-number">
                    Phone Number
                </label>
                <input id="customer-number" text="number" name="customer-number" />
            </div>
            <div className="form-row">
                <label htmlFor="customer-number">
                  Email Address
                </label>
                <input id="customer-email" text="emial" name="customer-email" />
            </div>

            <CheckoutProducts />

            <div className="form-row">
                <label htmlFor="card-element">
                    Credit or debit card
                </label>
                <CardElement
                    id="card-element"
                    options={CARD_ELEMENT_OPTIONS}
                    onChange={handleChange}
                />
                <div className="card-errors" role="alert">{error}</div>
            </div>
          <button disabled={!stripe} className="stripe-button" type="submit">Submit Payment {Cart.priceTotal}</button>
        </form>
    );
}

// Setup Stripe.js and the Elements provider
const stripePromise = loadStripe('pk_test_PEw1BBp3hV4rqarJJTgSKzoB00dDlNEWKl');

const Checkout = () => {
  return (
    <Layout>
    <SEO title="Cart" />
        <Elements stripe={stripePromise}>
            <CheckoutForm />
        </Elements>
    </Layout>
  );
}

export default Checkout;