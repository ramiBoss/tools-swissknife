import './App.css';
import React, { useState }  from 'react';
import { upperCase } from 'tools-engine';

function App() {
  const [textArea, setTextArea] = useState<string>("");

 const handleTextareaChange = (event: { target: { value: string; }; }) => {
  setTextArea(event.target.value)
  };

  const handleCaseChange = (buttonIndex: number) => {
    setTextArea(upperCase(textArea));
  };
    return (
      <div className='my-component'>
        <textarea
        className="textarea"
        value={textArea}
        onChange={handleTextareaChange}
        rows={4}
        cols={50}
      />
      <div className="button-container">
        <button className="button" onClick={() => handleCaseChange(1)}>UPPERCASE</button>
        <button className="button" onClick={() => handleCaseChange(2)}>LOWERCASE</button>
      </div>
    </div>
    );
}

export default App;
