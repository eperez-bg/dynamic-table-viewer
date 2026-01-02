import { useState } from 'react'
import CapCheckbox from './components/capCheckbox'
import './css/App.css'

function App() {
  
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
        <img src='/public/images/coffee1.jpg' class="table-image"/>
        
      </div>

      <h1>Custom Water Bottle Builder</h1>
      
      <div class="bottle-image-container">
        <img src="/public/images/base.jpg" class="image-base"/>
        {c1Checked && <img src="/public/images/cap.png" class="image-overlay"/>}
        {c2Checked && <img src="/public/images/label.png" class="image-overlay"/>}
        {c3Checked && <img src="/public/images/chapstick.png" class="image-overlay"/>}
      </div>

      <input 
        id='cap'
        type="checkbox"
        checked={c1Checked}
        onChange={handlec1Checked}
        style={{position:"relative", zIndex:2}}
      />

      <input 
        id='label'
        type="checkbox"
        checked={c2Checked}
        onChange={handlec2Checked}
        style={{position:"relative", zIndex:2}}
      />

      <input 
        id='chapstick'
        type="checkbox"
        checked={c3Checked}
        onChange={handlec3Checked}
        style={{position:"relative", zIndex:2}}
      />

    </>
  )
}

export default App
