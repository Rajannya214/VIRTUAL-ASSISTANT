import React, { createContext, useState } from "react";
import run from "../gemini";

export const datacontext = createContext();

function UserContext({ children }) {
  const [speaking, setSpeaking] = useState(false);
  const [promt, setPromt] = useState("Listening...");
  const [response, setResponse] = useState(false);

  function speak(text) {
    const speech = new SpeechSynthesisUtterance(text);
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    speech.lang = "en-US"; // ✅ fixed
    window.speechSynthesis.speak(speech);
  }

  async function aiResponse(prompt) {
    const text = await run(prompt);

    // ✅ cleaned text properly
    const newText = text
      .replace(/\*/g, "")
      .replace(/google/gi, "Rajannya Nandy");

    setPromt(newText);
    speak(newText);
    setResponse(true);

    setTimeout(() => {
      setSpeaking(false);
    }, 4000);
  }

  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  const recognition = new SpeechRecognition();

  recognition.onresult = (e) => {
    const transcript = e.results[e.resultIndex][0].transcript;
    setPromt(transcript);
    takeCommand(transcript.toLowerCase());
  };

  function takeCommand(command) {
    if (command.includes("open") && command.includes("youtube")) {
      window.open("https://www.youtube.com/", "_blank");
      speak("Opening YouTube...");
      setPromt("Opening YouTube...");
    } 
    else if (command.includes("open") && command.includes("google")) {
      window.open("https://www.google.com/", "_blank");
      speak("Opening Google...");
      setPromt("Opening Google...");
    } 
    else if (command.includes("open") && command.includes("whatsapp")) {
      window.open("https://www.whatsapp.com/", "_blank");
      speak("Opening WhatsApp...");
      setPromt("Opening WhatsApp...");
    } 
    else if (command.includes("time")) {
      const time = new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
      speak(time);
      setPromt(time);
    } 
    else if (command.includes("date")) {
      const date = new Date().toLocaleDateString([], {
        day: "numeric",
        month: "short",
      });
      speak(date);
      setPromt(date);
    } 
    else if (
      command.includes("your name") ||
      command.includes("who are you")
    ) {
      const nameResponse = "My name is Leo. I am your virtual assistant.";
      speak(nameResponse);
      setPromt(nameResponse);
    } 
    else {
      aiResponse(command);
      return;
    }

    setResponse(true);

    setTimeout(() => {
      setSpeaking(false);
    }, 4000);
  }

  const value = {
    recognition,
    speaking,
    setSpeaking,
    promt,
    setPromt,
    response,
    setResponse,
  };

  return (
    <datacontext.Provider value={value}>
      {children}
    </datacontext.Provider>
  );
}

export default UserContext;