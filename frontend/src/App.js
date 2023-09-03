import { useState, useEffect } from 'react';  // import useEffect
import './App.css';


function App() {
    const [names, setNames] = useState([]);
    const [nameInput, setNameInput] = useState('');
  
    const addName = () => {
        setNames([...names, nameInput]);
        setNameInput('');
    };
  
    const deleteName = (index) => {
      const updatedNames = [...names];
      updatedNames.filter(index, 1);
      setNames(updatedNames);
    };
  
    return (
      <div className="App">
        <h1 className="head">Contactor</h1>
        <div>
          <input className="bar"
            type="text"
            placeholder="Name"
            value={nameInput}
            onChange={(e) => setNameInput(e.target.value)}
          />
          <br></br> <br></br>
          <button className="button" onClick={addName}>Create Contact</button>
        </div>
  
        <div>
          {names.map((name, index) => (
            <li key={index}>
              <fieldset className="field">{name}
              <button className="delbut" onClick={() => deleteName(index)}>Delete</button></fieldset>
            </li> 
          ))}
        </div>
        <br></br>
      <div id="demo">
          <input className="high" type="text" placeholder="Name"/>
          <input className="low" type="text" placeholder="Number"/>
      </div>
     </div>
  
      
    );
  }
  export default App;
  
    