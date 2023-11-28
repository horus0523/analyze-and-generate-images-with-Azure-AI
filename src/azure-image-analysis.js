// azure-image-analysis.js
import axios from "axios";

const analyzeImage = async (imageUrl) => {
  const response = await axios.post(
    "https://gitchallenge.cognitiveservices.azure.com/vision/v3.2/analyze",
    {
      url: imageUrl,
    },
    {
      headers: {
        "Ocp-Apim-Subscription-Key": process.env.REACT_APP_AZURE_VISION_KEY,
      },
      params: {
        visualFeatures: "Categories,Description,Color",
      },
    }
  );

  return response.data;
};

export default analyzeImage;
