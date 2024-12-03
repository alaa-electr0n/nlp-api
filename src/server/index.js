const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
// const fetch = require("node-fetch"); //not working with require()
const port = 3000;
dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.static("dist"));

app.post("/analyze", async (req, res) => {
  const { text } = req.body;

  // Check if the input text (URL) is provided
  if (!text) {
    return res
      .status(400)
      .json({ error: "URL or text is required for analysis." });
  }

  try {
    // Build the MeaningCloud API URL with query parameters
    const apiKey = process.env.API_KEY;
    const apiUrl = `https://api.meaningcloud.com/sentiment-2.1?key=${apiKey}&url=${text}&lang=auto`;

    // Send GET request to MeaningCloud API
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`MeaningCloud API error: ${response.statusText}`);
    }

    // Parse the JSON response from MeaningCloud
    const data = await response.json();
    console.log("API Response:", data);
    // Send the analysis data back to the client
    res.json(data);
  } catch (error) {
    console.error("Error calling MeaningCloud API:", error.message);
    res
      .status(500)
      .json({ error: "Failed to analyze text. Please try again later." });
  }
});

app.listen(port, () =>
  console.log(`Server running on http://localhost:${port}`)
);
