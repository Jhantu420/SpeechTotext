import "./App.css";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import useClipboard from 'react-use-clipboard';


function App() {
 
  const stln = () => SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });
  const stopln = () => SpeechRecognition.stopListening();
  

  const { transcript, browserSupportsSpeechRecognition,resetTranscript } = useSpeechRecognition();
  const [isCopied, setCopied] = useClipboard(transcript);
  if (!browserSupportsSpeechRecognition) {
    return null;
  }

  return (
    <div className="container">
      <h2>Speech to text converter</h2>
      <br />
      <p>
        React hook that converts speech from the microphone to text and makes it
        available to your component
      </p>
      <div className="sub-container">
        <div className="main-content" >
          <p>{transcript}</p>
        </div>
        <div className="btn-style">
          <button onClick={stln}>Start Listening</button>
          <button onClick={stopln}>Stop Listening</button>
          <button onClick={setCopied}>{isCopied ? 'Copied!' : 'Copy to Clipboard'}</button>
          <button onClick={resetTranscript}>Clear</button> 
        </div>
      </div>
    </div>
  );
}

export default App;
