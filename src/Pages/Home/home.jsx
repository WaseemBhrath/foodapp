import React, { useState } from 'react'
import './home.css'
import Header from '../../component/Header/Header'
import Exploremenu from '../../component/exploremenu/exploremenu'
import Foodisplay from '../../component/FoodDisplay/foodisplay'

export default function Home() {
  let [Category,setCategory]=useState('All')
  return (
    <div>
      <Header/>
      <Exploremenu Category={Category} setCategory={setCategory}/>
      <Foodisplay Category={Category}/>
    </div>
  )
}
