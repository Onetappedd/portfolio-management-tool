import React from "react";
import InputForm from "./components/InputForm";

const App = () => {
  const handleFormSubmit = (data) => {
    console.log("Form Data Submitted:", data);
    // Send data to backend (to be implemented later)
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <InputForm onSubmit={handleFormSubmit} />
    </div>
  );
};

export default App;