import React from 'react'
import './Appdownload.css'
import { assets } from '../../assets/assets'

function Appdownload() {
  return (
    <div className='App-download'>
        <p>For Better Experience Download <br />Tomato App</p>
        <div className="App-download-platforms">
            <img src={assets.play_store} alt="" />
            <img src={assets.app_store} alt="" />
        </div>
    </div>
  )
}

export default Appdownload