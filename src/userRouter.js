import express, { response } from "express";

const router = express.Router();

// Using the methods

router.get("/", (req, res) => {
  res.json("Get Method working");
});

router.post("/", (req, res) => {
  res.json({
    message: "Post Method implemented",
  });
});

router.put("/", (req, res) => {
  res.json({
    message: "Put Method implemented",
  });
});

router.delete("/", (req, res) => {
  res.json({
    message: "Delete Method implemented",
  });
});

export default router;
