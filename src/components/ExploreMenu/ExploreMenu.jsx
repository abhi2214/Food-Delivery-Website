import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets';
const ExploreMenu = ({ category, setCategory }) => {
           
    

  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore Our Menu</h1>
     <p className='explore-menu-text'>Choose From a diverse menu featuring a delectable arrray of dishes crafted with the finest ingredient and culinary expertise . Our mission to satisfy  your craving and elvate your dining experinece , one delicious meal at a time.</p>
        <div className="explore-menu-list">
            {menu_list.map((item, index) => 
                <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)}className="explore-menu-item" key={index}>
                    <img className={category==item.menu_name?"active":""}src={item.menu_image} alt='' />
                    <h3>{item.menu_name}</h3>
                   
                </div>
            )}
            </div>
            <hr/>
    </div>
  )
}

export default ExploreMenu
