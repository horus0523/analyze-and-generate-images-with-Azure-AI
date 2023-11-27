import React, { useState } from "react";
import "./App.css";

function App() {
  const [imageUrl, setImageUrl] = useState("");

  const handleImageAnalysis = () => {
    // Aquí irá el código para analizar la imagen
  };

  const handleImageGeneration = () => {
    // Aquí irá el código para generar la imagen
  };

  return (
    <div className="app">
      <h1 className="title">Computer vision</h1>
      <input
        type="text"
        className="input"
        placeholder="Enter URL to analyze or textual prompt to generate an image"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
      />
      <div className="buttons">
        <button className="button" onClick={handleImageAnalysis}>
          Analyze
        </button>
        <button className="button" onClick={handleImageGeneration}>
          Generate
        </button>
      </div>
    </div>
  );
}

export default App;
