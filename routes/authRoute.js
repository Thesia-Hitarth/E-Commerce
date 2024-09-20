import express from "express";
import { registerController,loginController,testController,forgotPasswordController, updateProfileController, getOrdersController, getAllOrdersController, orderStatusController } from "../controllers/authController.js";
import { requireSignIn,isAdmin } from "../middlewares/authmiddleware.js";

//router object
const router = express.Router()


//routing
//REGISTER || METHOD POST
router.post("/register", registerController);

//login || post method
router.post("/login",loginController);

 //forgot password || post method
 router.post('/forgot-password',forgotPasswordController)

//test routes
router.get("/test",requireSignIn,isAdmin,testController);

//protected route auth--USER
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true })
});
//protected route auth--ADMIN
router.get("/admin-auth", requireSignIn,isAdmin, (req, res) => {
  res.status(200).send({ ok: true })
});

//update profile
router.put('/profile',requireSignIn,updateProfileController);

//orders
router.get('/orders',requireSignIn,getOrdersController)

//All Orders
router.get('/all-orders',requireSignIn,isAdmin,getAllOrdersController)

// order status update
router.put(
  "/order-status/:orderId",
  requireSignIn,
  isAdmin,
  orderStatusController
);

export default router;
