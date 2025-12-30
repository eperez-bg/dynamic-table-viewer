import { useState } from 'react'
import CapCheckbox from './components/capCheckbox'
import './css/App.css'

function App() {
  

  return (
    <>
      <h1>Table Selector</h1>

      <div class="table-image-container">
        <img src='/public/images/coffee1.jpg' class="table-image"/>
        
      </div>

      <h1>Custom Water Bottle Builder</h1>
      
      <div class="bottle-image-container">
        <img src="/public/images/base.jpg" class="image-base"/>
        <img src="/public/images/cap.png" class="image-overlay"/>
      </div>

      <CapCheckbox/>

    </>
  )
}

export default App
