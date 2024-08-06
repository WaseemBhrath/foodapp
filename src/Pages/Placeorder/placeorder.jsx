import React, { useContext } from 'react'
import './placeorder.css'
import { StoreContext } from '../../component/Context/storeContext'

export default function Placeorder() {
  const {getTotalAmount}=useContext(StoreContext);
  return (
    <div className='place-order'>
      <div className='place-order-left'>
        <p className='title'>Delivery   Information </p>
        <div className="multi-field">
          <input type="text" placeholder='First name' />
          <input type="text" placeholder='Last name' />
        </div>
        <input type="email" placeholder='Emain Address' />
        <input type="text" placeholder='Street' />
        <div className="multi-field">
          <input type="text" placeholder='City' />
          <input type="text" placeholder='State' />
        </div>
        <div className="multi-field">
          <input type="text" placeholder='Zip Code' />
          <input type="text" placeholder='Country' />
        </div>
        <input type="text" placeholder='Phone No' />
      </div>
      <div className='place-order-right'>
       <div className="cart-total">
          <h2>Cart Total</h2>
          <div className="cart-total-detail">
            <p>Subtotal</p>
            <p>${getTotalAmount()===0?0:getTotalAmount()+2}</p>
          </div>
          <div className="cart-total-detail">
            <p>Delivery Fee</p>
            <p>{getTotalAmount()===0?0:2 }</p>
          </div>
          <div className="cart-total-detail">
            <b>Total</b>
            <b>${getTotalAmount()===0?0:getTotalAmount()+2}</b>
          </div>
          <button className='placeholder-btn'>Proceed To Payment</button>
        </div>
      </div>
    </div>
  )
}
