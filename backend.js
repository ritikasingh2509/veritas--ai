// Backend placeholder (Node.js + Express)
const express = require("express");
const bodyParser = require("body-parser");
const { Configuration, OpenAIApi } = require("openai");
require("dotenv").config();

const app = express();
app.use(bodyParser.json());

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

// Example endpoint
app.post("/verify-news", async (req, res) => {
  const { news } = req.body;
  if (!news) return res.status(400).json({ error: "News text required" });

  // Placeholder: call OpenAI API to verify news
  // Replace this with actual prompt and logic
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `Is this news real or fake: ${news}`,
    max_tokens: 50,
  });

  res.json({ result: response.data.choices[0].text });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
