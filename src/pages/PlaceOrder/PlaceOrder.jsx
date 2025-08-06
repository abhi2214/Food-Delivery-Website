import React, { useContext } from 'react'
import { StoreContext } from '../../Context/StoreContext'
import './PlaceOrder.css'

const PlaceOrder = () => {

   const {getTotalCartAmount} = useContext(StoreContext)

  return (
    <form className='place-order'>
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-tasking">
          <input type="text" placeholder='First name' />
          <input type="text" placeholder='Last name'/>
        </div>
        <input type="email" placeholder='Email address' />
        <input type="text" placeholder='street' />
        <div className="multi-tasking">
          <input type="text" placeholder='City' />
          <input type="text" placeholder='State'/>
        </div>
        <div className="multi-tasking">
          <input type="text" placeholder='Zip Code' />
          <input type="text" placeholder='Country'/>
        </div>
        <input type="Number" placeholder='Phone Number.' />
      </div>
      <div className="place-order-right">
         <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-detail">
              <p>SubTotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-detail">
               <p>Dilvery Fee</p>
               <p>${2}</p>
            </div>
            <hr />
            <div className="cart-total-detail">
              <b>Total</b>
              <b>${getTotalCartAmount()+2}</b>
            </div>
          </div>
          <button >PROCESSED TO PAYMENT</button>
        </div>
      </div>
    </form>
      
    
  )
}

export default PlaceOrder
