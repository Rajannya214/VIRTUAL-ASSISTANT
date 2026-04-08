import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = "AIzaSyDy4EhZwZTd_n5Vbfe85r9Zfy9YN0MOtVY"; // ⚠️ move to backend in real apps
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash", // ✅ FIXED
});

const generationConfig = {
  temperature: 0.9,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 2048,
};

async function run(prompt) {
  try {
    const result = await model.generateContent({
      contents: [
        {
          role: "user",
          parts: [{ text: prompt }],
        },
      ],
      generationConfig,
    });

    return result.response.text();
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Sorry, something went wrong.";
  }
}

export default run;