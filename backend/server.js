const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/api/portfolio', (req, res) => {
  // Mock portfolio data
  const portfolio = {
    user: "John Doe",
    investments: [
      { ticker: "AAPL", shares: 10, price: 150 },
      { ticker: "MSFT", shares: 5, price: 300 },
      { ticker: "GOOGL", shares: 8, price: 2800 }
    ],
    totalValue: 25300
  };

  res.json(portfolio);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});