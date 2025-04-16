import React, { useState } from "react";

const InputForm = ({ onSubmit }) => {
  const [portfolioAmount, setPortfolioAmount] = useState("");
  const [riskTolerance, setRiskTolerance] = useState(5);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ portfolioAmount, riskTolerance });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto p-4 bg-white shadow-md rounded"
    >
      <h2 className="text-xl font-bold text-center mb-4">Portfolio Generator</h2>

      {/* Portfolio Amount */}
      <div className="mb-4">
        <label
          htmlFor="portfolioAmount"
          className="block text-sm font-medium text-gray-700"
        >
          Portfolio Amount ($)
        </label>
        <input
          type="number"
          id="portfolioAmount"
          className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          placeholder="Enter amount (e.g., 10000)"
          value={portfolioAmount}
          onChange={(e) => setPortfolioAmount(e.target.value)}
          required
        />
      </div>

      {/* Risk Tolerance Slider */}
      <div className="mb-4">
        <label
          htmlFor="riskTolerance"
          className="block text-sm font-medium text-gray-700"
        >
          Risk Tolerance: {riskTolerance}
        </label>
        <input
          type="range"
          id="riskTolerance"
          min="1"
          max="10"
          value={riskTolerance}
          onChange={(e) => setRiskTolerance(e.target.value)}
          className="w-full"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
      >
        Generate Portfolio
      </button>
    </form>
  );
};

export default InputForm;