const getToken = require("../middleware/getToken");

const crypto = require("crypto");
const shortid = require("shortid");

const { razorpay } = require("../utilities/razorpay");

const validatePayment = (req, res) => {
  const secret = "12345678";

  console.log(req.body);

  const shasum = crypto.createHmac("sha256", secret);
  shasum.update(JSON.stringify(req.body));
  const digest = shasum.digest("hex");

  console.log(digest, req.headers["x-razorpay-signature"]);

  if (digest === req.headers["x-razorpay-signature"]) {
    console.log("request is legit");
    console.log(JSON.stringify(req.body, null, 4));
  } else {
    // pass it
  }
  res.json({ status: "ok" });
};

const initiateOrderpayment = async (req, res) => {
  let options = {
    amount: 30000,
    currency: "INR",
    receipt: shortid.generate(),
  };
  const order = await razorpay.orders.create(options, function (err, order) {
    console.log(order);
    res.json(order);
  });
};

module.exports = {
  validatePayment,
  initiateOrderpayment,
};
