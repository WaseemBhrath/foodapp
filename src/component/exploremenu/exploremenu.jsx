import React from 'react'
import './exploremenu.css'
import { menu_list } from '../../assets/assets'

export default function Exploremenu({Category,setCategory }) {
  return (
    <div className="exploremenu" id='exploremenu'>
        <h1>Explore Our Menu</h1>
        <p className='exploremenu-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim rem minus mollitia perspiciatis aliquam consectetur!</p>

        <div className="exploremenu-list">
            {menu_list.map((item,index)=>{
                return(
                    <div  key={index} onClick={()=>setCategory(prev=>prev===item.menu_name? "All":item.menu_name)} className="exploremenu-list-item">
                        <img className={Category===item.menu_name?'exploremenu-list-item-active':""} src={item.menu_image} alt="" />
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
        <hr/>

    </div>
  )
}
