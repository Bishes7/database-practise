import express from "express";

const app = express();

const PORT = 8000;

import userRouter from "./src/userRouter.js";

app.listen(PORT, (error) => {
  error ? console.log(error) : console.log(`http://localhost:${PORT}`);
});

// Middleware for Methods
app.use(express.json());

// Middleware for API
app.use("/api/v1/users", userRouter);
