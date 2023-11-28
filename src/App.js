import React, { useState } from "react";
import "./App.css";
import analyzeImage from "./azure-image-analysis";

function App() {
  const [imageUrl, setImageUrl] = useState("");
  const [analysisResults, setAnalysisResults] = useState(null);

  const handleImageAnalysis = async () => {
    const results = await analyzeImage(imageUrl);
    setAnalysisResults(results);
  };

  const handleImageGeneration = () => {
    // Aquí irá el código para generar la imagen
    console.log("Generando la imagen...");
  };

  const DisplayResults = () => {
    if (!analysisResults) {
      return null;
    }

    return (
      <div>
        <img src={imageUrl} alt="Analyzed" />
        <pre>{JSON.stringify(analysisResults, null, 2)}</pre>
      </div>
    );
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
      <DisplayResults />
    </div>
  );
}

export default App;
