require('dotenv').config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const cors = require("cors");

const { HoldingsModel } = require("./models/HoldingsModel");
const { PositionsModel } = require("./models/PositionsModel");
const { OrdersModel } = require("./models/OrdersModel");

const PORT = process.env.PORT || 3002;
const MONGO_URI = process.env.MONGO_URL;

const app = express();

// ✅ Middleware
app.use(cors({
  origin: "https://stockbazar.onrender.com" // your deployed frontend
}));
app.use(bodyParser.json());

// =========================
// Routes
// =========================

// Get all holdings
app.get("/allHoldings", async (req, res) => {
  try {
    const allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// Get all positions
app.get("/allPositions", async (req, res) => {
  try {
    const allPositions = await PositionsModel.find({});
    res.json(allPositions);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// Create new order
app.post("/newOrder", async (req, res) => {
  try {
    const newOrder = new OrdersModel({
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
      mode: req.body.mode,
    });
    await newOrder.save();
    res.json({ success: true, message: "Order saved!" });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// =========================
// Admin login
// =========================
const ADMIN_EMAIL = "admin@example.com";
const ADMIN_PASS = "admin123";

app.post("/signup", (req, res) => {
  const { email, password } = req.body;

  if (email === ADMIN_EMAIL && password === ADMIN_PASS) {
    return res.json({ success: true, message: "Login successful ✅" });
  } else {
    return res.json({ success: false, message: "Invalid email or password ❌" });
  }
});

// =========================
// Start server and connect DB
// =========================
mongoose.connect(MONGO_URI)
  .then(() => console.log("✅ DB connected"))
  .catch(err => console.error("❌ DB connection error:", err));

app.listen(PORT, () => {
  console.log(`🚀 App started on port ${PORT}`);
});
