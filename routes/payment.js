const express = require("express");
const {
  validatePayment,
  initiateOrderpayment,
} = require("../controllers/paymentController");

const router = express.Router();

const path = require("path");

router.route("/logo.svg").get((req, res) => {
  res.sendFile(path.join(__dirname, "logo.svg"));
});

router.route("/validatePayment").post(validatePayment);

router.route("/order/").post(initiateOrderpayment);

module.exports = router;
