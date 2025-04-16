import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [portfolio, setPortfolio] = useState(null);
  const [error, setError] = useState(null);

  // Fetch portfolio data from the backend
  useEffect(() => {
    fetch("http://localhost:5000/api/portfolio")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setPortfolio(data))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <div className="app">
      <header className="app-header">
        <h1>Portfolio Management Tool</h1>
      </header>
      <main>
        {error ? (
          <div className="error">Error: {error}</div>
        ) : !portfolio ? (
          <div>Loading...</div>
        ) : (
          <div className="portfolio">
            <h2>Portfolio for {portfolio.user}</h2>
            <table>
              <thead>
                <tr>
                  <th>Ticker</th>
                  <th>Shares</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {portfolio.investments.map((investment, index) => (
                  <tr key={index}>
                    <td>{investment.ticker}</td>
                    <td>{investment.shares}</td>
                    <td>${investment.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <h3>Total Value: ${portfolio.totalValue}</h3>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;