import { useState } from 'react'
import './css/App.css'

function App() {
  
  // Table State & Handling
  const options = [
    { id: 0, label:"Classic", src: "/public/images/coffee1.jpg"},
    { id: 1, label:"Birch", src: "/public/images/coffee2.jpg"},
    { id: 2, label:"White Marble", src: "/public/images/coffee3.jpg"},
    { id: 3, label:"Black Marble", src: "/public/images/coffee4.jpg"},
    { id: 4, label:"Black Marble w/ Black Rails", src: "/public/images/coffee5.jpg"},
    { id: 5, label:"White Marble w/ Gold Rails", src: "/public/images/coffee6.jpg"},
    { id: 6, label:"White Marble w/ White Rails", src: "/public/images/coffee7.jpg"},
    { id: 7, label:"Classic w/ White Rails", src: "/public/images/coffee8.jpg"},
  ];

  const [selectedID, setSelectedID] = useState(options[0].id);


  // Checkbox State & Handling
  const [c1Checked, setc1Checked] = useState(false);  // Cap
  const [c2Checked, setc2Checked] = useState(false);  // Label
  const [c3Checked, setc3Checked] = useState(false);  // Chapstick
  

  const handlec1Checked = () => {
    setc1Checked(!c1Checked);
  };

  const handlec2Checked = () => {
    setc2Checked(!c2Checked);
  };

  const handlec3Checked = () => {
    setc3Checked(!c3Checked);
  };


  return (
    <>
      <h1>Table Selector</h1>

      <div class="table-image-container">
        <img src={options[selectedID].src} class="table-image"/>

        <div class="table-options">
          {options.map( (opt) => (
            <button
              key={opt.id}
              class="table-button"
              type='button'
              role='radio'
              aria-checked={selectedID === opt.id}
              onClick={() => setSelectedID(opt.id)}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>


      <h1>Custom Water Bottle Builder</h1>
      
      <div class="bottle-image-container">
        <img src="/public/images/base.jpg" class="image-base"/>
        {c1Checked && <img src="/public/images/cap.png" class="image-overlay"/>}
        {c2Checked && <img src="/public/images/label.png" class="image-overlay"/>}
        {c3Checked && <img src="/public/images/chapstick.png" class="image-overlay"/>}
      </div>

      <div class="checkbox-container">
        <input 
          id='cap'
          class="checkbox-wrapper-41"
          type="checkbox"
          checked={c1Checked}
          onChange={handlec1Checked}
          style={{position:"relative", zIndex:2}}
        />

        <input 
          id='label'
          class="checkbox-wrapper-41"
          type="checkbox"
          checked={c2Checked}
          onChange={handlec2Checked}
          style={{position:"relative", zIndex:2}}
        />

        <input 
          id='chapstick'
          class="checkbox-wrapper-41"
          type="checkbox"
          checked={c3Checked}
          onChange={handlec3Checked}
          style={{position:"relative", zIndex:2}}
        />
      </div>

    </>
  )
}

export default App
