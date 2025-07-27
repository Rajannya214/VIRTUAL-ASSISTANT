import React, { useContext } from 'react';
import "./App.css";
import va from "./assets/ai.png";
import { CiMicrophoneOn } from "react-icons/ci";
import { datacontext } from './Context/UserContext';
import speakvid from "./assets/speak.gif.mp4";
import aigif from "./assets/aiVoice.gif";

function App() {
  let { recognition, speaking, setSpeaking, promt, response,setPromt,setResponse } = useContext(datacontext);

  return (
    <div className='main'>
      <img src={va} alt="" id="virtualassistant" />
      <span>I am Leo, Your Advanced Virtual Assistant</span>

      {!speaking ? (
        <button onClick={() => {
          setPromt("listening...")
          setSpeaking(true);
          setResponse(false);
          recognition.start();
        }}>
          Click here <CiMicrophoneOn />
        </button>
      ) : (
        <div className='response'>
          <p>{promt}</p>
          {!response ? (
            <video src={speakvid} autoPlay loop muted style={{ height: '200px' }} id="speak" />
          ) : (
            <img src={aigif} alt="" id="aigif" />
          )}
        </div>
      )}
    </div>
  );
}

export default App;
