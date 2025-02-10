import express, { response } from "express";

const router = express.Router();

// Using the methods

router.get("/", (req, res) => {
  res.json("Get Method working");
});

export default router;

router.post("/", (req, res) => {
  res.json({
    message: "Post Method implemented",
  });
});
