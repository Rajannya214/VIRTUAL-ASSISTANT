
## 🧠 AI Assistant

An intelligent AI-powered assistant built using *React, **Vite, and **OpenAI API* to provide conversational help, summaries, and task automation.


### 🚀 Features

* 🗣 Natural Language Conversations
* 📝 Text Summarization
* 📌 Context-Aware Replies
* 📤 PDF/Text Upload and Parsing
* 🌐 Web Search Integration (optional)
* 🔒 API Key secured
* ⚡ Fast Vite + React frontend

---

### 🛠 Built With

* [React](https://reactjs.org/)
* [Vite](https://vitejs.dev/)
* [OpenAI API](https://platform.openai.com/)
* [Tailwind CSS](https://tailwindcss.com/)
* (Optional) Express.js, Node.js for backend

---

### 📦 Installation

bash
git clone https://github.com/yourusername/ai-assistant.git
cd ai-assistant
npm install


---

### ▶ Usage

1. *Set up your OpenAI API key*:

Create a .env file:

env
VITE_OPENAI_API_KEY=your_api_key_here


2. *Run the app locally*:

bash
npm run dev


Open in browser at http://localhost:5173

---

### 🚀 Deployment

To deploy on GitHub Pages:

1. Set the base in vite.config.js:

js
export default {
  base: '/your-repo-name/'
}


2. Add deployment scripts to package.json:

json
"scripts": {
  "build": "vite build",
  "deploy": "gh-pages -d dist"
}


3. Install gh-pages:

bash
npm install gh-pages --save-dev


4. Build and deploy:

bash
npm run build
npm run deploy


---

### 👩‍💻 Author

*Rajannya Nandy*
🌐 [LinkedIn](https://linkedin.com/in/rajannya) | 📧 [nandyrajannya@gmail.com](mailto:nandyrajannya@gmail.com)

---
