import React, { createContext, useState } from 'react';
import run from '../gemini';
export const datacontext = createContext();

function UserContext({ children }) {
  let[speaking,setSpeaking]=useState(false)
  let[promt,setPromt]=useState("listening...")
  let[response,setResponse]=useState(false)

    function speak(text){
        let text_speak=new SpeechSynthesisUtterance(text)
        text_speak.volume=1;
        text_speak.rate=1;
        text_speak.pitch=1;
        text_speak.lang="eng-US";
        window.speechSynthesis.speak(text_speak)
    }
    
    async function aiResponse(promt){
      let text=await run(promt)
      let newText=text.split("**")&&text.split("*")&&text.replace("google","Rajannya Nandy")&&text.replace("Google","Rajannya Nandy")
      setPromt(newText)
      speak(newText)
      setResponse(true)
      setTimeout(()=>{
        setSpeaking(false)
    },4000)
      
    }
    let speechRecognition=window.SpeechRecognition||window.webkitSpeechRecognition
    let recognition=new speechRecognition()
    recognition.onresult=(e)=>{
      let currentIndex=e.resultIndex
      let transcript=e.results[currentIndex][0].transcript
     setPromt(transcript)
     takeCommand(transcript.toLowerCase())
    }
    function takeCommand(command){
      if(command.includes("open")&& command.includes("youtube")){
        window.open("https://www.youtube.com/","_blank")
        speak("Opening Youtube...")
        setResponse(true)
        setPromt("opening Youtube...")
        setTimeout(()=>{
        setSpeaking(false)
    },4000)
      }
    
      else if(command.includes("open")&& command.includes("google")){
        window.open("https://www.google.com/","_blank")
        speak("Opening Google...")
        setResponse(true)
        setPromt("Opening Google...")
        setTimeout(()=>{
        setSpeaking(false)
    },4000)
  }
    else if(command.includes("open")&& command.includes("whatsapp")){
        window.open("https://www.whatsapp.com/","_blank")
        speak("Opening Whatsapp...")
        setResponse(true)
        setPromt("opening Whatsapp...")
        setTimeout(()=>{
        setSpeaking(false)
    },4000)
  }
  else if(command.includes("time")){
      let time=new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
        speak(time)
        setResponse(true)
        setPromt()
        setTimeout(()=>{
        setSpeaking(false)
    },4000)
  }
  else if(command.includes("date")){
      let date=new Date().toLocaleString(undefined,{day:"numeric",month:"short"})
        speak(date)
        setResponse(true)
        setPromt(date)
        setTimeout(()=>{
        setSpeaking(false)
    },4000)
  }
  else if(command.includes("your name") || command.includes("who are you")){
    let nameResponse = "My name is Leo. I am your virtual assistant."
    speak(nameResponse)
    setResponse(true)
    setPromt(nameResponse)
    setTimeout(()=> setSpeaking(true), 4000)
  }

      else{
        aiResponse(command)
      }
    }
    let value={
     recognition,
     speaking,
     setSpeaking,
     promt,
     setPromt,
     response,
     setResponse
    }

  return (
    <datacontext.Provider value={value}>
      {children}
    </datacontext.Provider>
  );
}

export default UserContext;
