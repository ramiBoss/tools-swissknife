import './App.css';
import React, { useState }  from 'react';
import { upperCase, lowerCase } from 'tools-engine';
import { caseConvert } from './library/enums';
import { Casing } from './library/types';

function App() {
  const [textArea, setTextArea] = useState<string>("");

 const handleTextareaChange = (event: { target: { value: string; }; }) => {
  setTextArea(event.target.value)
  };

  const handleCaseChange = (caseOption: Casing ) => {
    switch(caseOption){
      case caseConvert.UPPERCASE: 
        setTextArea(upperCase(textArea));
        break;
      case caseConvert.LOWERCASE:
        setTextArea(lowerCase(textArea));
        break;
      default:
        setTextArea(upperCase(textArea));    
    }
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
        <button className="button" onClick={() => handleCaseChange(caseConvert.UPPERCASE)}>UPPERCASE</button>
        <button className="button" onClick={() => handleCaseChange(caseConvert.LOWERCASE)}>LOWERCASE</button>
      </div>
    </div>
    );
}

export default App;
