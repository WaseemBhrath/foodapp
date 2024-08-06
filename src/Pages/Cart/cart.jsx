import React, { useContext } from 'react'
import './cart.css'
import { StoreContext } from '../../component/Context/storeContext'
import { useNavigate } from 'react-router';

export default function Cart() {
  const {cartitem,food_list,removefromcart,getTotalAmount} = useContext(StoreContext);
  const navigate=useNavigate()
  return (
    <div className='cart'>
      <div className="cart-item">
        <div className="cart-item-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br/>
        <hr/>
        {food_list.map((item,index)=>{
          if (cartitem[item._id]>0) {
            return(

            <div>
               <div className="cart-item-title cart-item-item">
                <img src={item.image} alt="" />
                <p>{item.name}</p>
                <p>${item.price}</p>
                <p>{cartitem[item._id]}</p>
                <p>{item.price*cartitem[item._id]}</p>
                <p onClick={()=>removefromcart(item._id)} className='cross'>x</p>
              </div>
              <hr />
            </div>


            )
            
          }
        })}
      </div>
      <div className="cart-buttom">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div className="cart-total-detail">
            <p>Subtotal</p>
            <p>${getTotalAmount()===0?0:getTotalAmount()}</p>
          </div>
          <div className="cart-total-detail">
            <p>Delivery Fee</p>
            <p>${getTotalAmount()===0?0:2}</p>
          </div>
          <div className="cart-total-detail">
            <b>Total</b>
            <b>${getTotalAmount()===0?0:getTotalAmount()+2}</b>
          </div>
          <button onClick={()=>navigate('/placeorder')}>Proceed To CheckOut</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>If you have a promo code,Enter it Here </p>
            <div className="cart-promocode-inputs">
              <input type="text" placeholder='Enter your Promocode' />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
