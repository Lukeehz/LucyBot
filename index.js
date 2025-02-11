require('dotenv').config();
const token = process.env.GOOGLE_TOKEN
const { GoogleGenerativeAI } = require('@google/generative-ai');
const genAI = new GoogleGenerativeAI(token); 

async function run(prompt) {
  const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash-exp' });
  const result = await model.generateContent(prompt);
  return result.response.text || 'Desculpe, não consegui gerar uma resposta.';
}

module.exports = { run };
