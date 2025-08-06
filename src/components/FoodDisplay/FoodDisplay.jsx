import React from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../Context/StoreContext.jsx';
import { useContext } from 'react';
import FoodItem from '../FoodItem/FoodItem.jsx';
const FoodDisplay = ( {category = "All" } ) => {

    const { food_list } = useContext(StoreContext);
  return (
    <div className='food-display' id='food-display'>
      <h2>Top Dishes Near Your</h2>
      <div className="food-display-list">
        {food_list.map((item , index) => {
          {console.log(category, item.category)}
         if( category === "All" || item.category === category){
            return  <FoodItem key={index} id={item._id} name={item.name} image={item.image} price={item.price} description={item.description}  />
         }
          return null;
                
        })}
      </div>
    </div>
  )
}

export default FoodDisplay;
