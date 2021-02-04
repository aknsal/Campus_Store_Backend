import express from "express";
import getToken from "../middleware/getToken.js";
const router = express.Router();
import {
  getProductId,
  createProduct,
  placeOrder,
} from "../controllers/productController.js";

router.route("/:id").get(getProductId);
router.route("/:id/order").get(getProductId).post(getToken, placeOrder);
router.route("/create").post(getToken, createProduct);

export default router;