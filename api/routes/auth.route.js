import express from 'express';
import {signOut, signin, signup} from '../controllers/auth.controller.js';
import { addIngredient, addRecipe, getRecipes } from '../controllers/auth.controller.js';
import { isAdmin, verifyToken } from '../utils/verifyUser.js';
const router = express.Router();

router.post("/signup", signup)
router.post("/signin", signin)
router.get("/signout",signOut)
router.post("/ingredients", verifyToken, isAdmin, addIngredient);
router.post("/recipes", verifyToken, isAdmin, addRecipe);
router.get("/recipes", getRecipes);

export default router;
