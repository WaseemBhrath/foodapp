import React, { useState } from 'react'
import './home.css'
import Header from '../../component/Header/Header'
import Exploremenu from '../../component/exploremenu/exploremenu'
import Foodisplay from '../../component/FoodDisplay/foodisplay'
import Appdownload from '../../component/AppDownload/Appdownload'

export default function Home() {
  let [Category,setCategory]=useState('All')
  return (
    <div>
      <Header/>
      <Exploremenu Category={Category} setCategory={setCategory}/>
      <Foodisplay Category={Category}/>
      <Appdownload/>
    </div>
  )
}
