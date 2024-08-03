import React, { useContext} from 'react'
import './Fooditem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../Context/storeContext'

const Fooditem=({id,name,price,description,image})=> {
  const {cartitem,Addtocart,removefromcart}= useContext(StoreContext);
  

  return (
    <div className='fooditem-item'>
        <div className="food-item-image-container">
            <img className='food-item-image' src={image} alt="" />
            {!cartitem[id]
             ?
              <img className='food-item-image-container-add' onClick={()=>Addtocart(id)} src={assets.add_icon_white}/>
             :
             <div className='food-item-counter'>
              <img onClick={()=>removefromcart(id)}  src={assets.remove_icon_red} alt="icon" />
              <p>{cartitem[id]}</p>
              <img onClick={()=>Addtocart(id)}   src={assets.add_icon_green}/>
              
             </div>
            }
        </div>
        <div className="food-item-info">
            <div className="food-item-rating">
                <p>{name}</p>
                <img src={assets.rating_starts} alt="" />
            </div>
            <p className='food-item-description'>{description}</p>
            <p className='food-item-price'>${price}</p>
        </div>
    </div>
  )
}

export default Fooditem