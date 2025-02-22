// MODULES
import React, { createRef } from 'react';
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

    const emailRef = createRef();
    const phoneRef = createRef();
    const nameRef = createRef();

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

      Cart.customer.email = emailRef.current.value ? emailRef.current.value : "";
      Cart.customer.phone = phoneRef.current.value ? phoneRef.current.value : "";
      Cart.customer.name = nameRef.current.value ? nameRef.current.value : "";

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
      console.log(parseFloat(Cart.priceTotal).toFixed(2).toString().replace('.',''))
      const amountToCharge = parseFloat(Cart.priceTotal).toFixed(2).toString().replace('.','');

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
            billing_details: Cart.customer
          }
        });

        if (result.error) {
            // Inform the user if there was an error.
            setError(result.error.message);
            console.log(result.error.message)
        } else {
            setError(null);
            if (result.paymentIntent.status === 'succeeded') {
              window.location.href = "/order-confirmed";
              console.log(result);
            }
        }
      }
      else{
        console.log("error getting secret");
        return;
      }
    };

    return (
        <form className="checkout-form" onSubmit={handleSubmit}>
            <div className="form-row">
                <label htmlFor="customer-name">
                    Full Name
                </label>
                <input ref={nameRef} id="customer-name" required type="text" name="customer-name" />
            </div>
            <div className="form-row">
                <label htmlFor="customer-number">
                  Phone Number
                </label>
                <input ref={phoneRef} id="customer-number" text="number" name="customer-number" />
            </div>
            <div className="form-row">
                <label htmlFor="customer-number">
                  Email Address
                </label>
                <input ref={emailRef} required id="customer-email" text="email" name="customer-email" />
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
          <button disabled={!stripe} className="stripe-button" type="submit">Submit Payment ${parseFloat(Cart.priceTotal).toFixed(2)}</button>
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