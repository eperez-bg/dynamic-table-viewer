import { useState } from 'react'
import './css/App.css'

function App() {
  
  // Table State & Handling

  //// OLD TABLE, NOW USING WORKBENCH ASSETS ////

  /*const options = [
    { id: 0, label:"Classic", src: "/images/coffee1.jpg"},
    { id: 1, label:"Birch", src: "/images/coffee2.jpg"},
    { id: 2, label:"White Marble", src: "/images/coffee3.jpg"},
    { id: 3, label:"Black Marble", src: "/images/coffee4.jpg"},
    { id: 4, label:"Black Marble w/ Black Rails", src: "/images/coffee5.jpg"},
    { id: 5, label:"White Marble w/ Gold Rails", src: "/images/coffee6.jpg"},
    { id: 6, label:"White Marble w/ White Rails", src: "/images/coffee7.jpg"},
    { id: 7, label:"Classic w/ White Rails", src: "/images/coffee8.jpg"},
  ]; */


  // COLORS:    Original: #dbdce1
  //            Black: #24201f
  //            Blue: #4553b4
  //            Gray: #a8acad
  const options = [
    { id: 0, label:"Original", src: "/images/Original.png", color:"#dbdce1"},
    { id: 1, label:"Black", src: "/images/Black.png", color:"#24201f"},
    { id: 2, label:"Blue", src: "/images/Blue.png", color:"#4553b4"},
    { id: 3, label:"Gray", src: "/images/Gray.png", color:"#a8acad"},
  ];


  const [selectedID, setSelectedID] = useState(options[0].id);


  // Checkbox State & Handling
  const [c1Checked, setc1Checked] = useState(false);  // Keyboard
  const [c2Checked, setc2Checked] = useState(false);  // Paper Towel

  //// WAS USING FOR WATER BOTTLE DEMO -- NO LONGER IN USE ////
  // const [c3Checked, setc3Checked] = useState(false);  // Chapstick
  

  const handlec1Checked = () => {
    setc1Checked(!c1Checked);
  };

  const handlec2Checked = () => {
    setc2Checked(!c2Checked);
  };


  /*  //// NO LONGER IN USE ////
  const handlec3Checked = () => {
    setc3Checked(!c3Checked);
  }; */


  //// ORIGINAL CODE FOR OLD TABLE + WATER BOTTLE DEMO ////
  /*
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

      
      <div class="bottle-image-container">
        <h1>Custom Water Bottle Builder</h1>

        <div class='img-stack'>
          <img src="/images/base.jpg" class="image-base"/>
          {c1Checked && <img src="/images/cap.png" class="image-overlay"/>}
          {c2Checked && <img src="/images/label.png" class="image-overlay"/>}
          {c3Checked && <img src="/images/chapstick.png" class="image-overlay"/>}
        </div>

        <div class="checkbox-container">
          <input 
            id='cap'
            class="bottle-button"
            type="button"
            value="cap"
            checked={c1Checked}
            onClick={handlec1Checked}
          />

          <input 
            id='label'
            class="bottle-button"
            type="button"
            value="label"
            checked={c2Checked}
            onClick={handlec2Checked}
          />

          <input 
            id='chapstick'
            class="bottle-button"
            type="button"
            value="chapstick"
            checked={c3Checked}
            onClick={handlec3Checked}
          />
        </div>
      </div>
    </>
  )
  */

  return (
    <>
      <div class="table-image-container">
        <div class="img-stack">
          <img src={options[selectedID].src} class="image-base"/>
          {c1Checked && <img src="/images/Fufillment_Bench_Keyboardpng.png" class="image-overlay"/>}
          {c2Checked && <img src="/images/Fufillment_Bench_Paperpng.png" class="image-overlay"/>}
        </div>

        <div class="buttons">
          <div class="colors-container">
            <label class="colors-label">COLORS</label>
            <div class="color-options">
              {options.map( (opt) => (
                <button
                  key={opt.id}
                  class="color-button"
                  type='button'
                  role='radio'
                  aria-checked={selectedID === opt.id}
                  onClick={() => setSelectedID(opt.id)}
                  style={{ backgroundColor: opt.color }}
                >
                </button>
              ))}
            </div>
          </div>

          <div class="addons">
            <label class="addons-label"><p class="addons-label-text">ADD-ONS</p></label>
            <div class="table-addons">
              <input 
                id='Keyboard'
                class="addon-button"
                type="button"
                value="KEYBOARD"
                checked={c1Checked}
                onClick={handlec1Checked}
              />

              <input 
                id='Paper-Towel'
                class="addon-button"
                type="button"
                value="TOWEL HOLDER"
                checked={c2Checked}
                onClick={handlec2Checked}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
