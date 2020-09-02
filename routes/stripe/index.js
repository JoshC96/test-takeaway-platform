const router = require("express").Router();
const stripe = require('stripe')(process.env.STRIPE_API_SECRET);

// Matches with "/stripe/secret"
router.get('/secret', async (req, res) => {
    const paymentIntent = await stripe.paymentIntents.create({
        amount: req.query.amount,
        currency: 'aud',
        // Verify your integration in this guide by including this parameter
        metadata: {integration_check: 'accept_a_payment'},
    });

  const intent = paymentIntent;
  res.json({client_secret: intent.client_secret});
});

module.exports = router;
