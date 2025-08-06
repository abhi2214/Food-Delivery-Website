import React, { useContext } from 'react'
import { StoreContext } from '../../Context/StoreContext'
import './Cart.css';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const {cartitems,food_list,removefromcart,getTotalCartAmount} =useContext(StoreContext)
  const navigate = useNavigate();


  return (
    <div className='cart'>
      <div className="cart-item">
        <div className="cart-item-title">
          <p>Items</p>
          <p>Title</p>
          <p>$Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item,index)=>{
          if(cartitems[item._id]>0){
            return (
                  <div key={index} className="cart-items-title cart-items-item">
                    <img src={item.image} alt="" />
                    <p>{item.name}</p>
                    <p>${item.price}</p>
                    <p>{cartitems[item._id]}</p>
                    <p>{item.price*cartitems[item._id]}</p>
                    <p onClick={()=>removefromcart(item._id)}>x</p>
                  </div>
            )
          }
        })}
      </div>
      <div className="cart-bottom">
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
               <p>${getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr />
            <div className="cart-total-detail">
              <b>Total</b>
              <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
            </div>
          </div>
          <button onClick={()=>navigate('/order')}>PROCESSED TO CHECKOUT</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>If you have any promo code ? Apply here</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder = "Promo code" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
