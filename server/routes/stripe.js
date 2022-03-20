const express = require("express");
const app = express();
const stripe = require("stripe")(
  "sk_test_51JwS4BDJ6KD8X4jUGSR8achFy3uf9yfXQO2VhrS2EXigCaHC4r9SVoY9mt0EVK0Ag2759bSmrEUgDCJbmxFziih400jGr7wisF"
);

app.post("/create-checkout-session", async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: "nok",
          unit_amount: 2000,
        },
        product_data: {
          products: req.body.products,
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: "https://example.com/success",
    cancel_url: "https://example.com/cancel",
  });

  res.redirect(303, session.url);
});

app.listen(4242, () => console.log(`Listening on port ${4242}!`));
