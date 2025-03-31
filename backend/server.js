// Creating backend for Atelierwear Atelier
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
require('dotenv').config();

const Pool = require('pg').Pool;
const PORT = process.env.PORT || 5000;
const app = express();
const pool = new Pool ({
  connectionString: process.env.DB_URL,
});


app.use(
    cors({
      origin: "http://localhost:5173", 
      methods: ["GET", "POST", "PUT", "DELETE"],
      allowedHeaders: ["Content-Type", "Authorization"],
      credentials: true,
    })
);
app.use(express.json());


app.get('/', (req, res) => {
  res.send('Aetherwear Atelier backend is live ✨');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = pool;